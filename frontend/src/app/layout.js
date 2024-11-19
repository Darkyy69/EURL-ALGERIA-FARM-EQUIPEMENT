import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Algeria Farm Equipment",
  description: "Équipement agricole de qualité pour l'Algérie",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
