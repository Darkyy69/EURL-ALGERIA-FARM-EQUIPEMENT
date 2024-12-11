import axios from "axios";
import Child from "@/app/products/[category]/child";

export async function generateStaticParams() {
  // Fetch data from APIs
  const categoriesResponse = await axios.get(
    "https://abovines.com/api/categories.php"
  );
  const subcategoriesResponse = await axios.get(
    "https://abovines.com/api/subcategories.php"
  );
  const productsResponse = await axios.get(
    "https://abovines.com/api/products.php"
  );

  const categories = categoriesResponse.data;
  const subcategories = subcategoriesResponse.data;
  const products = productsResponse.data;

  // Generate paths
  const paths = [];

  categories.forEach((category) => {
    const categorySubcategories = subcategories.filter(
      (subcategory) => subcategory.category_id === category.id
    );

    categorySubcategories.forEach((subcategory) => {
      const subcategoryProducts = products.filter(
        (product) => product.subcategory_id === subcategory.id
      );

      subcategoryProducts.forEach((product) => {
        paths.push({
          category: category.slug,
          product: product.slug,
        });
      });
    });
  });

  return paths;
}

const ProductCategoryPage = ({ params }) => {
  return <Child params={params} />;
};

export default ProductCategoryPage;

// Add this function for static generation
// export async function generateStaticParams() {
//   const categories = getAllCategories(); // Replace with your logic for fetching categories
//   const locales = ["en", "fr"]; // List all your locales

//   const params = [];
//   locales.forEach((locale) => {
//     categories.forEach((category) => {
//       params.push({ locale, category });
//     });
//   });

//   return params;
// }
