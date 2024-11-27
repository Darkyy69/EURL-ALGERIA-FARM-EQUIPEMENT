import { notFound } from "next/navigation";
import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import {
  getProductData,
  getAllLocales,
  getAllCategories,
  getProductsByCategory,
} from "@/lib/products";

export default function ProductPage({ params }) {
  const productData = getProductData(params.category, params.product);

  if (!productData) {
    notFound();
  }

  return <ProductDetailTemplate product={productData} />;
}

// Add this function to statically generate pages
export async function generateStaticParams() {
  const locales = ["en", "fr"];
  const categories = getAllCategories(); // Replace with logic to fetch all categories
  const params = [];

  locales.forEach((locale) => {
    categories.forEach((category) => {
      const products = getProductsByCategory(category); // Fetch all products for the category
      products.forEach((product) => {
        params.push({
          locale,
          category,
          product: product.link, // Adjust this if your product data uses a different key
        });
      });
    });
  });

  return params;
}
