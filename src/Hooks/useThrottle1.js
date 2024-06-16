import { useEffect, useRef, useState } from "react";
import { func, number } from "prop-types";

const useThrottle1 = (func, delay) => {
  const [throttledValue, setThrottledValue] = useState(func);

  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      const now = Date.now();
      const timeElapsed = now - lastExecuted.current;

      if (timeElapsed >= delay) {
        setThrottledValue(func);
        lastExecuted.current = now;
      }
    }, delay - (Date.now() - lastExecuted.current));

    return () => {
      clearTimeout(handler);
    };
  }, [func, delay]);

  return throttledValue;
};

useThrottle1.propTypes = {
  func: func,
  delay: number,
};

export default useThrottle1;
