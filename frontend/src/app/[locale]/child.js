"use client";

import { useState, useEffect } from "react";
import { useI18n, useCurrentLocale, useChangeLocale } from "@/locales/client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
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

const completedProjects = [
  {
    id: 1,
    title: "Ferme Laitière Moderne",
    description:
      "Installation d'un système de traite automatisé pour 500 vaches",
    image: "/images/placeholder.svg",
    location: "Sétif, Algérie",
    year: 2022,
  },
  {
    id: 2,
    title: "Coopérative Agricole El Baraka",
    description:
      "Mise en place d'un système de refroidissement du lait de grande capacité",
    image: "/images/placeholder.svg",
    location: "Blida, Algérie",
    year: 2021,
  },
  {
    id: 3,
    title: "Ferme Caprine des Aurès",
    description:
      "Installation d'un système de traite pour chèvres et de transformation fromagère",
    image: "/images/placeholder.svg",
    location: "Batna, Algérie",
    year: 2023,
  },
  {
    id: 4,
    title: "Centre de Collecte Laitier",
    description: "Équipement complet d'un centre de collecte de lait régional",
    image: "/images/placeholder.svg",
    location: "Oran, Algérie",
    year: 2022,
  },
  {
    id: 5,
    title: "Ferme Ovine de l'Atlas",
    description: "Modernisation des installations de traite pour brebis",
    image: "/images/placeholder.svg",
    location: "Médéa, Algérie",
    year: 2021,
  },
  {
    id: 6,
    title: "Complexe Agroalimentaire du Sud",
    description:
      "Installation d'un système intégré de traite et de transformation laitière",
    image: "/images/placeholder.svg",
    location: "Ghardaïa, Algérie",
    year: 2023,
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
    <div className="w-full bg-white">
      <div className="absolute inset-0 z-10 h-[176px] w-full opacity-85 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-[rgba(0,0,0,0.75)] before:via-[rgba(0,0,0,0.5)_76%] before:to-transparent"></div>

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <img
          className="absolute object-cover object-center w-full h-full"
          src="/images/hero/hero.webp"
          alt="Hero background"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute w-full h-full flex items-center">
          <motion.div
            className="max-w-3xl container ml-12"
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
              className="text-base md:text-xl text-gray-200 mb-8 max-w-2xl"
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

      {/* Projets Réalisés Section */}
      <section className="py-20 bg-gray-50" id="projets">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Projets Réalisés
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project) => (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <div className="cursor-pointer group">
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white text-lg font-semibold">
                          {project.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>
                    <DialogDescription>
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <p className="mb-2">{project.description}</p>
                      <p className="text-sm text-gray-500">
                        <span className="font-semibold">Lieu:</span>{" "}
                        {project.location}
                      </p>
                      <p className="text-sm text-gray-500">
                        <span className="font-semibold">Année:</span>{" "}
                        {project.year}
                      </p>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

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
