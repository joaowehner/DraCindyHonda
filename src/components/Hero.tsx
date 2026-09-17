"use client";

import React from "react";
import Image from "next/image";
import { CLINIC_INFO, assetPath } from "@/lib/constants";
import { MessageCircle, ArrowRight, ShieldCheck, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-24 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-sand-100/70 via-alabaster to-alabaster"
    >
      {/* Subtle organic light accent in the background */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-sand-200/40 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Information & Conversion Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Direct Professional Heading without generic kickers */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-espresso-900 leading-[1.14]">
              Precisão clínica e naturalidade no cuidado do seu sorriso.
            </h1>

            {/* Clear, specific subtitle with verified credentials */}
            <p className="mt-4 sm:mt-6 text-base sm:text-xl text-espresso-600 font-normal leading-relaxed max-w-2xl">
              Consultório odontológico com atuação em <strong className="font-semibold text-espresso-800">Implantes</strong> e{" "}
              <strong className="font-semibold text-espresso-800">Prótese Dentária</strong>. Atendimento individualizado com a{" "}
              <span className="text-espresso-900 font-medium">Dra. Cindy Honda</span>, cirurgiã-dentista graduada pela UFMS, no Carandá Bosque.
            </p>

            {/* Mobile-only featured portrait preview */}
            <div className="lg:hidden mt-6 mb-2">
              <div className="relative aspect-[4/3] sm:aspect-[16/9] w-full rounded-outer overflow-hidden shadow-soft bg-sand-200 img-editorial">
                <Image
                  src={assetPath("/images/dra-cindy-honda-hero.jpg")}
                  alt="Dra. Cindy Honda no consultório"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-alabaster flex items-center justify-between">
                  <div>
                    <span className="block font-display text-sm font-bold">
                      Dra. Cindy Tiemi Honda
                    </span>
                    <span className="text-[11px] text-sand-200">
                      Cirurgiã-Dentista • {CLINIC_INFO.cro}
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-espresso-900 bg-alabaster/90 px-2 py-0.5 rounded-full">
                    UFMS
                  </span>
                </div>
              </div>
            </div>

            {/* Badges / Micro-authority Row */}
            <div className="mt-4 sm:mt-7 flex flex-wrap items-center gap-y-2 gap-x-3 sm:gap-x-5 text-xs sm:text-sm text-espresso-600 font-medium">
              <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-md bg-sand-100/90 text-espresso-800 border border-sand-200">
                <ShieldCheck className="w-3.5 h-3.5 text-bronze-600" strokeWidth={1.75} />
                {CLINIC_INFO.cro}
              </span>
              <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-md bg-sand-100/90 text-espresso-800 border border-sand-200">
                <Sparkles className="w-3.5 h-3.5 text-bronze-600" strokeWidth={1.75} />
                Graduada pela UFMS
              </span>
              <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-md bg-sand-100/90 text-espresso-800 border border-sand-200">
                <MapPin className="w-3.5 h-3.5 text-bronze-600" strokeWidth={1.75} />
                Carandá Bosque • Campo Grande/MS
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <a
                href={CLINIC_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-espresso-900 text-alabaster hover:bg-espresso-800 font-medium text-sm sm:text-base px-6 sm:px-7 py-3.5 rounded-full shadow-soft hover:shadow-elevated active:scale-[0.96] transition-transform duration-150 focus-visible:ring-2 focus-visible:ring-bronze-500"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" strokeWidth={2} />
                <span>Agendar pelo WhatsApp</span>
              </a>

              <a
                href="#atendimentos"
                className="inline-flex items-center justify-center gap-2 text-espresso-700 hover:text-espresso-950 font-medium text-sm sm:text-base px-6 py-3.5 rounded-full border border-sand-300 hover:border-espresso-400 bg-transparent hover:bg-sand-50 active:scale-[0.96] transition-transform duration-150"
              >
                <span>Conhecer Atendimentos</span>
                <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
              </a>
            </div>

            {/* Reassurance note */}
            <div className="mt-7 sm:mt-8 pt-5 sm:pt-6 border-t border-sand-200/80 flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4 text-xs text-espresso-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span>Atendimento com hora marcada</span>
              </div>
              <span className="hidden sm:inline text-sand-300">•</span>
              <span>Ambiente acolhedor e privativo</span>
            </div>

          </div>

          {/* Desktop Right Column: Master Editorial Photography */}
          <div className="hidden lg:flex lg:col-span-5 relative justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Decorative subtle frame border */}
              <div
                className="absolute -inset-2.5 rounded-outer border border-sand-300/70 -z-10 pointer-events-none transform -rotate-1"
                aria-hidden="true"
              />

              {/* Main Photo Card */}
              <div className="relative aspect-[3/4] w-full rounded-outer overflow-hidden shadow-elevated bg-sand-200 img-editorial">
                <Image
                  src={assetPath("/images/dra-cindy-honda-hero.jpg")}
                  alt="Dra. Cindy Honda, cirurgiã-dentista no consultório no Carandá Bosque"
                  fill
                  priority
                  sizes="(max-width: 1200px) 45vw, 540px"
                  className="object-cover object-center transform hover:scale-[1.02] transition-transform duration-500"
                />

                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-espresso-950/70 via-espresso-950/20 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-inner bg-alabaster/95 backdrop-blur-md border border-sand-200/80 shadow-subtle flex items-center justify-between">
                  <div>
                    <span className="block font-display text-base font-bold text-espresso-900">
                      Dra. Cindy Tiemi Honda
                    </span>
                    <span className="block text-xs text-espresso-600 font-medium">
                      Cirurgiã-Dentista • {CLINIC_INFO.cro}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-bronze-700 bg-sand-100 px-2.5 py-1 rounded-full border border-sand-200">
                    UFMS
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
