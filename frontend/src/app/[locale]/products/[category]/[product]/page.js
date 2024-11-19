import { notFound } from "next/navigation";
import ProductDetails from "@/components/ProductDetails";
import { categories, getProduct, getProductsByCategory } from "@/lib/products";

// Define the generateStaticParams function
export async function generateStaticParams() {
  // Use the exported categories array directly
  const params = [];
  for (const category of categories) {
    const products = getProductsByCategory(category.slug); // Fetch products for each category
    products.forEach((product) => {
      params.push({
        category: category.slug, // Use 'slug' as the category identifier
        product: product.slug, // Use 'slug' as the product identifier
      });
    });
  }

  return params;
}

export default function ProductPage({ params }) {
  const product = getProduct(params.category, params.product);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
