import { useState } from "react";
import { Product } from "../interfaces/interfaces";

interface ProductInCart extends Product {
  count: number;
}
interface onProductCountChangeArgs {
  count: number;
  product: Product;
}

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: onProductCountChangeArgs) => {
    setShoppingCart((oldShoppingCart) => {
      const productInCart: ProductInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(0, productInCart.count + count) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }

      const { [product.id]: _, ...rest } = oldShoppingCart;
      void _;
      return rest;
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
