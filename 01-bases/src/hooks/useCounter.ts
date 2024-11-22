import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

interface UseCounterParams {
  maxCount: number;
}

export const useCounter = ({ maxCount = 10 }: UseCounterParams) => {
  const [counter, setCounter] = useState(5);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const elementToAnimate = useRef<any>(null);

  const timeLine = useRef(gsap.timeline());

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, maxCount));
  };

  useLayoutEffect(() => {
    // console.log(counterElement);

    if (!elementToAnimate.current) return;

    timeLine.current
      .to(elementToAnimate.current, {
        x: 100,
        duration: 0.5,
        ease: "ease.out",
      })
      .to(elementToAnimate.current, {
        x: 0,
        duration: 1,
        ease: "bounce.out",
      })
      .pause();
  }, []);

  useEffect(() => {
    // if (counter < maxCount) return;

    timeLine.current.play(0);
  }, [counter]);

  return { counter, handleClick, elementToAnimate };
};
