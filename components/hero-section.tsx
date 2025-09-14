"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Play, Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative py-16 px-4 md:px-8 overflow-hidden" style={{
      background: `
        radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0),
        white
      `,
      backgroundSize: '20px 20px'
    }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight transition-all duration-500 hover:scale-105">
                {t("heroTitle")
                  .split(" ")
                  .map((word, index) => (
                    <span key={index} className={index === 0 ? "block" : "block"}>
                      {word}
                    </span>
                  ))}
              </h1>
              <p className="text-lg md:text-xl text-orange-500 mt-4 font-medium animate-fade-in-up animation-delay-200">
                {t("heroSubtitle")}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
              <Button
                className="group relative overflow-hidden bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl transform-gpu"
                onClick={() =>
                  window.open("https://wa.me/5215512345678?text=Hola, me interesa conocer más sobre Algym247", "_blank")
                }
              >
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                {t("whatsapp")}
              </Button>
              <Button 
                className="group relative overflow-hidden bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl transform-gpu"
                onClick={() => window.open("https://forms.monday.com/forms/34bf2aeca8d71c4b8b5ce4fb4111c244?r=use1", "_blank")}
              >
                {t("interested")}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Button>
            </div>

            {/* Rating and Categories */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-in-up animation-delay-600">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400 transition-transform duration-300 hover:scale-125"
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
              <div className="text-gray-600 text-sm">{t("categories")}</div>
            </div>

            {/* Testimonial */}
            <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-in-up animation-delay-800 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] transform-gpu">
              <blockquote className="text-gray-700 text-sm leading-relaxed mb-4">"{t("testimonialText")}"</blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  <span className="text-gray-600 text-sm font-medium">JA</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900 text-sm">{t("testimonialAuthor")}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Video Section */}
          <div className="space-y-6 animate-fade-in-left">
            {/* Question Header */}
            {/* <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-red-500 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105">
                {t("searchGym")
                  .split(" ")
                  .map((word, index) => (
                    <span key={index} className={index === 1 ? "flex items-center gap-2" : ""}>
                      {index === 1 && (
                        <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-red-500 hover:scale-110 group">
                          <Play className="w-6 h-6 text-white ml-1 transition-transform duration-300 group-hover:scale-125" />
                        </div>
                      )}
                      {word}
                    </span>
                  ))}
              </h2>
            </div> */}

            {/* Video Player */}
            <div className="relative bg-gray-200 rounded-2xl overflow-hidden aspect-video transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform-gpu">
              <video
                className="w-full h-full object-cover rounded-2xl"
                muted
                loop
                playsInline
                controls
              >
                <source
                  src="/Conoce-Al-Gym.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
