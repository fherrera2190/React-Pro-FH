import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};
export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
        {/* Al recibir hijos se transforma en un high order component */}
        <ProductCard product={product}>
          <ProductCard.Image img="https://picsum.photos/120/120" />
          <ProductCard.Title title="Nemesis" />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
