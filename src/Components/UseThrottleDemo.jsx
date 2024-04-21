import { useEffect, useState } from "react";
// import useThrottle2 from "../Hooks/useThrottle2";
import useThrottle1 from "../Hooks/useThrottle1";

const UseThrottleDemo = ()=> {
  const [windowSize, setWindowSize] = useState({});
  const throttledHandleScroll = useThrottle1(handleScroll, 5000);
  const throttledHandleResize = useThrottle1(handleResize, 5000);


  useEffect(() => {
    const eventArray = [
      { e: "scroll", h: throttledHandleScroll },
      { e: "resize", h: throttledHandleResize },
    ];

    eventArray.forEach(({ e, h }) => {
      window.addEventListener(e, h);
    });

    return () => {
      eventArray.forEach(({ e, h }) => {
        window.removeEventListener(e, h);
      });

    };
  }, []);

  function handleResize () {
    setWindowSize({ ...windowSize, innerWidth, innerHeight });
  };


  function handleScroll () {
    setWindowSize({ ...windowSize, scrollX, scrollY });
  };

  return (
    <div className="float-container">
      <h1>Throttling for after every 5000ms with useThrottle1 </h1>
      {Object.keys(windowSize).map((key, i) => (
        <p key={i}>
          <b>{key}: </b> <span>{windowSize[key]}</span>
          <br />
          <br />
        </p>
      ))}
    </div>
  );
}

export default UseThrottleDemo;
