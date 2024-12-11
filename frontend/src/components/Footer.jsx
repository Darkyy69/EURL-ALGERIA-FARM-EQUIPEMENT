"use client";

import { Button } from "@/components/ui/button";
import Icon from "@mdi/react";
import { mdiFacebook, mdiInstagram, mdiLinkedin } from "@mdi/js";
import { useDataContext } from "./DataProvider";

export default function Footer() {
  const { footerContent } = useDataContext();

  return (
    <footer
      className="relative bg-gray-900 text-white pt-16 pb-8 overflow-hidden"
      id="contact"
    >
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary rounded-full opacity-10"></div>
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-primary rounded-full opacity-10"></div>
        <div className="absolute -bottom-24 left-1/4 w-56 h-56 bg-primary rounded-full opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* First Column: Testimonials */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-primary pb-2">
              {footerContent[0]?.heading || "Heading Not Found"}
            </h3>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <p className="italic mb-4">
                {footerContent[0]?.content?.testimonial ||
                  "Testimonial text here..."}
              </p>
              <p className="font-semibold">
                {footerContent[0]?.content?.author || "Author Name"}
              </p>
              <p className="text-sm text-gray-400">
                {footerContent[0]?.content?.position || "Author Position"}
              </p>
            </div>
          </div>

          {/* Second Column: Installed In */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-primary pb-2">
              {footerContent[1]?.heading || "Heading Not Found"}
            </h3>
            <div className="space-y-4">
              {footerContent[1]?.content?.map((location, index) => (
                <div key={index}>
                  <p className="font-semibold">
                    {location.title || "Location Title"}
                  </p>
                  <p className="text-sm text-gray-400">
                    {location.details || "Details not found"}
                  </p>
                  {location.contact && (
                    <p className="text-sm text-gray-400">{location.contact}</p>
                  )}
                </div>
              ))}
              <div className="flex gap-4 mt-4">
                {footerContent[1]?.social_links?.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-primary hover:text-white transition-colors"
                  >
                    <Icon
                      path={
                        link === "facebook"
                          ? mdiFacebook
                          : link === "instagram"
                          ? mdiInstagram
                          : mdiLinkedin
                      }
                      size={1}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Third Column: Contact Form */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-primary pb-2">
              {footerContent[2]?.heading || "Heading Not Found"}
            </h3>
            <form className="space-y-4">
              {footerContent[2]?.form_fields?.map((field, index) => {
                if (field.type === "text" || field.type === "email") {
                  return (
                    <input
                      key={index}
                      type={field.type}
                      placeholder={field.label || "Field"}
                      className="w-full p-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  );
                }
                if (field.type === "dropdown") {
                  return (
                    <select
                      key={index}
                      className="w-full p-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option>{field.label || "Dropdown"}</option>
                    </select>
                  );
                }
                if (field.type === "textarea") {
                  return (
                    <textarea
                      key={index}
                      placeholder={field.label || "Textarea"}
                      rows={4}
                      className="w-full p-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  );
                }
                return null;
              })}
              <Button className="w-full bg-primary hover:bg-[#1EA34D] text-white transition-colors">
                {footerContent[2]?.submit_button?.text || "Envoyer"}
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
            className="mb-4 md:mb-0 drop-shadow-[10px_0px_10px_#fff]"
          />
          <p className="text-gray-400 text-center text-balance">
            Copyright © 2025 Algeria Farm Equipement | Tous droits réservés |
            License & Terms
          </p>
        </div>
      </div>
    </footer>
  );
}
