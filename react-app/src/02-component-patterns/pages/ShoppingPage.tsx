import { useState } from "react";
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { Product } from "../interfaces/interfaces";
import "../styles/custom-styles.css";
const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};

const product2 = {
  id: "2",
  title: "Coffee Mug - Meme",
  img: "./coffee-mug2.png",
};

const products: Product[] = [product, product2];

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
  const [shoppinCart, setShoppinCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
        {/* Al recibir hijos se transforma en un high order component */}

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white text-bold " />
            <ProductButtons className="custom-button" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        <ProductCard
          product={product2}
          className="bg-dark text-white"
          style={{ width: "100px" }}
        >
          <ProductImage className="custom-image" />
          <ProductButtons className="custom-button" />
        </ProductCard>
        <ProductCard
          product={product}
          className="bg-dark text-white"
          style={{ width: "100px" }}
        >
          <ProductImage className="custom-image" />
          <ProductButtons className="custom-button" />
        </ProductCard>
      </div>
    </div>
  );
};
