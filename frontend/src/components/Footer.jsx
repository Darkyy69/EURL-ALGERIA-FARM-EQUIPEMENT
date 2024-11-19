'use client';

import { useI18n } from "@/locales/client";
import { Button } from "@/components/ui/button";
import Icon from "@mdi/react";
import { mdiFacebook, mdiInstagram, mdiLinkedin } from "@mdi/js";

export default function Footer (){
  const t = useI18n();
  return (
  <footer className="bg-gray-900 text-white pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-blue-500 pb-2">
            LA VOIX DE NOS CLIENTS
          </h3>
          <div className="bg-gray-800 p-4 rounded">
            <p className="italic mb-4">"Testimonial text here..."</p>
            <p className="font-semibold">Steven A. Judge</p>
            <p className="text-sm text-gray-400">
              President/CEO Bob-White Systems, U.S.A
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-blue-500 pb-2">
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
              <Icon path={mdiFacebook} size={1} />
              <Icon path={mdiInstagram} size={1} />
              <Icon path={mdiLinkedin} size={1} />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-blue-500 pb-2">
            CONTACTEZ-NOUS
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nom"
              className="w-full p-2 bg-gray-800 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 bg-gray-800 rounded"
            />
            <select className="w-full p-2 bg-gray-800 rounded">
              <option>Département</option>
              {/* Add options */}
            </select>
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-2 bg-gray-800 rounded"
            />
            <Button className="w-full bg-blue-500 hover:bg-blue-600">
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