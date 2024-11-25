'use client'
import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Phone, Mail, Download, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function ProductDetailTemplate({ product }) {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Column - Images */}
        <div className="space-y-6">
          {product.images && product.images.length > 0 ? (
            <>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative aspect-square cursor-zoom-in overflow-hidden rounded-xl bg-gray-100">
                    <Image
                      src={product.images[activeImage]}
                      alt={`${product.name} - vue détaillée`}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                      priority
                    />
                    {product.images.length > 1 && (
                      <div className="absolute inset-0 flex items-center justify-between p-4">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="bg-white/80 hover:bg-white"
                          onClick={(e) => {
                            e.stopPropagation()
                            setActiveImage((prev) => (prev - 1 + product.images.length) % product.images.length)
                          }}
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="bg-white/80 hover:bg-white"
                          onClick={(e) => {
                            e.stopPropagation()
                            setActiveImage((prev) => (prev + 1) % product.images.length)
                          }}
                        >
                          <ChevronRight className="h-6 w-6" />
                        </Button>
                      </div>
                    )}
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>Vue détaillée</DialogTitle>
                    <DialogDescription>
                      {product.name}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={product.images[activeImage]}
                      alt={`${product.name} - vue détaillée`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>

              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`relative aspect-square overflow-hidden rounded-lg bg-gray-100 transition-all hover:opacity-80 ${
                        activeImage === index ? 'ring-2 ring-[#22C55E]' : ''
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Vue ${index + 1} de ${product.name}`}
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
            <h1 className="text-3xl font-bold text-gray-900">
              {product.name}
            </h1>
            {product.subTitle && (
              <h2 className="text-lg font-bold text-gray-900">{product.subTitle}</h2>
            )}
            <p className="text-base text-gray-600 mt-4"
              dangerouslySetInnerHTML={{
                __html: product.description.replace(/\n/g, "<br>"),
              }}>
            </p>
          </div>

          {product.benefits && product.benefits.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {product.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#22C55E] flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          )}

          <Accordion type="single" collapsible className="w-full">
            {product.technicalSpecs && Object.keys(product.technicalSpecs).length > 0 && (
              <AccordionItem value="specs">
                <AccordionTrigger>Spécifications techniques</AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-4 text-sm">
                    {Object.entries(product.technicalSpecs).map(([key, value]) => (
                      <div key={key} className="grid grid-cols-2 gap-4 p-2 rounded-lg hover:bg-gray-50">
                        <div className="font-medium">{key}</div>
                        <div>{value}</div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )}
            {product.dimensions && (
              <AccordionItem value="dimensions">
                <AccordionTrigger>Dimensions</AccordionTrigger>
                <AccordionContent>
                  {Object.entries(product.dimensions).map(([key, value]) => (
                    <div key={key} className="mb-8">
                      <h3 className="text-lg font-semibold mb-2 text-[#22C55E]">{key === 'small' ? 'Petits modèles' : 'Grands modèles'}</h3>
                      <p className="mb-4">{product.dimensionDescription[key]}</p>
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
                      {product.dimensionImages && product.dimensionImages[key] && (
                        <div className="mt-4">
                          <Image
                            src={product.dimensionImages[key]}
                            alt={`Schéma dimensionnel - ${key === 'small' ? 'Petits modèles' : 'Grands modèles'}`}
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
            {product.characteristics && (
              <AccordionItem value="characteristics">
                <AccordionTrigger>Caractéristiques</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    {Object.entries(product.characteristics).map(([key, value]) => (
                      <div key={key} className="border-b border-gray-200 pb-4 last:border-b-0">
                        <h4 className="font-semibold text-[#22C55E] mb-2">{key}</h4>
                        <p className="text-sm text-gray-600">{value}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )}
            {product.installationGuide && product.installationGuide.length > 0 && (
              <AccordionItem value="installation">
                <AccordionTrigger>Guide d'installation</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 text-sm">
                    <p>
                      L'installation de {product.name} est simple et peut être 
                      réalisée rapidement en suivant ces étapes :
                    </p>
                    <ol className="list-decimal pl-4 space-y-2">
                      {product.installationGuide.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>

          <div className="space-y-4 pt-6">
            <Button size="lg" className="w-full bg-[#22C55E] hover:bg-[#1EA34D]">
              Demander un devis
            </Button>
            <div className="flex flex-col sm:flex-row gap-4 text-sm">
              <a href="tel:+213661826038" className="flex items-center gap-2 text-gray-600 hover:text-[#22C55E]">
                <Phone className="h-4 w-4" />
                (+213) 661826038
              </a>
              <a href="mailto:contact@abovines.com" className="flex items-center gap-2 text-gray-600 hover:text-[#22C55E]">
                <Mail className="h-4 w-4" />
                contact@abovines.com
              </a>
            </div>
          </div>

          <Card className="p-4 bg-gray-50 border-[#22C55E] border-l-4">
            <div className="flex items-start gap-4">
              <Download className="h-6 w-6 text-[#22C55E] flex-shrink-0" />
              <div>
                <h3 className="font-medium">Documentation technique</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Téléchargez notre documentation technique complète pour plus de détails 
                  sur l'installation et l'entretien.
                </p>
                <Button variant="link" className="px-0 mt-2 text-[#22C55E]">
                  Télécharger le PDF
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}