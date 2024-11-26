import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  ProductCard,
  ProductButtons,
  ProductTitle,
  ProductImage,
} from "do-product-card";

const product = {
  id: "1",
  title: "Coffe Mug - Card",
  // img: "./coffee-mug.png",
};

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <ProductCard
          product={product}
          initialValues={{
            count: 6,
            maxCount: 20,
          }}
        >
          {() => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )}
        </ProductCard>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
