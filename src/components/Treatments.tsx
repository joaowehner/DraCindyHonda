import React from "react";
import { CLINIC_INFO } from "@/lib/constants";
import { Sparkles, Activity, Layers, CheckCircle2, MessageCircle } from "lucide-react";

export default function Treatments() {
  const services = [
    {
      id: "implantes",
      icon: Activity,
      title: "Implantodontia & Reabilitação",
      tag: "Especialidade",
      description:
        "Reposição cirúrgica de um ou mais dentes perdidos através de implantes dentários biocompatíveis. O tratamento visa restabelecer a estabilidade mastigatória, preservar a estrutura óssea e devolver a firmeza natural ao sorrir e mastigar.",
      highlights: [
        "Planejamento individualizado por especialista",
        "Preservação da estrutura óssea remanescente",
        "Conforto e segurança mastigatória semelhante aos dentes naturais",
        "Opções para casos unitários ou reabilitações completas",
      ],
      whatsappMsg: "Ol%C3%A1%2C%20Dra.%20Cindy!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20tratamento%20com%20implantes%20dent%C3%A1rios.",
    },
    {
      id: "protese",
      icon: Layers,
      title: "Prótese Dentária & Coroas",
      tag: "Especialidade",
      description:
        "Restauração e reconstrução de dentes severamente desgastados ou fraturados, bem como próteses instaladas sobre implantes. Trabalhamos com materiais de alta resistência e translucidez, como zircônia e cerâmicas puras.",
      highlights: [
        "Coroas em cerâmica pura e zircônia livre de metal",
        "Próteses fixas sobre implantes",
        "Ajuste oclusal minucioso para equilíbrio articular",
        "Acabamento personalizado para mimetizar dentes vizinhos",
      ],
      whatsappMsg: "Ol%C3%A1%2C%20Dra.%20Cindy!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20pr%C3%B3teses%20e%20coroas%20dent%C3%A1rias.",
    },
    {
      id: "estetica",
      icon: Sparkles,
      title: "Odontologia Estética & Facetas",
      tag: "Tratamento",
      description:
        "Planejamento da forma, alinhamento e proporções dos dentes para um sorriso harmônico. Priorizamos técnicas de mínima intervenção e máxima conservação do esmalte dental biológico.",
      highlights: [
        "Facetas e lentes de contato em cerâmica",
        "Planejamento guiado pela anatomia e traços faciais",
        "Preservação criteriosa da estrutura dental natural",
        "Texturização e brilho compatíveis com a idade do paciente",
      ],
      whatsappMsg: "Ol%C3%A1%2C%20Dra.%20Cindy!%20Gostaria%20de%20saber%20mais%20sobre%20facetas%20e%20est%C3%A9tica%20do%20sorriso.",
    },
    {
      id: "prevencao",
      icon: CheckCircle2,
      title: "Clínica Geral, Clareamento & Prevenção",
      tag: "Saúde & Manutenção",
      description:
        "Cuidado continuado da saúde bucal, incluindo profilaxia profunda, diagnóstico de cáries incipientes, restaurações estéticas diretas em resina e clareamento dental supervisionado com proteção gengival.",
      highlights: [
        "Profilaxia e controle de saúde gengival e periodontal",
        "Restaurações estéticas com selamento de alta precisão",
        "Clareamento dental seguro sob supervisão clínica",
        "Acompanhamento preventivo periódico",
      ],
      whatsappMsg: "Ol%C3%A1%2C%20Dra.%20Cindy!%20Gostaria%20de%20agendar%20uma%20consulta%20de%20avalia%C3%A7%C3%A3o%20e%20limpeza%20preventiva.",
    },
  ];

  return (
    <section id="especialidades" className="py-20 lg:py-28 bg-alabaster">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-espresso-900 leading-tight">
            Áreas de atuação e tratamentos especializados.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-espresso-600 leading-relaxed font-normal">
            Todos os procedimentos são conduzidos seguindo protocolos científicos atuais, com materiais biocompatíveis de referência internacional e foco permanente na saúde biológica.
          </p>
        </div>

        {/* Services List / Cards with concentric styling and clear hierarchy */}
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

                  <div className="mt-6 pt-5 border-t border-sand-200/70">
                    <span className="block text-xs font-semibold text-espresso-800 uppercase tracking-wider mb-3">
                      Destaques do tratamento:
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-espresso-700">
                      {service.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-bronze-500 mt-2 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-sand-200/80 flex items-center justify-between">
                  <span className="text-xs text-espresso-500">
                    Atendimento no Carandá Bosque
                  </span>
                  <a
                    href={`https://wa.me/5567981210010?text=${service.whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-espresso-900 hover:text-bronze-600 active:scale-[0.96] transition-all"
                  >
                    <span>Dúvidas sobre este tratamento</span>
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
