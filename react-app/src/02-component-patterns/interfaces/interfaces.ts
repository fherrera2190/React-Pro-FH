import { ReactNode } from "react";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductCardProps {
  product: Product;
  children?: ReactNode;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): ReactNode;
  Image: (props: { img: string }) => ReactNode;
  Title: (props: { title: string }) => ReactNode;
  Buttons: () => ReactNode;
}
