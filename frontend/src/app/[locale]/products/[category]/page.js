import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductsByCategory, getAllCategories } from "@/lib/products";

export default function CategoryPage({ params }) {
  const products = getProductsByCategory(params.category);

  if (products.length === 0) {
    notFound();
  }
  console.log("eeee");
  console.log("products", products.name);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {params.category.replace("-", " ")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.name}
            href={`${params.category}/${product.link}`}
            className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={product.images[0]}
                alt={product.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 line-clamp-3">
                {product.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    category: category,
  }));
}
