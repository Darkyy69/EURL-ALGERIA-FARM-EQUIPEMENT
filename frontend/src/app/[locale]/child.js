"use client";

import { useState, useEffect } from "react";
import { useI18n, useCurrentLocale, useChangeLocale } from "@/locales/client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp } from "lucide-react";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const t = useI18n();
  const router = useRouter();
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  const [scrollY, setScrollY] = useState(0);

  const [heroContent, setHeroContent] = useState({});
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [productCategories, setProductCategories] = useState([]);
  const [companyInfo, setCompanyInfo] = useState([]);
  const [completedProjects, setCompletedProjects] = useState([]);

  const languages = [
    { value: "fr", label: "Français" },
    { value: "en", label: "English" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchGeneralContent = async () => {
      try {
        const response = await axios.get(
          "https://abovines.com/api/general-content.php"
        );
        console.log(response.data);
        response.data.forEach((item) => {
          const content = JSON.parse(item.content);
          if (item.section_name === "hero") {
            setHeroContent(content);
          } else if (item.section_name === "company") {
            setCompanyInfo(content);
          } else if (item.section_name === "featured_products") {
            setFeaturedProducts(content);
          } else if (item.section_name === "completed_projects") {
            setCompletedProjects(content);
          }
        });
      } catch (error) {
        console.error(error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://abovines.com/api/categories.php"
        );
        console.log(response.data);
        setProductCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGeneralContent();
    fetchCategories();
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="w-full bg-white">
      <div className="absolute inset-0 z-10 h-[176px] w-full opacity-85 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-[rgba(0,0,0,0.75)] before:via-[rgba(0,0,0,0.5)_76%] before:to-transparent"></div>

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <img
          className="absolute object-cover object-center w-full h-full"
          src={heroContent.image}
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
                {/* {t("hero.titleHighlight")} */}
                {heroContent?.title?.split(" ")[0]}
              </span>{" "}
              {/* {t("hero.titleRest")} */}
              {heroContent?.title?.split(" ").slice(1).join(" ")}
            </motion.h1>
            <motion.p
              className="text-base md:text-xl text-gray-200 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* {t("hero.description")} */}
              {heroContent.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                onClick={() =>
                  document
                    .getElementById("company")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="bg-green-500 text-white hover:bg-green-600 transition-colors duration-300 text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl"
              >
                {/* {t("hero.learnMore")} */}
                {heroContent.button_text}
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
                <p className="text-gray-600 h-20">{product.description}</p>
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
                {productCategories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => router.push(`products/${category.slug}`)}
                    className="flex items-center gap-4 text-white hover:bg-green-600/50 w-full p-2 rounded transition-colors"
                  >
                    <div className="bg-white/20 p-2 rounded-full w-6 h-6">
                      <img src={category.icon} alt="icon" />
                    </div>
                    <span>{category.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Cards */}
      <section className="py-20 bg-gray-50" id="company">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyInfo?.map((item, index) => {
              const bgColorClasses = [
                "bg-[#40E0D0]/20",
                "bg-gray-200",
                "bg-green-100",
              ];
              const bgColorClass =
                bgColorClasses[index % bgColorClasses.length];

              // Apply a specific text size for the <p> tag for the first item
              const descriptionFontSize = index === 0 ? "text-sm" : "text-base";

              return (
                <Card key={index} className={bgColorClass}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                    <p className={`${descriptionFontSize} text-gray-600`}>
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
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
            className="fixed bottom-8 right-8 bg-green-600 text-white p-3 rounded-full z-50"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
