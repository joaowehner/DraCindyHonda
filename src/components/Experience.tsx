import React from "react";
import Image from "next/image";
import { CLINIC_INFO, assetPath } from "@/lib/constants";
import { Shield, UserCheck, CalendarCheck, MapPin } from "lucide-react";

export default function Experience() {
  const points = [
    {
      icon: CalendarCheck,
      title: "Atendimento com hora marcada",
      description:
        "Horários planejados com intervalo adequado para que sua consulta transcorra com calma e sem pressa.",
    },
    {
      icon: UserCheck,
      title: "Acompanhamento direto",
      description:
        "Avaliação e condução do seu tratamento realizadas pessoalmente pela Dra. Cindy, com total continuidade.",
    },
    {
      icon: Shield,
      title: "Cuidados com biossegurança",
      description:
        "Ambiente estruturado com normas de higiene, materiais esterilizados e protocolos de proteção à sua saúde.",
    },
    {
      icon: MapPin,
      title: "Espaço reservado no Carandá Bosque",
      description:
        "Consultório discreto e acolhedor, planejado para que você se sinta seguro e confortável durante todo o atendimento.",
    },
  ];

  return (
    <section id="consultorio" className="py-20 lg:py-28 bg-alabaster">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-espresso-900 leading-tight">
            Ambiente planejado para o seu conforto e tranquilidade.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-espresso-600 leading-relaxed font-normal">
            Um espaço acolhedor e privativo no Carandá Bosque, pensado para tornar sua experiência odontológica serena e segura.
          </p>
        </div>

        {/* Visual & Features Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Clinic Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-outer overflow-hidden shadow-elevated bg-sand-200 img-editorial">
              <Image
                src={assetPath("/images/dra-cindy-honda-clinica.jpg")}
                alt="Consultório odontológico da Dra. Cindy Honda no Carandá Bosque"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-alabaster">
                <span className="block font-display text-base font-semibold">
                  Consultório Dra. Cindy Honda
                </span>
                <span className="text-xs text-sand-200">
                  Rua Vitório Zeola, 1516, Sala 02 • Carandá Bosque
                </span>
              </div>
            </div>
          </div>

          {/* Short Points */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {points.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-outer bg-sand-50/70 border border-sand-200/80 shadow-subtle flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-inner bg-sand-100 flex items-center justify-center text-bronze-600 mb-4">
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-display text-lg font-bold text-espresso-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-espresso-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
