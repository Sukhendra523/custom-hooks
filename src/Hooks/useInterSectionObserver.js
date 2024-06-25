import { useRef, useState } from "react";

const useInterSectionObserver = (options) => {
  const [entry, setEntry] = useState({});
  const targetRef = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    if (!window.IntersectionObserver) return;

    observer.current = new IntersectionObserver((entries) => {
      setEntry(entries[0]);
    }, options);

    const { current: currentTarget } = targetRef;
    const { current: currentObserver } = observer;

    if (currentTarget) {
      currentObserver.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        currentObserver.unobserve(currentTarget);
      }
    };
  }, [observer]);

  return [targetRef, entry];
};

export default useInterSectionObserver;
