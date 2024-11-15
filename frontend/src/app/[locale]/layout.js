"use client";

import { I18nProviderClient } from "@/locales/client";
import "@/app/globals.css";

export default function SubLayout({ children, params }) {
  const { locale } = params;
  return (
    <I18nProviderClient locale={locale} fallback={<p>Loading...</p>}>
      {children}
    </I18nProviderClient>
  );
}
