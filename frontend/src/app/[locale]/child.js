"use client";

import { useState, useEffect } from "react";
import { useI18n, useCurrentLocale, useChangeLocale } from "@/locales/client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Snowflake,
  Truck,
  MilkOff,
  Home,
  Droplet,
  Sun,
  Search,
  Globe,
  Phone,
  Mail,
  ArrowUp,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import Icon from "@mdi/react";
import { mdiFacebook, mdiInstagram, mdiLinkedin } from "@mdi/js";

// News data
const newsItems = [
  {
    id: 1,
    title: "1st International Animal Breeding Fair-Uzbekistan",
    description:
      "Milkplan participates in the 1st International Animal Breeding Fair in Uzbekistan",
    image: "/images/placeholder.svg",
  },
  {
    id: 2,
    title: "World Dairy Expo 2023",
    description:
      "Successful participation in the International World Dairy Expo",
    image: "/images/placeholder.svg",
  },
  {
    id: 3,
    title: "New Product Launch",
    description: "Introducing our latest innovation in dairy farming",
    image: "/images/placeholder.svg",
  },
  {
    id: 4,
    title: "Industry Award",
    description: "Recognition for excellence in agricultural equipment",
    image: "/images/placeholder.svg",
  },
  {
    id: 5,
    title: "Technology Summit",
    description: "Showcasing next-generation farming solutions",
    image: "/images/placeholder.svg",
  },
  {
    id: 6,
    title: "Partnership Announcement",
    description: "Expanding our global reach with new partnerships",
    image: "/images/placeholder.svg",
  },
];

export default function Page() {
  const t = useI18n();
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  const [currentNewsPage, setCurrentNewsPage] = useState(0);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(newsItems.length / itemsPerPage);
  const [scrollY, setScrollY] = useState(0);

  const languages = [
    { value: "fr", label: "Français" },
    { value: "en", label: "English" },
  ];

  const getCurrentPageItems = () => {
    const start = currentNewsPage * itemsPerPage;
    return newsItems.slice(start, start + itemsPerPage);
  };

  const nextPage = () => {
    setCurrentNewsPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentNewsPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const productCategoriesSection = [
    {
      icon: <Snowflake className="w-6 h-6" />,
      label: t("products.categories.cooling"),
    },
    {
      icon: <Truck className="w-6 h-6" />,
      label: t("products.categories.transfer"),
    },
    {
      icon: <MilkOff className="w-6 h-6" />,
      label: t("products.categories.milking"),
    },
    {
      icon: <Home className="w-6 h-6" />,
      label: t("products.categories.farming"),
    },
    {
      icon: <Droplet className="w-6 h-6" />,
      label: t("products.categories.treatment"),
    },
    {
      icon: <Sun className="w-6 h-6" />,
      label: t("products.categories.energy"),
    },
  ];

  const featuredProducts = [
    {
      title: t("products.featured.title1"),
      description: t("products.featured.description1"),
      image: "/images/featured_products/slider_milkcab.png",
    },
    {
      title: t("products.featured.title2"),
      description: t("products.featured.description2"),
      image: "/images/featured_products/slider_vertitank.png",
    },
    {
      title: t("products.featured.title3"),
      description: t("products.featured.description3"),
      image: "/images/featured_products/slider_f4a.png",
    },
  ];

  // Product categories data
  const productCategories = {
    "refroidissement-du-lait": {
      icon: <Snowflake className="w-6 h-6" />,
      label: "Refroidissement du lait",
      items: [
        {
          title: "Tanks à lait de type ouvert",
          subcategories: ["MP Veritank", "MP Standard", "MP Control"],
        },
        {
          title: "Tanks à lait de type fermé",
          subcategories: ["MP Powertank", "MP Robotic"],
        },
        {
          title: "Systèmes de lavage",
          subcategories: [],
        },
      ],
    },
    "transport-du-lait": {
      icon: <Truck className="w-6 h-6" />,
      label: "Transport du lait",
      items: [
        {
          title: "Citernes de transport du lait",
          subcategories: ["MP MilkTransfer", "MP CoolMilk Transfer"],
        },
      ],
    },
    "systemes-de-traite": {
      icon: <MilkOff className="w-6 h-6" />,
      label: "Systèmes de traite",
      items: [
        {
          title: "Vaches",
          subcategories: ["MP Armektron", "MP Dynamic"],
        },
        {
          title: "Chèvres et Brebis",
          subcategories: ["S&G Armektron", "Standard"],
        },
      ],
    },
    // Add other categories similarly
  };

  return (
    <div className="min-h-screen bg-white">
      <div class="absolute inset-0 z-10 h-[176px] w-full opacity-85 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-[rgba(0,0,0,0.75)] before:via-[rgba(0,0,0,0.5)_76%] before:to-transparent"></div>
      <div className="absolute top-0 w-full h-36 z-20">
        {/* Top Bar */}
        <div className="bg-gray-100 py-2 px-4 text-sm hidden md:block">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +213 21 40 53 46
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                contact@algeriafarm.com
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Globe className="w-4 h-4" />
              <select
                onChange={(e) => changeLocale(e.target.value)}
                value={currentLocale}
                className="bg-gray-100 border-none text-sm"
              >
                {languages.map((lang) => (
                  <option key={lang.value} value={lang.value}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Header */}
        <header className="bg-transparent">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="drop-shadow-[0px_0px_30px_#fff]">
                <img
                  src="/logo-nobg-removebg-preview.png"
                  alt="Algeria Farm Equipment Logo"
                  width={200}
                  height={60}
                  className="h-20 w-auto"
                />
              </div>
              <nav className="hidden md:flex items-center gap-8 text-white">
                <a href="#" className="hover:text-green-600">
                  {t("nav.home")}
                </a>
                <a href="#" className="hover:text-green-600">
                  {t("nav.company")}
                </a>
                <a href="#" className="hover:text-green-600">
                  {t("nav.products")}
                </a>
                <a href="#" className="hover:text-green-600">
                  {t("nav.portfolio")}
                </a>
                <a href="#" className="hover:text-green-600">
                  {t("nav.library")}
                </a>
                <a href="#" className="hover:text-green-600">
                  {t("nav.contactUs")}
                </a>
              </nav>
            </div>
          </div>
        </header>
      </div>

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <img
          className="absolute object-cover object-center w-full h-full"
          src="/images/hero/hero.webp"
          alt="Hero background"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                {t("hero.titleHighlight")}
              </span>{" "}
              {t("hero.titleRest")}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t("hero.description")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button className="bg-green-500 text-white hover:bg-green-600 transition-colors duration-300 text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl">
                {t("hero.learnMore")}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="text-center">
                <div className="relative w-64 h-64 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="object-fit"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
                <Button variant="link" className="text-green-600 mt-4">
                  {t("products.readMore")}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('/images/categories/cows.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid items-center md:grid-cols-2 md:gap-8">
            <div className="bg-green-500/60 p-8 rounded-lg col-start-2">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-8 uppercase text-center">
                {t("products.categories.title")}
              </h2>
              <div className="space-y-6">
                {productCategoriesSection.map((category, index) => (
                  <button
                    key={index}
                    className="flex items-center gap-4 text-white hover:bg-green-600/50 w-full p-2 rounded transition-colors"
                  >
                    <div className="bg-white/20 p-2 rounded-full">
                      {category.icon}
                    </div>
                    <span>{category.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-[#40E0D0]/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  {t("company.title")}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t("company.description")}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  {t("company.values")}
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Persistence in quality</li>
                  <li>Customer focus</li>
                  <li>Emphasis on flexibility</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-green-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  {t("company.international")}
                </h3>
                <p className="text-gray-600">
                  Our international development strategy strengthens our global
                  market presence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Actualités Section with Pagination */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">ACTUALITÉS</h2>
            <div className="flex items-center gap-4">
              <button
                onClick={prevPage}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentNewsPage(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentNewsPage === index ? "bg-green-600" : "bg-gray-300"
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextPage}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Next page"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {getCurrentPageItems().map((news) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card>
                    <img
                      src={news.image}
                      alt={news.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">{news.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {news.description}
                      </p>
                      <Button variant="link" className="text-green-600">
                        Read more
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b-2 border-blue-500 pb-2">
                LA VOIX DE NOS CLIENTS
              </h3>
              <div className="bg-gray-800 p-4 rounded">
                <p className="italic mb-4">"Testimonial text here..."</p>
                <p className="font-semibold">Steven A. Judge</p>
                <p className="text-sm text-gray-400">
                  President/CEO Bob-White Systems, U.S.A
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 border-b-2 border-blue-500 pb-2">
                INSTALLÉS EN
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Quartier général - Usine</p>
                  <p className="text-sm text-gray-400">Address details...</p>
                </div>
                <div>
                  <p className="font-semibold">Agrinio Centre de services</p>
                  <p className="text-sm text-gray-400">
                    Route nationale Agrinio-Arta, Neapoli, Agrinio 301 00
                  </p>
                  <p className="text-sm text-gray-400">t: (+30) 26410 91236</p>
                </div>
                <div className="flex gap-4 mt-4">
                  <Icon path={mdiFacebook} size={1} />
                  <Icon path={mdiInstagram} size={1} />
                  <Icon path={mdiLinkedin} size={1} />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 border-b-2 border-blue-500 pb-2">
                CONTACTEZ-NOUS
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-full p-2 bg-gray-800 rounded"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 bg-gray-800 rounded"
                />
                <select className="w-full p-2 bg-gray-800 rounded">
                  <option>Département</option>
                  {/* Add options */}
                </select>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full p-2 bg-gray-800 rounded"
                />
                <Button className="w-full bg-blue-500 hover:bg-blue-600">
                  Envoyer
                </Button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-wrap justify-center items-center gap-4">
            <img
              src="/logo-nobg-removebg-preview.png"
              alt="Logo"
              width={150}
              height={40}
              className="mb-4 md:mb-0"
            />
            <p className="text-gray-400 text-center text-balance">
              {t("footer.rights")}
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {scrollY > 200 && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 bg-green-600 text-white p-3 rounded-full"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
