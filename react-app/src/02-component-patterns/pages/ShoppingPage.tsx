import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        initialValues={{ count: 4, maxCount: 10 }}
      >
        {({ reset, isMaxCountReached, increaseBy, count }) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white text-bold " />
            <ProductButtons className="custom-button" />
            <button onClick={reset}>Reset</button>
            <button onClick={() => increaseBy(2)}>+2</button>
            <button
              onClick={() => increaseBy(-2)}
              style={{ display: !isMaxCountReached ? "none" : "block" }}
            >
              -2
            </button>
            <span>{count}</span>
            {/* {JSON.stringify(args, null, 3)} */}
          </>
        )}
      </ProductCard>
    </div>
  );
};
