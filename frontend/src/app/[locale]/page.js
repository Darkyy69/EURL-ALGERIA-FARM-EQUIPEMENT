import React from "react";
import Child from "@/app/[locale]/child";

export async function generateStaticParams() {
  // Return the locales you want to generate static pages for
  return [
    { locale: "en" },
    { locale: "fr" },
    // add other locales as needed
  ];
}
const pagee = () => {
  return <Child />;
};

export default pagee;
