"use client";

import React, { useEffect, useState } from "react";
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
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
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
import { useDataContext } from "./DataProvider";

// Import the fonts
import { Montserrat, Roboto, Poppins } from "next/font/google";

// const products = [
//   {
//     name: "Animaux vivant",
//     slug: "animaux-vivant",
//     icon: <Cow className="h-5 w-5" />,
//     subcategories: [
//       {
//         name: "Vaches laitières",
//         slug: "vaches-laitieres",
//         items: [{ name: "Montbéliarde", slug: "montbeliarde" }],
//       },
//       {
//         name: "Veau d'engraissement",
//         slug: "veau-engraissement",
//         items: [],
//       },
//     ],
//   },
//   {
//     name: "Refroidissement et transport du lait",
//     slug: "refroidissement-transport-lait",
//     icon: <Container className="h-5 w-5" />,
//     subcategories: [
//       {
//         name: "Tanks à lait de type ouvert",
//         slug: "tanks-lait-ouvert",
//         items: [{ name: "MP Vertitank", slug: "mp-vertitank" }],
//       },
//       {
//         name: "Tanks à lait de type fermé",
//         slug: "tanks-lait-ferme",
//         items: [{ name: "MP Powertank", slug: "mp-powertank" }],
//       },
//     ],
//   },
//   {
//     name: "Système de traite",
//     slug: "systeme-traite",
//     icon: <Settings className="h-5 w-5" />,
//     subcategories: [
//       {
//         name: "Machines à traire",
//         slug: "machines-a-traire",
//         items: [],
//       },
//       {
//         name: "Salle de traite",
//         slug: "salle-traite",
//         items: [
//           {
//             name: "Sortie rapide pour vaches",
//             slug: "salle-de-traite-sortie-rapide-pour-vaches",
//           },
//           {
//             name: "Salle de traite en épi pour vaches",
//             slug: "salle-de-traite-en-epi-pour-vaches",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Equipement d'élevage",
//     slug: "equipement-elevage",
//     icon: <Building className="h-5 w-5" />,
//     subcategories: [
//       {
//         name: "Cornadis",
//         slug: "cornadis",
//         items: [],
//       },
//       {
//         name: "Logettes",
//         slug: "logettes",
//         items: [
//           { name: "Logettes Simples", slug: "logettes-simples" },
//           { name: "Logettes Double", slug: "logettes-double" },
//         ],
//       },
//       {
//         name: "Racleurs",
//         slug: "racleurs",
//         items: [
//           { name: "Racleur en V", slug: "racleur-en-v" },
//           { name: "Racleur à glissières", slug: "racleur-a-glissieres" },
//         ],
//       },
//       {
//         name: "Brosse à vaches",
//         slug: "brosse-a-vaches",
//         items: [],
//       },
//     ],
//   },
// ];

// Initialize the fonts
const montserrat = Montserrat({ subsets: ["latin"] });
const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });

export function LandingNavBar() {
  const { headerContent, formattedProducts } = useDataContext();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className={`w-full ${roboto.className}`}>
      <div className={montserrat.className}>
        {/* Top Bar */}
        <div className="hidden border-b bg-white/90 py-2 lg:block">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 hover:text-primary">
                <Phone className="h-4 w-4" />
                <a className="tracking-widest " href={`tel:${headerContent.landline}`}>{headerContent.landline}</a>
              </div>
              <a
                href="mailto:contact@abovines.com"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                <span>{headerContent.email}</span>
              </a>
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
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="bg-transparent text-white">
          <div className="container mx-auto flex h-20 items-center justify-between">
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
                    className="text-sm font-medium hover:text-primary transition-colors relative group"
                  >
                    ACCUEIL
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors relative group">
                      PRODUITS
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-screen p-6">
                      <div
                        className={`grid grid-cols-4 gap-6 ${poppins.className}`}
                      >
                        {formattedProducts?.map((category, index) => (
                          <div key={category.slug} className="space-y-3">
                            <a
                              href={`/products/${category.slug}`}
                              className="flex items-center gap-2 text-primary hover:underline"
                            >
                              <h3 className="font-semibold text-sm">
                                {category.name}
                              </h3>
                            </a>
                            <ul className="space-y-2">
                              {category.subcategories.map((subcategory) => (
                                <li key={subcategory.slug}>
                                  {subcategory.items.length > 0 ? (
                                    // <DropdownMenu>
                                    // {/* <DropdownMenuTrigger className="flex w-full items-center justify-between text-sm hover:text-primary transition-colors"> */}
                                    <DropdownMenuSub>
                                      <DropdownMenuSubTrigger>
                                        {/* <a
                                          href={`/products/${category.slug}/${subcategory.slug}`}
                                        > */}
                                        {subcategory.name}
                                        {/* </a> */}
                                      </DropdownMenuSubTrigger>
                                      <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                          {subcategory.items.map(
                                            (item, index) => (
                                              <React.Fragment key={item.slug}>
                                                <DropdownMenuItem asChild>
                                                  <a
                                                    className="hover:text-primary transition-colors"
                                                    href={`/products/${category.slug}/${item.slug}`}
                                                  >
                                                    {item.name}
                                                  </a>
                                                </DropdownMenuItem>
                                                {index <
                                                  subcategory.items.length -
                                                    1 && (
                                                  <DropdownMenuSeparator />
                                                )}
                                              </React.Fragment>
                                            )
                                          )}
                                        </DropdownMenuSubContent>
                                      </DropdownMenuPortal>
                                    </DropdownMenuSub>
                                  ) : (
                                    // {/* <ChevronRight className="h-4 w-4" /> */}
                                    // {/* </DropdownMenuTrigger> */}
                                    // <DropdownMenuContent className="w-[200px]">

                                    // </DropdownMenuContent>
                                    <a
                                      href={`/products/${category.slug}/${subcategory.slug}`}
                                      className="text-sm hover:text-primary transition-colors"
                                    >
                                      {subcategory.name}
                                    </a>
                                  )}
                                </li>
                              ))}
                            </ul>
                            {index < formattedProducts?.length - 1 && (
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
                  <a
                    href="#projets"
                    className="text-sm font-medium hover:text-primary transition-colors relative group"
                  >
                    PROJETS RÉALISÉS
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>

                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-sm font-medium hover:text-primary transition-colors relative group"
                  >
                    CONTACT
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>

                  </a>
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
                      src="/logo-nobg-removebg-preview.png"
                      alt="Algeria Farm Equipment Logo"
                      className="h-10 w-4/5 object-cover"
                    />
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-8">
                  <ul className="space-y-4">
                    <li>
                      <a
                        href=""
                        className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                      >
                        <Home className="h-5 w-5" />
                        ACCUEIL
                      </a>
                    </li>
                    <li>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="products">
                          <AccordionTrigger className="text-sm font-medium hover:text-primary transition-colors">
                            <div className="flex items-center gap-2">
                              <Settings className="h-5 w-5" />
                              PRODUITS
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 pl-7">
                              {formattedProducts?.map((category) => (
                                <li key={category.name}>
                                  <Accordion type="single" collapsible>
                                    <AccordionItem value={category.name}>
                                      <AccordionTrigger className="text-sm hover:text-primary transition-colors">
                                        <Link
                                          href={`/products/${category.slug}`}
                                        >
                                          <span className="flex items-center gap-2">
                                            {category.name}
                                          </span>
                                        </Link>
                                      </AccordionTrigger>
                                      <AccordionContent>
                                        <ul className="space-y-2 mt-2 pl-5">
                                          {category.subcategories.map(
                                            (subcategory) => (
                                              <li key={subcategory.name}>
                                                {subcategory.items.length >
                                                0 ? (
                                                  <Accordion
                                                    type="single"
                                                    collapsible
                                                  >
                                                    <AccordionItem
                                                      value={subcategory.name}
                                                    >
                                                      <AccordionTrigger className="text-sm hover:text-primary transition-colors">
                                                        <Link
                                                          href={`/products/${category.slug}/`}
                                                        >
                                                          {subcategory.name}
                                                        </Link>
                                                      </AccordionTrigger>
                                                      <AccordionContent>
                                                        <ul className="space-y-2 pl-5">
                                                          {subcategory.items.map(
                                                            (item) => (
                                                              <li
                                                                key={item.slug}
                                                                className="text-sm hover:text-primary transition-colors"
                                                              >
                                                                <a
                                                                  href={`/products/${category.slug}/${item.slug}`}
                                                                >
                                                                  {item.name}
                                                                </a>
                                                              </li>
                                                            )
                                                          )}
                                                        </ul>
                                                      </AccordionContent>
                                                    </AccordionItem>
                                                  </Accordion>
                                                ) : (
                                                  <a
                                                    href={`/products/${category.slug}/${subcategory.slug}`}
                                                    className="text-sm hover:text-primary transition-colors"
                                                  >
                                                    {subcategory.name}
                                                  </a>
                                                )}
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      </AccordionContent>
                                    </AccordionItem>
                                  </Accordion>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </li>
                    <li>
                      <a
                        href="#projets"
                        className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                      >
                        <FolderOpen className="h-5 w-5" />
                        PROJETS RÉALISÉS
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact"
                        className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                      >
                        <Contact className="h-5 w-5" />
                        CONTACT
                      </a>
                    </li>
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Navbar2() {
  const { headerContent, formattedProducts } = useDataContext();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className={`w-full ${roboto.className} relative overflow-hidden`}>
      <div className="absolute right-0 w-[500px] h-[200px] rotate-45 bg-primary"></div>
      <div className="absolute left-32 w-[500px] h-[200px] -rotate-45 bg-primary"></div>
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-br from-green-200 to-green-300 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-gradient-to-tl from-blue-200 to-blue-300 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute -bottom-16 left-1/4 w-32 h-32 bg-gradient-to-tr from-yellow-200 to-yellow-300 rounded-full opacity-20 blur-xl"></div>
      </div>

      <div className={`relative ${montserrat.className}`}>
        {/* Top Bar */}
        <div className="hidden border-b bg-white/90 backdrop-blur-sm py-2 lg:block">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{headerContent.landline}</span>
              </div>
              <a
                href="mailto:contact@abovines.com"
                className="flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                <span>{headerContent.email}</span>
              </a>
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
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="bg-white/80 backdrop-blur-sm border-b">
          <div className="container mx-auto flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 relative">
              {/* <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-30 blur-lg"></div> */}
              <img
                src="/logo-nobg-removebg-preview.png"
                alt="Algeria Farm Equipment Logo"
                width={150}
                height={40}
                className="ml-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] relative"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-8">
                <li>
                  <Link
                    href="/"
                    className="text-sm font-medium hover:text-primary transition-colors relative group"
                  >
                    ACCUEIL
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors relative group">
                      PRODUITS
                      <ChevronDown className="h-4 w-4" />
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[90vw] p-6">
                      <div
                        className={`grid grid-cols-4 gap-6 ${poppins.className}`}
                      >
                        {formattedProducts?.map((category, index) => (
                          <div key={category.slug} className="space-y-3">
                            <Link
                              href={`/products/${category.slug}`}
                              className="flex items-center gap-2 text-primary hover:underline"
                            >
                              <h3 className="font-semibold text-sm">
                                {category.name}
                              </h3>
                            </Link>
                            <ul className="space-y-2">
                              {category.subcategories.map((subcategory) => (
                                <li key={subcategory.slug}>
                                  {subcategory.items.length > 0 ? (
                                    <DropdownMenuSub>
                                      <DropdownMenuSubTrigger>
                                        {subcategory.name}
                                      </DropdownMenuSubTrigger>
                                      <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                          {subcategory.items.map(
                                            (item, index) => (
                                              <React.Fragment key={item.slug}>
                                                <DropdownMenuItem
                                                  asChild
                                                  className="hover:text-primary transition-colors"
                                                >
                                                  <Link
                                                    className="hover:text-primary"
                                                    href={`/products/${category.slug}/${item.slug}`}
                                                  >
                                                    {item.name}
                                                  </Link>
                                                </DropdownMenuItem>
                                                {index <
                                                  subcategory.items.length -
                                                    1 && (
                                                  <DropdownMenuSeparator />
                                                )}
                                              </React.Fragment>
                                            )
                                          )}
                                        </DropdownMenuSubContent>
                                      </DropdownMenuPortal>
                                    </DropdownMenuSub>
                                  ) : (
                                    <a
                                      href={`/products/${category.slug}/${subcategory.slug}`}
                                      className="text-sm hover:text-primary transition-colors"
                                    >
                                      {subcategory.name}
                                    </a>
                                  )}
                                </li>
                              ))}
                            </ul>
                            {index < formattedProducts?.length - 1 && (
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
                    href={`/#projets`}
                    className="text-sm font-medium hover:text-primary transition-colors relative group"
                  >
                    PROJETS RÉALISÉS
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`#contact`}
                    className="text-sm font-medium hover:text-primary transition-colors relative group"
                  >
                    CONTACT
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-30 blur-lg rounded-full"></div>
                  <Menu className="h-6 w-6 relative" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[300px] sm:w-[400px] overflow-y-auto"
              >
                <SheetHeader>
                  <SheetTitle>
                    <img
                      src="/logo-nobg-removebg-preview.png"
                      alt="Algeria Farm Equipment Logo"
                      className="h-10 w-4/5 object-cover"
                    />
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-8">
                  <ul className="space-y-4">
                    <li>
                      <Link
                        href=""
                        className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                      >
                        <Home className="h-5 w-5" />
                        ACCUEIL
                      </Link>
                    </li>
                    <li>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="products">
                          <AccordionTrigger className="text-sm font-medium hover:text-primary transition-colors">
                            <div className="flex items-center gap-2">
                              <Settings className="h-5 w-5" />
                              PRODUITS
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 pl-7">
                              {formattedProducts?.map((category) => (
                                <li key={category.slug}>
                                  <Accordion type="single" collapsible>
                                    <AccordionItem value={category.name}>
                                      <AccordionTrigger className="text-sm hover:text-primary transition-colors">
                                        <Link
                                          href={`/products/${category.slug}`}
                                        >
                                          <span className="flex items-center gap-2">
                                            {category.name}
                                          </span>
                                        </Link>
                                      </AccordionTrigger>
                                      <AccordionContent>
                                        <ul className="space-y-2 mt-2 pl-5">
                                          {category.subcategories.map(
                                            (subcategory) => (
                                              <li key={subcategory.slug}>
                                                {subcategory.items.length >
                                                0 ? (
                                                  <Accordion
                                                    type="single"
                                                    collapsible
                                                  >
                                                    <AccordionItem
                                                      value={subcategory.name}
                                                    >
                                                      <AccordionTrigger className="text-sm hover:text-primary transition-colors">
                                                        <Link
                                                          href={`/products/${category.slug}/${subcategory.slug}`}
                                                        >
                                                          {subcategory.name}
                                                        </Link>
                                                      </AccordionTrigger>
                                                      <AccordionContent>
                                                        <ul className="space-y-2 pl-5">
                                                          {subcategory.items.map(
                                                            (item) => (
                                                              <li
                                                                key={item.slug}
                                                                className="text-sm hover:text-primary transition-colors"
                                                              >
                                                                <Link
                                                                  href={`/products/${category.slug}/${item.slug}`}
                                                                >
                                                                  {item.name}
                                                                </Link>
                                                              </li>
                                                            )
                                                          )}
                                                        </ul>
                                                      </AccordionContent>
                                                    </AccordionItem>
                                                  </Accordion>
                                                ) : (
                                                  <Link
                                                    href={`/products/${category.slug}/${subcategory.slug}`}
                                                    className="text-sm hover:text-primary transition-colors"
                                                  >
                                                    {subcategory.name}
                                                  </Link>
                                                )}
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      </AccordionContent>
                                    </AccordionItem>
                                  </Accordion>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </li>
                    <li>
                      <Link
                        href={`/#projets`}
                        className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                      >
                        <FolderOpen className="h-5 w-5" />
                        PROJETS RÉALISÉS
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`#contact`}
                        className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
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
    </div>
  );
}
