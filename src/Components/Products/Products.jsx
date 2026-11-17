import React, { useState } from "react";
import Overview from "./Overview/Overview";
import ProductsSection from "./ProductsSection/ProductsSection";
import CallToAction from "./CallToAction/CallToAction";

const Products = () => {
  const [isSpecOpen, setIsSpecOpen] = useState(false);

  return (
    <div className="homepage">
      {!isSpecOpen && <Overview />}
      <ProductsSection onSpecChange={(open) => setIsSpecOpen(open)} />
      {!isSpecOpen && <CallToAction />}
    </div>
  );
};

export default Products;
