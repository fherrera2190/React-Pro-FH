import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext, CSSProperties, ReactNode } from "react";
import { Product, ProductContextProps } from "../interfaces/interfaces";

export interface Props {
  product: Product;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}
export const ProductContext = createContext<ProductContextProps>(
  {} as ProductContextProps
);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children, className, style }: Props) => {
  const { increaseBy, counter } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>{children}</div>
    </Provider>
  );
};
