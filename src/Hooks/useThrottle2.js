import { useEffect, useRef, useState } from "react";
import { func, number } from "prop-types";

const useThrottle2 = (value, interval = 500) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastUpdated = useRef(null);

  useEffect(() => {
    const now = Date.now();

    if (lastUpdated.current && now >= lastUpdated.current + interval) {
      lastUpdated.current = now;
      setThrottledValue(value);
    } else {
      const handler = window.setTimeout(() => {
        lastUpdated.current = now;
        setThrottledValue(value);
      }, interval);

      return () => window.clearTimeout(handler);
    }
  }, [value, interval]);


  return throttledValue;
};

useThrottle2.propTypes = {
  value: func,
  delay: number,
};

export default useThrottle2;
