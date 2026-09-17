import React from "react";
import { CLINIC_INFO } from "@/lib/constants";
import { Sparkles, Activity, Layers, CheckCircle2, MessageCircle } from "lucide-react";

export default function Treatments() {
  const services = [
    {
      id: "implantes",
      icon: Activity,
      title: "Implantes Dentários",
      tag: "Reabilitação",
      description:
        "Procedimentos voltados à reposição de dentes ausentes e à recuperação da função mastigatória, planejados conforme a necessidade e a saúde bucal de cada paciente.",
    },
    {
      id: "protese",
      icon: Layers,
      title: "Próteses Dentárias e Coroas",
      tag: "Reabilitação",
      description:
        "Recuperação funcional e estética de dentes desgastados, fraturados ou ausentes, com opções de próteses fixas, sobre implantes e restaurações indiretas.",
    },
    {
      id: "estetica",
      icon: Sparkles,
      title: "Odontologia Estética",
      tag: "Estética Dental",
      description:
        "Procedimentos como restaurações estéticas e clareamento dental que priorizam a harmonia do sorriso, respeitando a anatomia natural de cada pessoa.",
    },
    {
      id: "prevencao",
      icon: CheckCircle2,
      title: "Clínica Geral e Prevenção",
      tag: "Saúde & Prevenção",
      description:
        "Consultas de rotina, profilaxia (limpeza), diagnóstico precoce e orientações preventivas para manter dentes e gengivas saudáveis ao longo do tempo.",
    },
  ];

  return (
    <section id="atendimentos" className="py-20 lg:py-28 bg-alabaster">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-espresso-900 leading-tight">
            Áreas de atuação clínica.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-espresso-600 leading-relaxed font-normal">
            Procedimentos odontológicos conduzidos com avaliação criteriosa, planejamento individualizado e foco na saúde e bem-estar de cada paciente.
          </p>
        </div>

        {/* Services List / Cards */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="p-8 sm:p-10 rounded-outer bg-sand-50/70 border border-sand-200/80 hover:border-bronze-400/80 shadow-subtle hover:shadow-soft transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="w-12 h-12 rounded-inner bg-sand-100 flex items-center justify-center text-bronze-600">
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-bronze-700 bg-sand-100/90 border border-sand-200 px-3 py-1 rounded-full">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl sm:text-3xl font-bold text-espresso-900 tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-espresso-600 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-sand-200/80 flex items-center justify-between">
                  <span className="text-xs text-espresso-500">
                    Atendimento com hora marcada
                  </span>
                  <a
                    href={CLINIC_INFO.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-espresso-900 hover:text-bronze-600 active:scale-[0.96] transition-all"
                  >
                    <span>Informações no WhatsApp</span>
                    <MessageCircle className="w-4 h-4 text-emerald-500" strokeWidth={2} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
