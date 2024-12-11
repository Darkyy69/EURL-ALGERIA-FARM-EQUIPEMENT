"use client";

import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const DataContext = createContext({});

export default function DataProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [headerContent, setHeaderContent] = useState([]);
  const [heroContent, setHeroContent] = useState({});
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [productCategories, setProductCategories] = useState([]); // State for product categories
  const [productSubcategories, setProductSubcategories] = useState([]); // State for product subcategories
  const [products, setProducts] = useState([]); // State for formatted products
  const [formattedProducts, setFormattedProducts] = useState([]); // State for formatted products
  const [companyInfo, setCompanyInfo] = useState([]);
  const [completedProjects, setCompletedProjects] = useState([]);
  const [footerContent, setFooterContent] = useState([]);
  const [productsData, setProductsData] = useState({});

  useEffect(() => {
    const fetchGeneralContent = async () => {
      try {
        const response = await axios.get(
          "https://abovines.com/api/general-content.php"
        );
        response.data.forEach((item) => {
          const content = JSON.parse(item.content);
          if (item.section_name === "header") {
            setHeaderContent(content);
          } else if (item.section_name === "footer") {
            setFooterContent(content);
          } else if (item.section_name === "hero") {
            setHeroContent(content);
          } else if (item.section_name === "company") {
            setCompanyInfo(content);
          } else if (item.section_name === "featured_products") {
            setFeaturedProducts(content);
          } else if (item.section_name === "completed_projects") {
            setCompletedProjects(content);
          }
        });
      } catch (error) {
        console.error(error);
      }
    };

    const fetchAndFormatProducts = async () => {
      try {
        // Fetch categories, subcategories, and products
        const [categoriesResponse, subcategoriesResponse, productsResponse] =
          await Promise.all([
            axios.get("https://abovines.com/api/categories.php"),
            axios.get("https://abovines.com/api/subcategories.php"),
            axios.get("https://abovines.com/api/products.php"),
          ]);

        const categories = categoriesResponse.data;
        setProductCategories(categories); // Set product categories state

        const subcategories = subcategoriesResponse.data.map((subcategory) => ({
          ...subcategory,
          images: subcategory.images ? JSON.parse(subcategory.images) : [], // Parse JSON string if present
        }));
        setProductSubcategories(subcategories); // Set product subcategories state

        const rawProducts = productsResponse.data.map((product) => ({
          ...product,
          images: product.images ? JSON.parse(product.images) : [], // Parse JSON string if present
        }));
        setProducts(rawProducts); // Set raw products state

        setProductsData(
          organizeProducts(categories, subcategories, rawProducts)
        );

        // Format data
        const fProducts = categories.map((category) => ({
          name: category.title,
          slug: category.slug,
          icon: category.icon,
          subcategories: subcategories
            .filter((subcategory) => subcategory.category_id === category.id)
            .map((subcategory) => ({
              name: subcategory.title,
              slug: subcategory.slug,
              items: rawProducts
                .filter((product) => product.subcategory_id === subcategory.id)
                .map((product) => ({
                  name: product.name,
                  slug: product.slug,
                })),
            })),
        }));

        setFormattedProducts(fProducts);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchAllData = async () => {
      await Promise.all([fetchGeneralContent(), fetchAndFormatProducts()]);
      setIsLoading(false);
    };

    fetchAllData();
  }, []);

  function organizeProducts(categories, subcategories, products) {
    const productsData = {};

    categories.forEach((category) => {
      productsData[category.slug] = {};
      const relatedSubcategories = subcategories.filter(
        (subcategory) =>
          subcategory.category_id === category.id
      );

      relatedSubcategories.forEach((subcategory) => {
        const relatedProducts = products.filter(
          (product) => product.subcategory_id === subcategory.id
        );

        relatedProducts.forEach((product) => {
          productsData[category.slug][product.slug] = {
            ...product,
            subcategory: subcategory.title,
          };
        });
      });
    });
    return productsData;
  }

  // Function to get product data
  function getProductData(category, product) {
    return productsData[category]?.[product];
  }

  // Function to get all categories
  function getAllCategories(categories) {
    return categories.map((category) => category.slug);
  }

  // Function to get products by category
  function getProductsByCategory(category) {
    return Object.values(productsData[category] || {});
  }

  // Function to get a specific category
  function getCategory(categories, slug) {
    return categories.find((category) => category.slug === slug);
  }

  // Function to get a specific product
  function getProduct(products, categorySlug, productSlug) {
    return products.find(
      (product) =>
        product.category === categorySlug && product.slug === productSlug
    );
  }

  return (
    <DataContext.Provider
      value={{
        isLoading,
        headerContent,
        heroContent,
        featuredProducts,
        productCategories, // Provide product categories state
        productSubcategories, // Provide product subcategories state
        formattedProducts, // Provide formatted products state
        products, // Provide formatted products state
        companyInfo,
        completedProjects,
        footerContent,
        getProductData,
        getAllCategories,
        getProductsByCategory,
        getCategory,
        getProduct,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within an AppProvider");
  }
  return context;
};
