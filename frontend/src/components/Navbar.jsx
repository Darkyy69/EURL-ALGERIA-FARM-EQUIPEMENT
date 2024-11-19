"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  Phone,
  Mail,
  Search,
  ChevronDown,
  ChevronRight,
  MilkIcon as Cow,
  Container,
  Settings,
  Building,
  Home,
  FolderOpen,
  Contact,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { useI18n, useCurrentLocale, useChangeLocale } from "@/locales/client";

// Import the fonts
import { Montserrat, Roboto, Poppins } from "next/font/google";

// Initialize the fonts
const montserrat = Montserrat({ subsets: ["latin"] });
const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });

export default function Component() {
  const t = useI18n();
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const languages = [
    { value: "fr", label: "Français", flag: "/images/fr.svg" },
    { value: "en", label: "English", flag: "/images/en.svg" },
  ];

  const products = [
    {
      name: "Animaux vivant",
      icon: <Cow className="h-5 w-5" />,
      subcategories: [
        {
          name: "Vaches laitières",
          items: ["Montbéliarde"],
        },
        {
          name: "Veau d'engraissement",
          items: [],
        },
      ],
    },
    {
      name: "Refroidissement et transport du lait",
      icon: <Container className="h-5 w-5" />,
      subcategories: [
        {
          name: "Tanks à lait de type ouvert",
          items: ["MP Vertitank"],
        },
        {
          name: "Tanks à lait de type fermé",
          items: ["MP Powertank"],
        },
      ],
    },
    {
      name: "Système de traite",
      icon: <Settings className="h-5 w-5" />,
      subcategories: [
        {
          name: "Machines à traire",
          items: [],
        },
        {
          name: "Salle de traite",
          items: [
            "Sortie rapide pour vaches",
            "Salle de traite en épi pour vaches",
          ],
        },
      ],
    },
    {
      name: "Equipement d'élevage",
      icon: <Building className="h-5 w-5" />,
      subcategories: [
        {
          name: "Cornadis",
          items: [],
        },
        {
          name: "Logettes",
          items: ["Logettes Simples", "Logettes Double"],
        },
        {
          name: "Racleurs",
          items: ["Racleur en V", "Racleur à glissières"],
        },
        {
          name: "Brosse à vaches",
          items: [],
        },
      ],
    },
  ];

  return (
    <div className={`w-full ${roboto.className}`}>
      <div className={montserrat.className}>
        {/* Top Bar */}
        <div className="hidden border-b bg-white/90 py-2 lg:block">
          <div className="container flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(+213) 661 82 60 38</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contact@abovines.com</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {isSearchOpen ? (
                <div className="flex items-center gap-2">
                  <Input
                    className="h-8 w-[200px]"
                    placeholder="Rechercher..."
                  />
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    Cancel
                  </Button>
                </div>
              ) : (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className="h-4 w-4" />
                </Button>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <img
                      src={
                        languages.find((lang) => lang.value === currentLocale)
                          .flag
                      }
                      alt="Flag"
                      className="h-4"
                    />
                    <span>
                      {languages.map((lang) =>
                        lang.value === currentLocale ? lang.label : ""
                      )}
                    </span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.value}
                      value={lang.value}
                      onSelect={() => {
                        changeLocale(lang.value);
                      }}
                    >
                      <img src={lang.flag} alt="Flag" className="h-4" />

                      {lang.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="bg-transparent text-white">
          <div className="container flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/logo-nobg-removebg-preview.png"
                alt="Algeria Farm Equipment Logo"
                width={150}
                height={40}
                className="ml-4 drop-shadow-[10px_0px_10px_#fff]"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-8">
                <li>
                  <Link
                    href="/"
                    className="text-sm font-medium hover:text-[#22C55E] transition-colors"
                  >
                    ACCUEIL
                  </Link>
                </li>
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-[#22C55E] transition-colors">
                      PRODUITS
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[800px] p-6">
                      <div
                        className={`grid grid-cols-4 gap-6 ${poppins.className}`}
                      >
                        {products.map((category, index) => (
                          <div key={category.name} className="space-y-3">
                            <div className="flex items-center gap-2 text-[#22C55E]">
                              {category.icon}
                              <h3 className="font-semibold text-sm">
                                {category.name}
                              </h3>
                            </div>
                            <ul className="space-y-2">
                              {category.subcategories.map((subcategory) => (
                                <li key={subcategory.name}>
                                  {subcategory.items.length > 0 ? (
                                    <DropdownMenu>
                                      <DropdownMenuTrigger className="flex w-full items-center justify-between text-sm hover:text-[#22C55E] transition-colors">
                                        {subcategory.name}
                                        <ChevronRight className="h-4 w-4" />
                                      </DropdownMenuTrigger>
                                      <DropdownMenuContent className="w-[200px]">
                                        {subcategory.items.map((item) => (
                                          <DropdownMenuItem
                                            key={item}
                                            className="hover:text-[#22C55E] transition-colors"
                                          >
                                            {item}
                                          </DropdownMenuItem>
                                        ))}
                                      </DropdownMenuContent>
                                    </DropdownMenu>
                                  ) : (
                                    <button className="text-sm hover:text-[#22C55E] transition-colors">
                                      {subcategory.name}
                                    </button>
                                  )}
                                </li>
                              ))}
                            </ul>
                            {index < products.length - 1 && (
                              <Separator
                                orientation="vertical"
                                className="absolute top-0 right-0 h-full"
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                <li>
                  <Link
                    href="/projets-realises"
                    className="text-sm font-medium hover:text-[#22C55E] transition-colors"
                  >
                    PROJETS RÉALISÉS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm font-medium hover:text-[#22C55E] transition-colors"
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[300px] sm:w-[400px] overflow-y-auto"
              >
                <SheetHeader>
                  <SheetTitle>
                    <img
                      src="/images/placeholder.svg?height=40&width=150"
                      alt="Algeria Farm Equipment Logo"
                      className="h-10"
                    />
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-8">
                  <ul className="space-y-4">
                    <li>
                      <Link
                        href="/"
                        className="flex items-center gap-2 text-sm font-medium hover:text-[#22C55E] transition-colors"
                      >
                        <Home className="h-5 w-5" />
                        ACCUEIL
                      </Link>
                    </li>
                    <li>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="products">
                          <AccordionTrigger className="text-sm font-medium hover:text-[#22C55E] transition-colors">
                            <div className="flex items-center gap-2">
                              <Settings className="h-5 w-5" />
                              PRODUITS
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 pl-7">
                              {products.map((category) => (
                                <li key={category.name}>
                                  <button
                                    onClick={() =>
                                      setActiveCategory(
                                        activeCategory === category.name
                                          ? null
                                          : category.name
                                      )
                                    }
                                    className={`flex items-center justify-between w-full text-sm py-2 hover:text-[#22C55E] transition-colors ${
                                      activeCategory === category.name
                                        ? "text-[#22C55E]"
                                        : ""
                                    }`}
                                  >
                                    <span className="flex items-center gap-2">
                                      {category.icon}
                                      {category.name}
                                    </span>
                                    <ChevronRight
                                      className={`h-4 w-4 transition-transform ${
                                        activeCategory === category.name
                                          ? "rotate-90"
                                          : ""
                                      }`}
                                    />
                                  </button>
                                  {activeCategory === category.name && (
                                    <ul className="space-y-2 mt-2 pl-5">
                                      {category.subcategories.map(
                                        (subcategory) => (
                                          <li key={subcategory.name}>
                                            {subcategory.items.length > 0 ? (
                                              <Accordion
                                                type="single"
                                                collapsible
                                              >
                                                <AccordionItem
                                                  value={subcategory.name}
                                                >
                                                  <AccordionTrigger className="text-sm hover:text-[#22C55E] transition-colors">
                                                    {subcategory.name}
                                                  </AccordionTrigger>
                                                  <AccordionContent>
                                                    <ul className="space-y-2 pl-5">
                                                      {subcategory.items.map(
                                                        (item) => (
                                                          <li
                                                            key={item}
                                                            className="text-sm hover:text-[#22C55E] transition-colors"
                                                          >
                                                            {item}
                                                          </li>
                                                        )
                                                      )}
                                                    </ul>
                                                  </AccordionContent>
                                                </AccordionItem>
                                              </Accordion>
                                            ) : (
                                              <button className="text-sm hover:text-[#22C55E] transition-colors">
                                                {subcategory.name}
                                              </button>
                                            )}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </li>
                    <li>
                      <Link
                        href="/projets-realises"
                        className="flex items-center gap-2 text-sm font-medium hover:text-[#22C55E] transition-colors"
                      >
                        <FolderOpen className="h-5 w-5" />
                        PROJETS RÉALISÉS
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="flex items-center gap-2 text-sm font-medium hover:text-[#22C55E] transition-colors"
                      >
                        <Contact className="h-5 w-5" />
                        CONTACT
                      </Link>
                    </li>
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      {/* Rest of the page content goes here, using Roboto font */}
    </div>
  );
}
