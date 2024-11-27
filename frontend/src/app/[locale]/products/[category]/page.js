import Child from "@/app/[locale]/products/[category]/child";
import { getAllCategories } from "@/lib/products";

// Add this function for static generation
export async function generateStaticParams() {
  const categories = getAllCategories(); // Replace with your logic for fetching categories
  const locales = ["en", "fr"]; // List all your locales

  const params = [];
  locales.forEach((locale) => {
    categories.forEach((category) => {
      params.push({ locale, category });
    });
  });

  return params;
}
const ProductCategoryPage = ({ params }) => {
  return <Child params={params} />;
};

export default ProductCategoryPage;
