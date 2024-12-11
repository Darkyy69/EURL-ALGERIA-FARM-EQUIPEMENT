"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowUp } from "lucide-react";
import { useDataContext } from "@/components/DataProvider";
import LoadingScreen from "@/components/Loader";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Page() {
  const router = useRouter();

  const {
    isLoading,
    heroContent,
    featuredProducts,
    productCategories,
    companyInfo,
    completedProjects,
  } = useDataContext();
  const [scrollY, setScrollY] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const featuredProductsRef = useRef(null);
  const productCategoriesRef = useRef(null);
  const companyInfoRef = useRef(null);
  const completedProjectsRef = useRef(null);

  const isFeaturedProductsVisible =
    useIntersectionObserver(featuredProductsRef);
  const isProductCategoriesVisible =
    useIntersectionObserver(productCategoriesRef);
  const isCompanyInfoVisible = useIntersectionObserver(companyInfoRef);
  const isCompletedProjectsVisible =
    useIntersectionObserver(completedProjectsRef);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  } else {
    return (
      <div className="w-full bg-white">
        <div className="absolute inset-0 z-10 h-[176px] w-full opacity-85 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-[rgba(0,0,0,0.75)] before:via-[rgba(0,0,0,0.5)_76%] before:to-transparent"></div>

        {/* Hero Section */}
        <section className="relative h-[600px] overflow-hidden">
          <img
            className="absolute object-cover object-center w-full h-full"
            src={heroContent?.image}
            alt="Hero background"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute w-full h-full flex items-center">
            <motion.div
              className="max-w-3xl container ml-12"
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
              transition={{ duration: 0.8, staggerChildren: 0.2 }}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight"
                variants={fadeInUpVariants}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                  {heroContent?.title?.split(" ")[0]}
                </span>{" "}
                {heroContent?.title?.split(" ").slice(1).join(" ")}
              </motion.h1>
              <motion.p
                className="text-base md:text-xl text-gray-200 mb-8 max-w-2xl"
                variants={fadeInUpVariants}
              >
                {heroContent?.subtitle}
              </motion.p>
              <motion.div variants={fadeInUpVariants}>
                <Button
                  onClick={() =>
                    document
                      .getElementById("company")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-green-500 text-white hover:bg-green-600 transition-colors duration-300 text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl"
                >
                  {heroContent?.button_text}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Products */}
        <motion.section
          ref={featuredProductsRef}
          initial="hidden"
          animate={isFeaturedProductsVisible ? "visible" : "hidden"}
          variants={fadeInUpVariants}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts?.map((product, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUpVariants}
                  className="text-center"
                >
                  <div className="relative w-64 h-64 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="object-fit"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 h-20">{product.description}</p>
                  <Button variant="link" className="text-green-600 mt-4">
                    Lire plus
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Product Categories */}
        <section ref={productCategoriesRef} className="py-20 relative">
          <div className="absolute inset-0 bg-[url('/images/categories/cows.jpg')] bg-cover bg-center bg-fixed"></div>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="hidden"
              animate={isProductCategoriesVisible ? "visible" : "hidden"}
              variants={fadeInUpVariants}
              transition={{ duration: 0.5 }}
              className="grid items-center md:grid-cols-2 md:gap-8"
            >
              <div className="md:col-start-2">
                <Card className="bg-white/10 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 uppercase text-center">
                      Catégories de Produits
                    </h2>
                    <div className="space-y-4">
                      {productCategories.map((category, index) => (
                        <motion.div
                          key={category.slug}
                          variants={fadeInUpVariants}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Button
                            variant="ghost"
                            className="flex items-center justify-start gap-4 text-white hover:text-primary hover:bg-white/20 w-full p-4 rounded-lg transition-all duration-300"
                            onClick={() =>
                              router.push(`products/${category.slug}`)
                            }
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                          >
                            <div className="bg-primary p-2 rounded-full w-4 h-4 flex items-center justify-center group-hover:bg-primary/20"></div>
                            <span className="text-lg">{category.title}</span>
                            {hoveredIndex === index && (
                              <motion.div
                                className="ml-auto text-primary"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                →
                              </motion.div>
                            )}
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Info Cards */}
        <motion.section
          ref={companyInfoRef}
          initial="hidden"
          animate={isCompanyInfoVisible ? "visible" : "hidden"}
          variants={fadeInUpVariants}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="py-20 bg-gradient-to-b from-gray-50 to-white"
          id="company"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Discover Our Company
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {companyInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUpVariants}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <h3 className="text-2xl font-semibold mb-4 text-primary transition-colors duration-300 group-hover:text-primary/80">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 flex-grow">
                        {item.description}
                      </p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <div className="w-full h-1 bg-primary/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary"
                          initial={{ width: "33%" }}
                          animate={{
                            width: hoveredIndex === index ? "100%" : "33%",
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projets Réalisés Section */}
        <motion.section
          ref={completedProjectsRef}
          initial="hidden"
          animate={isCompletedProjectsVisible ? "visible" : "hidden"}
          variants={fadeInUpVariants}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="py-20 bg-gray-50"
          id="projets"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Projets Réalisés
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {completedProjects?.map((project) => (
                <motion.div key={project.id} variants={fadeInUpVariants}>
                  <Dialog>
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
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

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
}
