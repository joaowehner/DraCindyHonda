"use client";

import React, { useState } from "react";
import { CLINIC_INFO } from "@/lib/constants";
import { MapPin, Navigation, Compass, Copy, Check, ExternalLink } from "lucide-react";

export default function LocationSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CLINIC_INFO.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="localizacao" className="py-20 lg:py-28 bg-sand-50 border-t border-sand-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-espresso-900 leading-tight">
            Localização e facilidade de acesso.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-espresso-600 leading-relaxed font-normal">
            Consultório localizado no bairro Carandá Bosque, em Campo Grande/MS.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address Card & Details */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-outer bg-alabaster border border-sand-200 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-inner bg-sand-100 flex items-center justify-center text-bronze-600 mb-6">
                <MapPin className="w-6 h-6" strokeWidth={1.5} />
              </div>

              <span className="text-xs uppercase tracking-widest text-bronze-700 font-semibold block mb-1">
                Consultório Odontológico
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-espresso-900 leading-snug">
                Dra. Cindy Honda
              </h3>

              <div className="mt-6 space-y-2 text-sm sm:text-base text-espresso-700">
                <p className="font-semibold text-espresso-900">
                  {CLINIC_INFO.address.street}, {CLINIC_INFO.address.suite}
                </p>
                <p>{CLINIC_INFO.address.neighborhood}</p>
                <p>
                  {CLINIC_INFO.address.city} - {CLINIC_INFO.address.state}, CEP {CLINIC_INFO.address.zip}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-sand-200/80 space-y-2.5 text-xs sm:text-sm text-espresso-600">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span>Atendimento com hora marcada</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-bronze-500 shrink-0" />
                  <span>Segunda a sexta-feira</span>
                </div>
              </div>
            </div>

            {/* Actions: Google Maps, Waze, Copy */}
            <div className="mt-8 pt-6 border-t border-sand-200/80 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={CLINIC_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-espresso-900 text-alabaster hover:bg-espresso-800 text-xs sm:text-sm font-medium active:scale-[0.96] transition-all"
                >
                  <Navigation className="w-4 h-4 text-emerald-400" strokeWidth={2} />
                  <span>Google Maps</span>
                </a>

                <a
                  href={CLINIC_INFO.address.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-sand-200 hover:bg-sand-300 text-espresso-900 text-xs sm:text-sm font-medium active:scale-[0.96] transition-all"
                >
                  <Compass className="w-4 h-4 text-espresso-700" strokeWidth={2} />
                  <span>Waze</span>
                </a>
              </div>

              <button
                type="button"
                onClick={handleCopy}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-sand-300 hover:border-sand-400 bg-transparent text-espresso-700 text-xs sm:text-sm font-medium active:scale-[0.96] transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" strokeWidth={2} />
                    <span className="text-emerald-700 font-semibold">Endereço copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-espresso-500" strokeWidth={1.75} />
                    <span>Copiar endereço completo</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7 rounded-outer overflow-hidden border border-sand-200 shadow-subtle min-h-[380px] lg:min-h-full relative bg-sand-100">
            <iframe
              title="Localização do Consultório Odontológico Dra. Cindy Honda no Carandá Bosque"
              src="https://maps.google.com/maps?q=Rua+Vit%C3%B3rio+Zeola,+1516+-+Carand%C3%A1+Bosque,+Campo+Grande+-+MS&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[400px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
