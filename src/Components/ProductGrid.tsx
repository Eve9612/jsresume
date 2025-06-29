import React from "react";
import { ProductCard } from "../Components/ProductCard";
import { products } from "../Data/products";

export const ProductGrid: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "24px",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
