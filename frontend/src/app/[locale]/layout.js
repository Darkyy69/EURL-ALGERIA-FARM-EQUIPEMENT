"use client";

import { I18nProviderClient } from "@/locales/client";
import { LandingNavBar, Navbar2 } from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SubLayout({ children, params }) {
  const { locale } = params;
  const isRootRoute = window.location.pathname === `/${locale}`;

  return (
    <I18nProviderClient locale={locale} fallback={<p>Loading...</p>}>
      {isRootRoute ? (
        <div className="absolute top-0 w-full h-36 z-20">
          {/* Header */}
          <LandingNavBar />
        </div>
      ) : (
        <Navbar2 />
      )}
      <main
        className={
          isRootRoute
            ? ""
            : "container mx-auto px-4 my-8 h-full flex items-center relative"
        }
      >
        {children}
      </main>
      <Footer />
    </I18nProviderClient>
  );
}
