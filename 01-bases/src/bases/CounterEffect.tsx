import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const MAXIMUN_COUNT = 10;
export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);
  const counterElement = useRef<HTMLHeadingElement>(null);
  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
  };

  useEffect(() => {
    if (counter < 10) return;
    console.log(
      `%C Se llemgo al valor maximo`,
      `color: red; background: black`
    );

    const timeLine = gsap.timeline()

    timeLine.to(counterElement.current, { x: 100, duration: 0.5, ease: "ease.out" })
    timeLine.to(counterElement.current, { x: 0, duration: 1, ease: "bounce.out" })

  }, [counter]);

  return (
    <>
      <h1>Counter Effect: </h1>
      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
