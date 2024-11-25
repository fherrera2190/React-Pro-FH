import { ReactNode } from "react";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProuducTitleProps } from "../components/ProductTitle";
import { Props as ProuducImageProps } from "../components/ProductImage";
import { Props as ProuducButtonsProps } from "../components/ProductImage";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): ReactNode;
  Image: (Props: ProuducImageProps) => ReactNode;
  Title: (Props: ProuducTitleProps) => ReactNode;
  Buttons: (Props: ProuducButtonsProps) => ReactNode;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}
