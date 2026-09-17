import React from "react";
import { CLINIC_INFO } from "@/lib/constants";
import { MessageCircle, Phone, CalendarCheck } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-alabaster">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-outer p-8 sm:p-14 lg:p-16 bg-espresso-950 text-alabaster overflow-hidden shadow-floating border border-espresso-800">
          
          {/* Subtle background glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 bg-bronze-600/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-bronze-300 bg-espresso-900 px-3 py-1 rounded-full border border-espresso-800 mb-6">
              <CalendarCheck className="w-3.5 h-3.5 text-bronze-400" strokeWidth={2} />
              Atendimento com Hora Marcada
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-alabaster leading-tight">
              Dê o primeiro passo para uma saúde bucal renovada e segura.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-sand-200 leading-relaxed font-normal">
              Agende sua consulta de avaliação no consultório da Dra. Cindy Honda. Um espaço tranquilo, sem pressa, dedicado a ouvir você e apresentar as melhores alternativas terapêuticas.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={CLINIC_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-bronze-500 hover:bg-bronze-400 text-espresso-950 font-semibold text-base px-8 py-4 rounded-full shadow-soft hover:shadow-elevated active:scale-[0.96] transition-all"
              >
                <MessageCircle className="w-5 h-5 text-espresso-950" strokeWidth={2.2} />
                <span>Agendar Avaliação no WhatsApp</span>
              </a>

              <a
                href={`tel:${CLINIC_INFO.contact.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 text-sand-200 hover:text-alabaster font-medium text-base px-6 py-4 rounded-full border border-espresso-800 hover:border-espresso-700 bg-espresso-900/50 active:scale-[0.96] transition-all"
              >
                <Phone className="w-4 h-4 text-bronze-400" strokeWidth={1.75} />
                <span>{CLINIC_INFO.contact.phone}</span>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-espresso-900/90 text-xs text-sand-300 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span>{CLINIC_INFO.schedule.days}</span>
              <span className="hidden sm:inline text-espresso-700">•</span>
              <span>Rua Vitório Zeola, 1516, Sala 02 — Carandá Bosque</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
