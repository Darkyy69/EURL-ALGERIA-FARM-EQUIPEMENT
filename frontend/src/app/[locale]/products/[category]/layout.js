import { Navbar2 } from "@/components/Navbar";

export default function ProductsLayout({ children }) {
  return (
    <>
      <Navbar2 />
      <main className="container mx-auto px-4 my-8 h-full flex items-center relative">
        {children}
      </main>
    </>
  );
}
