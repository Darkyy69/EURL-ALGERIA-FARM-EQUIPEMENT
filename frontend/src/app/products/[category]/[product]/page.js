import axios from "axios";
import Child from "@/app/products/[category]/[product]/child";

export default function ProductPage({ params }) {
  return <Child params={params} />;
}

// Add this function to statically generate pages
// export async function generateStaticParams() {
//   const locales = ["en", "fr"];
//   const categories = getAllCategories(); // Replace with logic to fetch all categories
//   const params = [];

//   locales.forEach((locale) => {
//     categories.forEach((category) => {
//       const products = getProductsByCategory(category); // Fetch all products for the category
//       products.forEach((product) => {
//         params.push({
//           locale,
//           category,
//           product: product.link, // Adjust this if your product data uses a different key
//         });
//       });
//     });
//   });

//   return params;
// }

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

      if (subcategoryProducts.length > 0) {
        // Push each product under the subcategory
        subcategoryProducts.forEach((product) => {
          paths.push({
            category: category.slug,
            product: product.slug,
          });
        });
      } else {
        // Push subcategory without products
        paths.push({
          category: category.slug,
          product: subcategory.slug, // Use subcategory slug as placeholder
        });
      }
    });
  });

  return paths;
}
