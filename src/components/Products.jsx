import React from "react";
import ProductsCard from "./ProductsCard";

const Products = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          Shopping Everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
          dignissimos, molestias mollitia tenetur, placeat minus maxime ex
          corporis harum quis, modi magnam! Quas, eum non adipisci esse nam quam
          aperiam! Nulla obcaecati ex incidunt debitis at, eligendi commodi
          dolore reprehenderit illo excepturi ad fugit officia suscipit
          asperiores accusantium consectetur non dolor. Quos dicta ex
          necessitatibus, facere quisquam sapiente omnis consectetur!
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <ProductsCard />
      </div>
    </div>
  );
};

export default Products;