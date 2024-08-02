import { useEffect, useState } from "react";

const useSize = () => {
  const isClient = typeof window === "object";

  const getSize = () => {
    return isClient ? [window.innerWidth, window.innerHeight] : [0, 0];
  };

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);

  return windowSize;
};

export default useSize;