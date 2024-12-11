"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Phone, Mail, Download, CheckCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDataContext } from "./DataProvider";
import { notFound } from "next/navigation";
import LoadingScreen from "./Loader";

export default function ProductDetailTemplate({ product }) {
  const [activeImage, setActiveImage] = useState(0);
  const { isLoading } = useDataContext();
  console.log(product)

  useEffect(() => {
    if (!product && !isLoading) return notFound();
  }, [product, isLoading]);
  
  if (isLoading) {
    return <LoadingScreen />;
  }

  const pdfFiles = product?.pdf ? JSON.parse(product.pdf) : [];
  const hasPDF = Array.isArray(pdfFiles) && pdfFiles.length > 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Column - Images */}
        <div className="space-y-6">
          {product?.images && product?.images.length > 0 ? (
            <>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative aspect-square cursor-zoom-in overflow-hidden rounded-xl bg-gray-100">
                    <Image
                      src={product?.images[activeImage]}
                      alt={`${product?.name} - vue détaillée`}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                      priority
                    />
                    {product?.images.length > 1 && (
                      <div className="absolute inset-0 flex items-center justify-between p-4">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="bg-white/80 hover:bg-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveImage(
                              (prev) =>
                                (prev - 1 + product?.images.length) %
                                product?.images.length
                            );
                          }}
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="bg-white/80 hover:bg-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveImage(
                              (prev) => (prev + 1) % product?.images.length
                            );
                          }}
                        >
                          <ChevronRight className="h-6 w-6" />
                        </Button>
                      </div>
                    )}
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-dvh">
                  <DialogHeader>
                    <DialogTitle>Vue détaillée</DialogTitle>
                    <DialogDescription>{product?.name}</DialogDescription>
                  </DialogHeader>
                  <div className="relative aspect-[4/3] w-full h-5/6">
                    <Image
                      src={product?.images[activeImage]}
                      alt={`${product?.name} - vue détaillée`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>

              {product?.images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {product?.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`relative aspect-square overflow-hidden rounded-lg bg-gray-100 transition-all hover:opacity-80 ${
                        activeImage === index ? "ring-2 ring-primary" : ""
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Vue ${index + 1} de ${product?.name}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="aspect-square bg-gray-200 rounded-xl flex items-center justify-center">
              <p className="text-gray-500">Image non disponible</p>
            </div>
          )}
        </div>

        {/* Right Column - Product Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product?.name}</h1>
            {product?.subTitle && (
              <h2 className="text-lg font-bold text-gray-900">
                {product?.subTitle}
              </h2>
            )}
            <p
              className="text-base text-gray-600 mt-4"
              dangerouslySetInnerHTML={{
                __html: product?.description.replace(/\n/g, "<br>"),
              }}
            ></p>
          </div>

          {product?.benefits && product?.benefits.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {product?.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          )}

          <Accordion type="single" collapsible className="w-full">
            {product?.content.dimensions && (
              <AccordionItem value="dimensions">
                <AccordionTrigger className="capitalize tracking-wide">dimensions</AccordionTrigger>
                <AccordionContent>
                  {Object.entries(product?.content.dimensions).map(([key, value]) => (
                    <div key={key} className="mb-8">
                      <h3 className="text-lg font-semibold mb-2 text-primary">
                        {key === "small" ? "Petits modèles" : "Grands modèles"}
                      </h3>
                      <p className="mb-4">
                        {product?.content.dimensionDescription[key]}
                      </p>
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              {Object.keys(value[0]).map((header) => (
                                <TableHead key={header}>{header}</TableHead>
                              ))}
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {value.map((row, index) => (
                              <TableRow key={index}>
                                {Object.values(row).map((cell, cellIndex) => (
                                  <TableCell key={cellIndex}>{cell}</TableCell>
                                ))}
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                      {product?.content.dimensionImages &&
                        product?.content.dimensionImages[key] && (
                          <div className="mt-4">
                            <Image
                              src={product?.content.dimensionImages[key]}
                              alt={`Schéma dimensionnel - ${
                                key === "small"
                                  ? "Petits modèles"
                                  : "Grands modèles"
                              }`}
                              width={800}
                              height={400}
                              className="w-full h-auto"
                            />
                          </div>
                        )}
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            )}

            {product?.content && Object.entries(product.content)
              .filter(([key]) => !key.startsWith('dimension'))
              .map(([key, value]) => (
                <AccordionItem key={key} value={key}>
                  <AccordionTrigger className="capitalize">{key}</AccordionTrigger>
                  <AccordionContent>
                    {Array.isArray(value) ? (
                      <ul className="list-disc pl-5 space-y-2">
                        {value.map((item, index) => (
                          <li key={index} className="marker:text-primary">
                            {typeof item === 'string' && item.startsWith('/images/') ? (
                              <img src={item} alt="Product detail" className="mt-2 rounded-lg" />
                            ) : (
                              item
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : typeof value === 'object' && value !== null ? (
                      <div className="space-y-4">
                        {Object.entries(value).map(([subKey, subValue]) => (
                          <div key={subKey} className="border-b border-gray-200 pb-4 last:border-b-0">
                            <h4 className="font-semibold text-primary mb-2">{subKey}</h4>
                            {Array.isArray(subValue) ? (
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    {subValue[0] && Object.keys(subValue[0]).map((header) => (
                                      <TableHead key={header}>{header}</TableHead>
                                    ))}
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {subValue.map((row, rowIndex) => (
                                    <TableRow key={rowIndex}>
                                      {Object.values(row).map((cell, cellIndex) => (
                                        <TableCell key={cellIndex}>
                                          {typeof cell === 'string' && cell.startsWith('/images/') ? (
                                            <img src={cell} alt="Product detail" className="mt-2 rounded-lg" />
                                          ) : (
                                            cell
                                          )}
                                        </TableCell>
                                      ))}
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            ) : typeof subValue === 'string' && subValue.startsWith('/images/') ? (
                              <img src={subValue} alt="Product detail" className="mt-2 rounded-lg" />
                            ) : (
                              <p className="text-sm text-gray-600">{JSON.stringify(subValue)}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : typeof value === 'string' && value.startsWith('/images/') ? (
                      <img src={value} alt="Product detail" className="mt-2 rounded-lg" />
                    ) : (
                      <p className="text-sm text-gray-600">{JSON.stringify(value)}</p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>

          {hasPDF && (
            <Card className="p-4 bg-gray-50 border-primary border-l-4">
              <div className="flex items-start gap-4">
                <Download className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Documentation technique</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Téléchargez notre documentation technique complète pour plus
                    de détails.
                  </p>
                  <a 
                    href={`https://abovines.com${pdfFiles[0]}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="link" className="px-0 mt-2 text-primary">
                      Télécharger le PDF
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          )}
          <div className="space-y-4 pt-6">
            {/* <Button
              size="lg"
              className="w-full bg-primary hover:bg-[#1EA34D]"
            >
              Demander un devis
            </Button> */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm">
              <a
                href="tel:+213661826038"
                className="flex items-center gap-2 text-gray-600 hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                (+213) 661826038
              </a>
              <a
                href="mailto:contact@abovines.com"
                className="flex items-center gap-2 text-gray-600 hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                contact@abovines.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

