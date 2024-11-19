import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function ProductList({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link key={product.slug} href={`${product.slug}`} className="group">
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={product.image || "/placeholder.jpg"}
                alt={product.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                {product.name}
              </h3>
              <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                {product.shortDescription}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
