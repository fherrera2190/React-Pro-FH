import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface UseProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({
  product,
  onChange,
  value = 0,
}: UseProductArgs) => {
  const [counter, setCounter] = useState(value);
  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {

    if (isControlled.current) {
      return onChange?.({ count: value, product });
    }

    const newValue = Math.max(0, counter + value);
    setCounter(newValue);
    onChange?.({ count: newValue, product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return { increaseBy, counter };
};
