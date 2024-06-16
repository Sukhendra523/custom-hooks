import { useRef } from "react";

const useCustomEffect = (effect, dependencies) => {
  const isFirstRender = useRef(true);
  const prevDependencies = useRef([]);
  let cleanUp;

  if (isFirstRender.current) {
    cleanUp = effect();
    isFirstRender.current = false;
    return () => {
      if (cleanUp && typeof cleanUp === "function") {
        cleanUp();
      }
    };
  }

  const isDependenciesChanged =
    JSON.stringify(dependencies) !== JSON.stringify(prevDependencies.current);

    // run effect if dependencies is undefined or isDependenciesChanged;
  const runEffect = !dependencies || isDependenciesChanged;


  if (runEffect) {
    cleanUp = effect();

    if (cleanUp && typeof cleanUp === "function" && dependencies) {
      cleanUp();
    }
  }

  prevDependencies.current = dependencies || [];
};


export default useCustomEffect;
