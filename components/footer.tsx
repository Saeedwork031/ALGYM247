"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { PrivacyPopup } from "@/components/privacy-popup"

export function Footer() {
  const { t, language } = useLanguage()

  const handleWhatsApp = () => {
    const message =
      language === "es"
        ? encodeURIComponent("¡Hola! Me interesa conocer más sobre Algym247 y sus servicios.")
        : encodeURIComponent("Hello! I'm interested in learning more about Algym247 and its services.")
    window.open(`https://api.whatsapp.com/send/?phone=525569028493&text=${message}&type=phone_number&app_absent=0`, "_blank")
  }

  return (
    <footer className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-gray-600 text-lg mb-8">{t("followUs")}</h3>

        <div className="flex justify-center gap-8 mb-8">
          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
            {t("homepage")}
          </a>
          <PrivacyPopup />
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://www.facebook.com/AlGymParaTodos?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600 transition-all duration-300 hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/algym.247/?igsh=bDFiNGtycHcwOWxh#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-600 transition-all duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/algymmx/?originalSubdomain=mx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-700 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://www.youtube.com/@AlGym247"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-600 transition-all duration-300 hover:scale-110"
            aria-label="YouTube"
          >
            <Youtube size={24} />
          </a>
          <a
            href="https://www.tiktok.com/@algym.247"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-black transition-all duration-300 hover:scale-110"
            aria-label="TikTok"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
          </a>
          <button
            onClick={handleWhatsApp}
            className="text-gray-400 hover:text-green-600 transition-all duration-300 hover:scale-110"
            aria-label="WhatsApp"
          >
            <MessageCircle size={24} />
          </button>
        </div>

        <div className="mb-8">
          <Button
            onClick={() => window.open("https://forms.monday.com/forms/34bf2aeca8d71c4b8b5ce4fb4111c244?r=use1", "_blank")}
            className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            {t("interested")}
          </Button>
        </div>

        <p className="text-gray-500 text-sm">{t("copyright")}</p>
      </div>
    </footer>
  )
}
