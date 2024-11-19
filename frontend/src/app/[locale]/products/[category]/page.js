import { notFound } from "next/navigation";
import ProductList from "@/components/ProductList";
import { categories, getCategory, getProductsByCategory } from "@/lib/products";

// Define available locales
const locales = ["en", "fr"]; // Add more locales as required

export async function generateStaticParams() {
  const params = [];

  for (const locale of locales) {
    for (const category of categories) {
      params.push({
        locale,
        category: category.slug, // Use the slug for each category
      });
    }
  }

  return params;
}

export default function CategoryPage({ params }) {
  const category = getCategory(params.category);
  const products = getProductsByCategory(params.category);

  if (!category) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{category.name}</h1>
      <p className="mb-8">{category.description}</p>
      <ProductList products={products} />
    </div>
  );
}
