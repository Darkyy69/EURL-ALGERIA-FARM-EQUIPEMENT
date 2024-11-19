"use client";

import { I18nProviderClient } from "@/locales/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SubLayout({ children, params }) {
  const { locale } = params;
  return (
    <I18nProviderClient locale={locale} fallback={<p>Loading...</p>}>
      <div className="absolute top-0 w-full h-36 z-20">
        {/* Header */}
        <Navbar />
      </div>
      <main>{children}</main>
      <Footer />
    </I18nProviderClient>
  );
}
