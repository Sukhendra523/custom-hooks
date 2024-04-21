import { useEffect, useRef, useState } from "react";
import { func, number } from "prop-types";

const useThrottle1 = (value, delay) => {
  const [throttledValue, setThrottledValue] = useState(value);

  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      const now = Date.now();
      const timeElapsed = now - lastExecuted.current;

      if (timeElapsed >= delay) {
        setThrottledValue(value);
        lastExecuted.current = now;
      }
    }, delay - (Date.now() - lastExecuted.current));

    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);

  return throttledValue;
};

useThrottle1.propTypes = {
  value: func,
  delay: number,
};

export default useThrottle1;
