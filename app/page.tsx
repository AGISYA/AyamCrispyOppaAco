import BestProduct from "@/components/organisms/bestproduct";
import Navbar from "@/components/organisms/navbar";
import ProductCarousel from "@/components/organisms/productcarousel";
import React from "react";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ProductCarousel />
      <BestProduct />
    </div>
  );
}
