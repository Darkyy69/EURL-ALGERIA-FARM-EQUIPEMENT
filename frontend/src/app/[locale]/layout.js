"use client";

import { usePathname } from "next/navigation";
import { I18nProviderClient } from "@/locales/client";
import { LandingNavBar } from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SubLayout({ children, params }) {
  const { locale } = params;
  const pathname = usePathname();

  // Conditionally exclude the navbar based on the route
  const showNavbar = !pathname.includes("/products/");

  return (
    <I18nProviderClient locale={locale} fallback={<p>Loading...</p>}>
      {showNavbar ? (
        <>
          <div className="absolute top-0 w-full h-36 z-20">
            <LandingNavBar />
          </div>
          <main>{children}</main>
        </>
      ) : (
        <div>{children}</div>
      )}
      <Footer />
    </I18nProviderClient>
  );
}
