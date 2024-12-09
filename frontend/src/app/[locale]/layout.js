"use client";

import { usePathname } from "next/navigation";
import { I18nProviderClient } from "@/locales/client";
import { LandingNavBar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import DataProvider from "@/components/DataProvider";

export default function SubLayout({ children, params }) {
  const { locale } = params;
  const pathname = usePathname();

  // Conditionally exclude the navbar based on the route
  const showNavbar = !pathname.includes("/products/");

  return (
    <I18nProviderClient
      locale={locale}
      fallback={
        <div className="flex items-center justify-center h-screen">
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      }
    >
      <DataProvider>
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
      </DataProvider>
    </I18nProviderClient>
  );
}
