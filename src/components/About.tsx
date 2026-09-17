import React from "react";
import Image from "next/image";
import { CLINIC_INFO, assetPath } from "@/lib/constants";
import { GraduationCap, CheckCircle, Heart } from "lucide-react";

export default function About() {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Graduação em Odontologia",
      institution: "Universidade Federal de Mato Grosso do Sul (UFMS)",
      detail: "Formação acadêmica no curso de Odontologia da UFMS em Campo Grande/MS.",
    },
    {
      icon: CheckCircle,
      title: "Foco Clínico em Reabilitação",
      institution: "Implantes & Prótese Dentária",
      detail: "Atuação direcionada para reposição dentária, próteses e recuperação estética e funcional.",
    },
    {
      icon: Heart,
      title: "Atendimento Individualizado",
      institution: "Consultório no Carandá Bosque",
      detail: "Consultas dedicadas com hora marcada, garantindo acompanhamento próximo em cada etapa.",
    },
  ];

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-sand-50 border-t border-sand-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Photography */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              
              {/* Frame Accent */}
              <div
                className="absolute -inset-3 rounded-outer border border-sand-300 pointer-events-none -z-10 transform rotate-1 hidden sm:block"
                aria-hidden="true"
              />

              <div className="relative aspect-[4/5] w-full rounded-outer overflow-hidden shadow-elevated bg-sand-200 img-editorial">
                <Image
                  src={assetPath("/images/dra-cindy-honda-sobre.jpg")}
                  alt="Dra. Cindy Tiemi Honda no consultório odontológico"
                  fill
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 500px"
                  className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                />

                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-espresso-950/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-alabaster">
                  <span className="block font-display text-lg font-bold">
                    Dra. Cindy Tiemi Honda
                  </span>
                  <span className="block text-xs text-sand-200">
                    Cirurgiã-Dentista • {CLINIC_INFO.cro}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-espresso-900 leading-tight">
              Cuidado individualizado e dedicação à saúde bucal.
            </h2>

            <div className="mt-6 space-y-4 text-base sm:text-lg text-espresso-700 leading-relaxed font-normal">
              <p>
                O consultório foi planejado para oferecer uma experiência tranquila e acolhedora, com escuta atenta às suas necessidades e tempo dedicado a cada etapa do atendimento.
              </p>
              <p>
                Graduada em Odontologia pela <strong>Universidade Federal de Mato Grosso do Sul (UFMS)</strong> e inscrita no <strong>{CLINIC_INFO.cro}</strong>, a Dra. Cindy Honda concentra sua prática clínica na reabilitação oral, em procedimentos de implantes dentários, próteses e cuidados preventivos.
              </p>
              <p className="text-sm sm:text-base text-espresso-600 border-l-2 border-bronze-500 pl-4 py-1">
                Cada plano de tratamento é estruturado a partir de uma avaliação clínica minuciosa, buscando restaurar a função mastigatória, a saúde dos tecidos e o bem-estar ao sorrir.
              </p>
            </div>

            {/* Credentials List with concentric items */}
            <div className="mt-8 space-y-4">
              {credentials.map((cred, idx) => {
                const Icon = cred.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-outer bg-alabaster border border-sand-200/80 shadow-subtle flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-inner bg-sand-100 flex items-center justify-center text-bronze-600 shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-espresso-900">
                        {cred.title}
                      </h3>
                      <span className="block text-xs font-medium text-bronze-700 mt-0.5">
                        {cred.institution}
                      </span>
                      <p className="text-xs sm:text-sm text-espresso-600 mt-1 leading-normal">
                        {cred.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
