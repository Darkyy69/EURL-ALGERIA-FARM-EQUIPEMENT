"use client";

import { useState } from "react";
import { useI18n, useScopedI18n } from "@/locales/client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Package,
  Wrench,
  Wheat,
  Phone,
  MapPin,
  Mail,
  ChevronLeft,
  ChevronRight,
  Search,
  Filter,
} from "lucide-react";
import LanguageSelector from "@/components/select-lang";

export function Pagee() {
  const t = useI18n();
  const scopedT = useScopedI18n("hello");
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0);

  const partners = [
    { name: "Laiterie Waniss", logo: "/LAITERIE-WANISS.jpg" },
    { name: "Danone Algerie", logo: "/danone_algerie.jpg" },
    { name: "Tifralait", logo: "/TIFRALAIT.jpg" },
    { name: "Soummam", logo: "/logo-soummam2.png" },
    { name: "LFB", logo: "/LFBOUDOUAOU.jpg" },
    { name: "Safilait", logo: "/safilait.jpg" },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const nextPartner = () => {
    setCurrentPartnerIndex((prev) => (prev + 1) % partners.length);
  };

  const prevPartner = () => {
    setCurrentPartnerIndex(
      (prev) => (prev - 1 + partners.length) % partners.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.webp"
              alt="Algeria Farm Equipment Logo"
              width={180}
              height={50}
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              {t("nav.about")}
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              {t("nav.services")}
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              {t("nav.contact")}
            </a>
            <LanguageSelector />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        className="relative pt-32 pb-20 md:pt-40 md:pb-20 bg-[url('/bg.jpg')] bg-cover bg-[center_top_-40px] bg-no-repeat"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              variants={fadeIn}
            >
              ALGERIA FARM EQUIPMENT
            </motion.h1>
            <motion.p className="text-xl text-[#666666] mb-8" variants={fadeIn}>
              {t("hero.description")}
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              variants={fadeIn}
            >
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                {t("hero.contact")}
              </Button>
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                {t("hero.learn")}
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section
        id="services"
        className="h-dvh py-20 flex flex-col justify-center items-center bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            variants={fadeIn}
          >
            {t("services.title")}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  {/* <Cow className="w-12 h-12 text-green-600 mb-4" /> */}
                  <Package className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {t("services.livestock.title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("services.livestock.description")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <Wrench className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {t("services.equipment.title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("services.equipment.description")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <Wheat className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {t("services.feed.title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("services.feed.description")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section (Qui sommes nous) */}
      <section
        id="about"
        className="h-dvh py-20 flex flex-col justify-center items-center bg-green-50"
      >
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto" variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              {t("about.title")}
            </h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Image
                      src="/qui-sommes-nous.jpg"
                      alt="About Us"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-600">{t("about.description")}</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-green-600 rounded-full" />
                        <span>RC : 99B6799</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-green-600 rounded-full" />
                        <span>NIF: 099916000679940</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        className="py-20 flex flex-col justify-center items-center"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            variants={fadeIn}
          >
            {t("products.title")}
          </motion.h2>

          <div className="mb-8">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant={activeCategory === "all" ? "default" : "outline"}
                onClick={() => setActiveCategory("all")}
                className="bg-green-600"
              >
                {t("products.categories.all")}
              </Button>
              <Button
                variant={activeCategory === "equipment" ? "default" : "outline"}
                onClick={() => setActiveCategory("equipment")}
              >
                {t("products.categories.equipment")}
              </Button>
              <Button
                variant={activeCategory === "feed" ? "default" : "outline"}
                onClick={() => setActiveCategory("feed")}
              >
                {t("products.categories.feed")}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example Product Cards */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="overflow-hidden">
                  <Image
                    src="/images/placeholder.svg"
                    alt="Product"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">
                      {t("products.example.title")}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {t("products.example.description")}
                    </p>
                    <Button className="mt-4 w-full bg-green-600">
                      {t("products.viewDetails")}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* After Sales Service Section */}
      <section className="h-dvh py-20 flex flex-col justify-center items-center bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto" variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              {t("service.title")}
            </h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Image
                      src="/images/placeholder.svg"
                      alt="Service After Sale"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">
                      {t("service.subtitle")}
                    </h3>
                    <p className="text-gray-600">{t("service.description")}</p>
                    <Button className="bg-green-600">
                      {t("service.contact")}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            variants={fadeIn}
          >
            {t("partners.title")}
          </motion.h2>

          <div className="relative max-w-4xl mx-auto">
            <Button
              variant="outline"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
              onClick={prevPartner}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="overflow-hidden px-12">
              <div className="flex justify-center items-center gap-8">
                {[0, 1, 2].map((offset) => {
                  const index =
                    (currentPartnerIndex + offset) % partners.length;
                  return (
                    <motion.div
                      key={partners[index].name}
                      className="w-1/3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={partners[index].logo}
                        alt={partners[index].name}
                        width={200}
                        height={100}
                        className="w-full h-32 object-contain"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <Button
              variant="outline"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
              onClick={nextPartner}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="h-dvh py-20 flex flex-col justify-center items-center bg-green-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            variants={fadeIn}
          >
            {t("location.title")}
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <Image
                      src="/images/placeholder.svg"
                      alt="Location Map"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">
                      {t("location.address")}
                    </h3>
                    <p className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        Lot 448, Ain Naadja nord Gué de Constantine, ALGER
                      </span>
                    </p>
                    <div className="space-y-2">
                      <p className="font-semibold">
                        {t("location.directions")}
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 bg-green-600 rounded-full" />
                          {t("location.direction1")}
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 bg-green-600 rounded-full" />
                          {t("location.direction2")}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="h-dvh py-20 flex flex-col justify-center items-center bg-green-50"
      >
        <div className="container mx-auto px-4 flex flex-col items-center justify-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            variants={fadeIn}
          >
            {t("contact.title")}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div variants={fadeIn}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <p>Lot 448, Ain Naadja nord Gué de Constantine, ALGER</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <p>TEL: 021 40 53 46 | FAX: 021 40 53 28</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <p>contact@abovines.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder={t("contact.form.name")}
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder={t("contact.form.email")}
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder={t("contact.form.message")}
                        className="w-full p-2 border rounded-md h-32"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      {t("contact.form.submit")}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/logo.webp"
                alt="Algeria Farm Equipment Logo"
                width={160}
                height={45}
                className="mb-4"
              />
              <p className="text-gray-400">RC : 99B6799</p>
              <p className="text-gray-400">NIF: 099916000679940</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {t("footer.links")}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t("nav.about")}
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t("nav.services")}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t("nav.contact")}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {t("footer.contact")}
              </h3>
              <p className="text-gray-400">www.ABOVINES.com</p>
              <p className="text-gray-400">TEL: 021 40 53 46</p>
              <p className="text-gray-400">FAX: 021 40 53 28</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} EURL ALGERIA FARM EQUIPEMENT.{" "}
              {t("footer.rights")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
