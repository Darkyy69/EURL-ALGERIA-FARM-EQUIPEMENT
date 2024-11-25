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

export function LandingNavBar() {
  const t = useI18n()
  const currentLocale = useCurrentLocale()
  const changeLocale = useChangeLocale()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(null)

  const languages = [
    { value: "fr", label: "Français", flag: "/images/fr.svg" },
    { value: "en", label: "English", flag: "/images/en.svg" },
  ]

  const products = [
    {
      name: "Animaux vivant",
      slug: "animaux-vivant",
      icon: <Cow className="h-5 w-5" />,
      subcategories: [
        {
          name: "Vaches laitières",
          slug: "vaches-laitieres",
          items: [{ name: "Montbéliarde", slug: "montbeliarde" }],
        },
        {
          name: "Veau d'engraissement",
          slug: "veau-engraissement",
          items: [],
        },
      ],
    },
    {
      name: "Refroidissement et transport du lait",
      slug: "refroidissement-transport-lait",
      icon: <Container className="h-5 w-5" />,
      subcategories: [
        {
          name: "Tanks à lait de type ouvert",
          slug: "tanks-lait-ouvert",
          items: [{ name: "MP Vertitank", slug: "mp-vertitank" }],
        },
        {
          name: "Tanks à lait de type fermé",
          slug: "tanks-lait-ferme",
          items: [{ name: "MP Powertank", slug: "mp-powertank" }],
        },
      ],
    },
    {
      name: "Système de traite",
      slug: "systeme-traite",
      icon: <Settings className="h-5 w-5" />,
      subcategories: [
        {
          name: "Machines à traire",
          slug: "machines-traire",
          items: [],
        },
        {
          name: "Salle de traite",
          slug: "salle-traite",
          items: [
            { name: "Sortie rapide pour vaches", slug: "sortie-rapide-vaches" },
            { name: "Salle de traite en épi pour vaches", slug: "salle-traite-epi-vaches" },
          ],
        },
      ],
    },
    {
      name: "Equipement d'élevage",
      slug: "equipement-elevage",
      icon: <Building className="h-5 w-5" />,
      subcategories: [
        {
          name: "Cornadis",
          slug: "cornadis",
          items: [],
        },
        {
          name: "Logettes",
          slug: "logettes",
          items: [
            { name: "Logettes Simples", slug: "logettes-simples" },
            { name: "Logettes Double", slug: "logettes-double" },
          ],
        },
        {
          name: "Racleurs",
          slug: "racleurs",
          items: [
            { name: "Racleur en V", slug: "racleur-en-v" },
            { name: "Racleur à glissières", slug: "racleur-a-glissieres" },
          ],
        },
        {
          name: "Brosse à vaches",
          slug: "brosse-a-vaches",
          items: [],
        },
      ],
    },
  ]

  return (
    <div className={`w-full ${roboto.className}`}>
      <div className={montserrat.className}>
        {/* Top Bar */}
        <div className="hidden border-b bg-white/90 py-2 lg:block">
          <div className="container mx-auto flex items-center justify-between">
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
                      {languages.find((lang) => lang.value === currentLocale).label}
                    </span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.value}
                      onSelect={() => {changeLocale(lang.value); window.location.reload();}}
                    >
                      <img src={lang.flag} alt="Flag" className="h-4 mr-2" />
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
            <a href={`/${currentLocale}`} className="flex items-center gap-2">
              <img
                src="/logo-nobg-removebg-preview.png"
                alt="Algeria Farm Equipment Logo"
                width={150}
                height={40}
                className="ml-4 drop-shadow-[10px_0px_10px_#fff]"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-8">
                <li>
                  <a
                    href={`/${currentLocale}`}
                    className="text-sm font-medium hover:text-[#22C55E] transition-colors"
                  >
                    ACCUEIL
                  </a>
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
                            <a
                              href={`/${currentLocale}/products/${category.slug}`}
                              className="flex items-center gap-2 text-[#22C55E] hover:underline"
                            >
                              {category.icon}
                              <h3 className="font-semibold text-sm">
                                {category.name}
                              </h3>
                            </a>
                            <ul className="space-y-2">
                              {category.subcategories.map((subcategory) => (
                                <li key={subcategory.name}>
                                  {subcategory.items.length > 0 ? (
                                    <DropdownMenu>
                                      <DropdownMenuTrigger className="flex w-full items-center justify-between text-sm hover:text-[#22C55E] transition-colors">
                                        <a href={`/${currentLocale}/products/${category.slug}/${subcategory.slug}`}>
                                          {subcategory.name}
                                        </a>
                                        <ChevronRight className="h-4 w-4" />
                                      </DropdownMenuTrigger>
                                      <DropdownMenuContent className="w-[200px]">
                                        {subcategory.items.map((item) => (
                                          <DropdownMenuItem
                                            key={item.name}
                                            className="hover:text-[#22C55E] transition-colors"
                                          >
                                            <a href={`/${currentLocale}/products/${category.slug}/${subcategory.slug}/${item.slug}`}>
                                              {item.name}
                                            </a>
                                          </DropdownMenuItem>
                                        ))}
                                      </DropdownMenuContent>
                                    </DropdownMenu>
                                  ) : (
                                    <a
                                      href={`/${currentLocale}/products/${category.slug}/${subcategory.slug}`}
                                      className="text-sm hover:text-[#22C55E] transition-colors"
                                    >
                                      {subcategory.name}
                                    </a>
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
                  <a
                    href="#projets"
                    className="text-sm font-medium hover:text-[#22C55E] transition-colors"
                  >
                    PROJETS RÉALISÉS
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-sm font-medium hover:text-[#22C55E] transition-colors"
                  >
                    CONTACT
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
                      className="h-10"
                    />
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-8">
                  <ul className="space-y-4">
                    <li>
                      <a
                        href={`/${currentLocale}`}
                        className="flex items-center gap-2 text-sm font-medium hover:text-[#22C55E] transition-colors"
                      >
                        <Home className="h-5 w-5" />
                        ACCUEIL
                      </a>
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
                                  <Accordion type="single" collapsible>
                                    <AccordionItem value={category.name}>
                                      <AccordionTrigger className="text-sm hover:text-[#22C55E] transition-colors">
                                        <a href={`/${currentLocale}/products/${category.slug}`}>
                                          <span className="flex items-center gap-2">
                                            {category.icon}
                                            {category.name}
                                          </span>
                                        </a>
                                </AccordionTrigger>
                                      <AccordionContent>
                                        <ul className="space-y-2 mt-2 pl-5">
                                          {category.subcategories.map((subcategory) => (
                                            <li key={subcategory.name}>
                                              {subcategory.items.length > 0 ? (
                                                <Accordion type="single" collapsible>
                                                  <AccordionItem value={subcategory.name}>
                                                    <AccordionTrigger className="text-sm hover:text-[#22C55E] transition-colors">
                                                      <a href={`/${currentLocale}/products/${category.slug}/`}>
                                                        {subcategory.name}
                                                      </a>
                                                    </AccordionTrigger>
                                                    <AccordionContent>
                                                      <ul className="space-y-2 pl-5">
                                                        {subcategory.items.map((item) => (
                                                          <li
                                                            key={item.name}
                                                            className="text-sm hover:text-[#22C55E] transition-colors"
                                                          >
                                                            <a href={`/${currentLocale}/products/${category.slug}/${item.slug}`}>
                                                              {item.name}
                                                            </a>
                                                          </li>
                                                        ))}
                                                      </ul>
                                                    </AccordionContent>
                                                  </AccordionItem>
                                                </Accordion>
                                              ) : (
                                                <a
                                                  href={`/${currentLocale}/products/${category.slug}/${subcategory.slug}`}
                                                  className="text-sm hover:text-[#22C55E] transition-colors"
                                                >
                                                  {subcategory.name}
                                                </a>
                                              )}
                                            </li>
                                          ))}
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
                        className="flex items-center gap-2 text-sm font-medium hover:text-[#22C55E] transition-colors"
                      >
                        <FolderOpen className="h-5 w-5" />
                        PROJETS RÉALISÉS
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact"
                        className="flex items-center gap-2 text-sm font-medium hover:text-[#22C55E] transition-colors"
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
  )
}

export function Navbar2() {
  const t = useI18n()
  const currentLocale = useCurrentLocale()
  const changeLocale = useChangeLocale()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(null)

  const languages = [
    { value: "fr", label: "Français", flag: "/images/fr.svg" },
    { value: "en", label: "English", flag: "/images/en.svg" },
  ]

  const products = [
    {
      name: "Animaux vivant",
      slug: "animaux-vivant",
      icon: <Cow className="h-5 w-5" />,
      subcategories: [
        {
          name: "Vaches laitières",
          slug: "vaches-laitieres",
          items: [{ name: "Montbéliarde", slug: "montbeliarde" }],
        },
        {
          name: "Veau d'engraissement",
          slug: "veau-engraissement",
          items: [],
        },
      ],
    },
    {
      name: "Refroidissement et transport du lait",
      slug: "refroidissement-transport-lait",
      icon: <Container className="h-5 w-5" />,
      subcategories: [
        {
          name: "Tanks à lait de type ouvert",
          slug: "tanks-lait-ouvert",
          items: [{ name: "MP Vertitank", slug: "mp-vertitank" }],
        },
        {
          name: "Tanks à lait de type fermé",
          slug: "tanks-lait-ferme",
          items: [{ name: "MP Powertank", slug: "mp-powertank" }],
        },
      ],
    },
    {
      name: "Système de traite",
      slug: "systeme-traite",
      icon: <Settings className="h-5 w-5" />,
      subcategories: [
        {
          name: "Machines à traire",
          slug: "machines-traire",
          items: [],
        },
        {
          name: "Salle de traite",
          slug: "salle-traite",
          items: [
            { name: "Sortie rapide pour vaches", slug: "salle-de-traite-sortie-rapide-pour-vaches" },
            { name: "Salle de traite en épi pour vaches", slug: "salle-de-traite-en-epi-pour-vaches" },
          ],
        },
      ],
    },
    {
      name: "Equipement d'élevage",
      slug: "equipement-elevage",
      icon: <Building className="h-5 w-5" />,
      subcategories: [
        {
          name: "Cornadis",
          slug: "cornadis",
          items: [],
        },
        {
          name: "Logettes",
          slug: "logettes",
          items: [
            { name: "Logettes Simples", slug: "logettes-simples" },
            { name: "Logettes Double", slug: "logettes-double" },
          ],
        },
        {
          name: "Racleurs",
          slug: "racleurs",
          items: [
            { name: "Racleur en V", slug: "racleur-v" },
            { name: "Racleur à glissières", slug: "racleur-glissieres" },
          ],
        },
        {
          name: "Brosse à vaches",
          slug: "brosse-vaches",
          items: [],
        },
      ],
    },
  ]

  return (
    <div className={`w-full ${roboto.className}`}>
      <div className={montserrat.className}>
        {/* Top Bar */}
        <div className="hidden border-b bg-white/90 py-2 lg:block">
          <div className="container mx-auto flex items-center justify-between">
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
                      {languages.find((lang) => lang.value === currentLocale).label}
                    </span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.value}
                      onSelect={() => changeLocale(lang.value)}
                    >
                      <img src={lang.flag} alt="Flag" className="h-4 mr-2" />
                      {lang.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="bg-white border-b">
          <div className="container flex h-20 items-center justify-between">
            <a href={`/${currentLocale}`} className="flex items-center gap-2">
              <img
                src="/logo-nobg-removebg-preview.png"
                alt="Algeria Farm Equipment Logo"
                width={150}
                height={40}
                className="ml-4 drop-shadow-[10px_0px_10px_#fff]"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-8">
                <li>
                  <a
                    href={`/${currentLocale}`}
                    className="text-sm font-medium hover:text-[#22C55E] transition-colors"
                  >
                    ACCUEIL
                  </a>
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
                            <Link
                              href={`/${currentLocale}/products/${category.slug}`}
                              className="flex items-center gap-2 text-[#22C55E] hover:underline"
                            >
                              {category.icon}
                              <h3 className="font-semibold text-sm">
                                {category.name}
                              </h3>
                            </Link>
                            <ul className="space-y-2">
                              {category.subcategories.map((subcategory) => (
                                <li key={subcategory.name}>
                                  {subcategory.items.length > 0 ? (
                                    <DropdownMenu>
                                      <DropdownMenuTrigger className="flex w-full items-center justify-between text-sm hover:text-[#22C55E] transition-colors">
                                        <Link href={`/${currentLocale}/products/${category.slug}/${subcategory.slug}`}>
                                          {subcategory.name}
                                        </Link>
                                        <ChevronRight className="h-4 w-4" />
                                      </DropdownMenuTrigger>
                                      <DropdownMenuContent className="w-[200px]">
                                        {subcategory.items.map((item) => (
                                          <DropdownMenuItem
                                            key={item.name}
                                            className="hover:text-[#22C55E] transition-colors"
                                          >
                                            <Link href={`/${currentLocale}/products/${category.slug}/${item.slug}`}>
                                              {item.name}
                                            </Link>
                                          </DropdownMenuItem>
                                        ))}
                                      </DropdownMenuContent>
                                    </DropdownMenu>
                                  ) : (
                                    <Link
                                      href={`/${currentLocale}/products/${category.slug}/${subcategory.slug}`}
                                      className="text-sm hover:text-[#22C55E] transition-colors"
                                    >
                                      {subcategory.name}
                                    </Link>
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
                    href={`/${currentLocale}/#projets`}
                    className="text-sm font-medium hover:text-[#22C55E] transition-colors"
                  >
                    PROJETS RÉALISÉS
                  </Link>
                </li>
                <li>
                  <Link
                    href={`#contact`}
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
                      src="/logo-nobg-removebg-preview.png"
                      alt="Algeria Farm Equipment Logo"
                      className="h-10"
                    />
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-8">
                  <ul className="space-y-4">
                    <li>
                      <Link
                        href={`/${currentLocale}`}
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
                                  <Accordion type="single" collapsible>
                                    <AccordionItem value={category.name}>
                                      <AccordionTrigger className="text-sm hover:text-[#22C55E] transition-colors">
                                        <Link href={`/${currentLocale}/products/${category.slug}`}>
                                          <span className="flex items-center gap-2">
                                            {category.icon}
                                            {category.name}
                                          </span>
                                        </Link>
                                      </AccordionTrigger>
                                      <AccordionContent>
                                        <ul className="space-y-2 mt-2 pl-5">
                                          {category.subcategories.map((subcategory) => (
                                            <li key={subcategory.name}>
                                              {subcategory.items.length > 0 ? (
                                                <Accordion type="single" collapsible>
                                                  <AccordionItem value={subcategory.name}>
                                                    <AccordionTrigger className="text-sm hover:text-[#22C55E] transition-colors">
                                                      <Link href={`/${currentLocale}/products/${category.slug}/${subcategory.slug}`}>
                                                        {subcategory.name}
                                                      </Link>
                                                    </AccordionTrigger>
                                                    <AccordionContent>
                                                      <ul className="space-y-2 pl-5">
                                                        {subcategory.items.map((item) => (
                                                          <li
                                                            key={item.name}
                                                            className="text-sm hover:text-[#22C55E] transition-colors"
                                                          >
                                                            <Link href={`/${currentLocale}/products/${category.slug}/${subcategory.slug}/${item.slug}`}>
                                                              {item.name}
                                                            </Link>
                                                          </li>
                                                        ))}
                                                      </ul>
                                                    </AccordionContent>
                                                  </AccordionItem>
                                                </Accordion>
                                              ) : (
                                                <Link
                                                  href={`/${currentLocale}/products/${category.slug}/${subcategory.slug}`}
                                                  className="text-sm hover:text-[#22C55E] transition-colors"
                                                >
                                                  {subcategory.name}
                                                </Link>
                                              )}
                                            </li>
                                          ))}
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
                        href={`/${currentLocale}/#projets`}
                        className="flex items-center gap-2 text-sm font-medium hover:text-[#22C55E] transition-colors"
                      >
                        <FolderOpen className="h-5 w-5" />
                        PROJETS RÉALISÉS
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`#contact`}
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
  )
}