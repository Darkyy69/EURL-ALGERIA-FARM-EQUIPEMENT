"use client";

import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { useDataContext } from "@/components/DataProvider";

export default function ProductChildPage({ params }) {
  const { getProductData } = useDataContext();
  let productData = getProductData(params.category, params.product);
  if (productData && typeof productData.content === "string") {
    try {
      productData.content = JSON.parse(productData.content);
    } catch (error) {
      console.error("Failed to parse product content:", error);
    }
  }
  return <ProductDetailTemplate product={productData} />;
}
