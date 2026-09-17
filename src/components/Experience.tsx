import React from "react";
import { CLINIC_INFO } from "@/lib/constants";
import { MapPin, Shield, Sparkles, UserCheck, CalendarCheck } from "lucide-react";

export default function Experience() {
  const features = [
    {
      icon: CalendarCheck,
      title: "Pontualidade como respeito",
      description:
        "Horários agendados com intervalo generoso. Você não espera horas na sala de espera: sua consulta começa no horário combinado.",
    },
    {
      icon: UserCheck,
      title: "Atendimento exclusivo e direto",
      description:
        "Todo o seu acompanhamento clínico é realizado pessoalmente pela Dra. Cindy, garantindo continuidade e vínculo de confiança.",
    },
    {
      icon: Shield,
      title: "Biossegurança rigorosa",
      description:
        "Esterilização hospitalar e descartáveis certificados, seguindo estritamente as diretrizes da ANVISA e do Conselho Federal de Odontologia.",
    },
    {
      icon: MapPin,
      title: "Localização nobre e acessível",
      description:
        "Localizado no Carandá Bosque (Rua Vitório Zeola, 1516), com fácil estacionamento na porta e acesso tranquilo sem o trânsito pesado do centro.",
    },
  ];

  return (
    <section id="consultorio" className="py-20 lg:py-28 bg-alabaster">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-espresso-900 leading-tight">
            Um consultório pensado para o seu conforto e tranquilidade.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-espresso-600 leading-relaxed font-normal">
            Cada detalhe do nosso espaço foi desenhado para criar uma atmosfera relaxante, onde a visita ao dentista seja uma experiência agradável e segura.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-outer bg-sand-50/80 border border-sand-200/80 shadow-subtle hover:shadow-soft transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-inner bg-sand-100 flex items-center justify-center text-bronze-600 mb-5">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-espresso-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-espresso-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-sand-200/60 text-xs font-semibold text-bronze-700 tracking-wider uppercase">
                  Diferencial 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Location callout banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-outer bg-espresso-900 text-alabaster shadow-elevated flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-inner bg-espresso-800 border border-espresso-700 flex items-center justify-center text-bronze-400 shrink-0">
              <MapPin className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <div>
              <span className="block text-xs uppercase tracking-widest text-bronze-300 font-semibold">
                Endereço do Consultório
              </span>
              <span className="block font-display text-lg sm:text-xl font-medium text-alabaster mt-0.5">
                {CLINIC_INFO.address.full}
              </span>
            </div>
          </div>

          <a
            href={CLINIC_INFO.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-bronze-500 hover:bg-bronze-400 text-espresso-950 font-semibold text-sm px-6 py-3 rounded-full active:scale-[0.96] transition-all shrink-0"
          >
            <span>Ver no Google Maps</span>
          </a>
        </div>

      </div>
    </section>
  );
}
