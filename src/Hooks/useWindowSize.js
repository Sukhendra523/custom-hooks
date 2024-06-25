import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: innerWidth,
    height: innerHeight,
  });

  useEffect(() => {
    const resizeListener = () => {
      setWindowSize({
        width: innerWidth,
        height: innerHeight,
      });
    };

    document.addEventListener("resize", resizeListener);

    return () => {
      document.removeEventListener("resize", resizeListener);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
