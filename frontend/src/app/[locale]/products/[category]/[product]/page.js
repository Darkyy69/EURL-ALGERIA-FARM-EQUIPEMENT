import { notFound } from "next/navigation";
import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { getProductData } from "@/lib/products";

export default function ProductPage({ params }) {
  const productData = getProductData(params.category, params.product);

  if (!productData) {
    notFound();
  }

  return <ProductDetailTemplate product={productData} />;
}
