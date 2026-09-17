import React from "react";
import Image from "next/image";
import { CLINIC_INFO, assetPath } from "@/lib/constants";
import { ShieldCheck, Award, GraduationCap, CheckCircle } from "lucide-react";

export default function SocialProof() {
  const trustPillars = [
    {
      icon: ShieldCheck,
      title: "Registro Profissional Verificado",
      desc: `Inscrição ativa no Conselho Regional de Odontologia de Mato Grosso do Sul (${CLINIC_INFO.cro}). Transparência ética total.`,
    },
    {
      icon: GraduationCap,
      title: "Formação de Excelência pela UFMS",
      desc: "Graduação sólida em Odontologia pela Universidade Federal de Mato Grosso do Sul, com rigor científico comprovado.",
    },
    {
      icon: Award,
      title: "Especialista em Implantodontia & Prótese",
      desc: "Titulação com foco cirúrgico e protético para reabilitações orais funcionais, biológicas e de alta durabilidade.",
    },
    {
      icon: CheckCircle,
      title: "Atendimento 100% Personalizado",
      desc: "Sem terceirização ou múltiplos intermediários. A mesma cirurgiã-dentista acompanha você em cada detalhe.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-sand-50 border-t border-sand-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-espresso-900 leading-tight">
            Autoridade respaldada por formação acadêmica e compromisso ético.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-espresso-600 leading-relaxed font-normal">
            Em respeito ao Código de Ética Odontológica e à legislação do CFO, baseamos nossa relação na clareza de dados verificáveis e na dedicação integral a cada caso clínico.
          </p>
        </div>

        {/* 4 Trust Pillars */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-outer bg-alabaster border border-sand-200 shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-inner bg-sand-100 flex items-center justify-center text-bronze-600 mb-4">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-espresso-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-espresso-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real Visual Gallery - Academic & Clinical Moments */}
        <div className="mt-14 pt-12 border-t border-sand-200/70">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-bronze-700 font-semibold block mb-1">
                Registros Oficiais
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-espresso-900">
                Momentos da trajetória profissional
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-espresso-500 max-w-md">
              Da graduação pela UFMS ao aperfeiçoamento contínuo em congressos e congressos de Odontologia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Photo 1: Graduation UFMS */}
            <div className="group relative aspect-[3/4] rounded-outer overflow-hidden shadow-subtle bg-sand-200 img-editorial">
              <Image
                src={assetPath("/images/dra-cindy-honda-formacao-ufms.jpg")}
                alt="Dra. Cindy Honda em cadeira oficial com beca de formatura de Odontologia da UFMS"
                fill
                loading="eager"
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-alabaster">
                <span className="block font-display text-base font-bold">
                  Graduação em Odontologia
                </span>
                <span className="text-xs text-sand-200">
                  Universidade Federal de Mato Grosso do Sul (UFMS)
                </span>
              </div>
            </div>

            {/* Photo 2: Executive Blazer Portrait */}
            <div className="group relative aspect-[3/4] rounded-outer overflow-hidden shadow-subtle bg-sand-200 img-editorial">
              <Image
                src={assetPath("/images/dra-cindy-honda-sobre.jpg")}
                alt="Dra. Cindy Honda em postura executiva no consultório"
                fill
                loading="eager"
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-alabaster">
                <span className="block font-display text-base font-bold">
                  Especialista em Implantodontia
                </span>
                <span className="text-xs text-sand-200">
                  Consultório no Carandá Bosque
                </span>
              </div>
            </div>

            {/* Photo 3: Editorial Natural Portrait */}
            <div className="group relative aspect-[3/4] rounded-outer overflow-hidden shadow-subtle bg-sand-200 img-editorial">
              <Image
                src={assetPath("/images/dra-cindy-honda-hero.jpg")}
                alt="Dra. Cindy Honda, acolhimento e consulta sem pressa"
                fill
                loading="eager"
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-alabaster">
                <span className="block font-display text-base font-bold">
                  Atendimento Individualizado
                </span>
                <span className="text-xs text-sand-200">
                  Dedicação exclusiva a cada plano de tratamento
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
