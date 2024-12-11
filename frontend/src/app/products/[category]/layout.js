export default function ProductsLayout({ children }) {
  return (
    <>
      <div className="container mx-auto px-4 my-8 h-full flex items-center relative">
        {children}
      </div>
    </>
  );
}
