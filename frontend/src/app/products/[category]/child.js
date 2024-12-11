"use client";
import { notFound } from "next/navigation";
import CategoryPage from "@/components/ProductsCategoryTemplate";
// import { getProductsByCategory } from "@/lib/products";
import { useDataContext } from "@/components/DataProvider";

export default function ProductCategoryPage({ params }) {
  const { category } = params;
  const { getProductsByCategory } = useDataContext();
  const products = getProductsByCategory(category);

  return <CategoryPage products={products} category={category} />;
}
