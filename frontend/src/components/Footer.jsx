"use client";

import { useI18n } from "@/locales/client";
import { Button } from "@/components/ui/button";
import Icon from "@mdi/react";
import { mdiFacebook, mdiInstagram, mdiLinkedin } from "@mdi/js";

export default function Footer() {
  const t = useI18n();
  return (
    <footer
      className="relative bg-gray-900 text-white pt-16 pb-8 overflow-hidden"
      id="contact"
    >
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#22C55E] rounded-full opacity-10"></div>
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-[#22C55E] rounded-full opacity-10"></div>
        <div className="absolute -bottom-24 left-1/4 w-56 h-56 bg-[#22C55E] rounded-full opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-[#22C55E] pb-2">
              LA VOIX DE NOS CLIENTS
            </h3>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <p className="italic mb-4">
                `&quot;`Testimonial text here...`&quot;`
              </p>
              <p className="font-semibold">Steven A. Judge</p>
              <p className="text-sm text-gray-400">
                President/CEO Bob-White Systems, U.S.A
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-[#22C55E] pb-2">
              INSTALLÉS EN
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Quartier général - Usine</p>
                <p className="text-sm text-gray-400">Address details...</p>
              </div>
              <div>
                <p className="font-semibold">Agrinio Centre de services</p>
                <p className="text-sm text-gray-400">
                  Route nationale Agrinio-Arta, Neapoli, Agrinio 301 00
                </p>
                <p className="text-sm text-gray-400">t: (+30) 26410 91236</p>
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href="#"
                  className="text-[#22C55E] hover:text-white transition-colors"
                >
                  <Icon path={mdiFacebook} size={1} />
                </a>
                <a
                  href="#"
                  className="text-[#22C55E] hover:text-white transition-colors"
                >
                  <Icon path={mdiInstagram} size={1} />
                </a>
                <a
                  href="#"
                  className="text-[#22C55E] hover:text-white transition-colors"
                >
                  <Icon path={mdiLinkedin} size={1} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-[#22C55E] pb-2">
              CONTACTEZ-NOUS
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nom"
                className="w-full p-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#22C55E]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#22C55E]"
              />
              <select className="w-full p-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#22C55E]">
                <option>Département</option>
                <option>Ventes</option>
                <option>Support</option>
                <option>Ressources Humaines</option>
              </select>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#22C55E]"
              />
              <Button className="w-full bg-[#22C55E] hover:bg-[#1EA34D] text-white transition-colors">
                Envoyer
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
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
