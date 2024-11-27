import { notFound } from "next/navigation";
import CategoryPage from "@/components/ProductsCategoryTemplate";
import { getProductsByCategory } from "@/lib/products";

export default function ProductCategoryPage({ params }) {
  const { category } = params;
  const products = getProductsByCategory(category);

  if (!products || products.length === 0) {
    notFound();
  }

  return <CategoryPage products={products} category={category} />;
}
