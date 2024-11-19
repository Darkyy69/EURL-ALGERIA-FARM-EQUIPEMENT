export default function ProductDetails({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={product.image || "/placeholder.jpg"}
            alt={product.name}
          />
        </div>
        <div className="p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {product.name}
          </h1>
          <p className="text-sm text-gray-600 mb-4">{product.category}</p>
          <div className="prose max-w-none">
            {product.description.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
          {product.technicalInfo && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Informations Techniques
              </h2>
              <ul className="list-disc list-inside">
                {Object.entries(product.technicalInfo).map(([key, value]) => (
                  <li key={key} className="text-gray-700">
                    <span className="font-medium">{key}:</span> {value}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
