import React from "react";
import { Clock, ShieldCheck, HeartHandshake } from "lucide-react";

export default function Philosophy() {
  const pillars = [
    {
      icon: Clock,
      title: "Tempo dedicado e sem pressa",
      description:
        "Cada consulta é planejada com intervalo adequado para ouvir suas expectativas, avaliar detalhadamente a saúde bucal e esclarecer cada etapa do plano de tratamento.",
    },
    {
      icon: ShieldCheck,
      title: "Planejamento biomecânico criterioso",
      description:
        "Na implantodontia e na prótese, a longevidade depende de um diagnóstico preciso. Cada caso é planejado considerando oclusão, função mastigatória e saúde tecidual.",
    },
    {
      icon: HeartHandshake,
      title: "Estética que valoriza sua identidade",
      description:
        "Buscamos resultados naturais que harmonizem perfeitamente com seu rosto e sorriso. Sem dentes monocromáticos ou formatos artificiais padronizados.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-sand-50 border-y border-sand-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-espresso-900 leading-tight">
            Odontologia pensada para quem valoriza serenidade e atenção aos detalhes.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-espresso-600 leading-relaxed font-normal">
            Longe do modelo impessoal de franquias e salas de espera lotadas, nosso consultório foi concebido como um espaço reservado de cuidado integral. Aqui, você é atendido diretamente pela especialista responsável pelo seu caso.
          </p>
        </div>

        {/* 3 Pillars Grid with concentric radius and restrained borders */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-outer bg-alabaster border border-sand-200 shadow-subtle hover:shadow-soft transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-inner bg-sand-100 flex items-center justify-center text-bronze-600 group-hover:bg-bronze-500 group-hover:text-alabaster transition-colors duration-200">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-6 font-display text-xl sm:text-2xl font-semibold text-espresso-900">
                    {pillar.title}
                  </h3>

                  <p className="mt-3.5 text-sm sm:text-base text-espresso-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-sand-100 flex items-center text-xs font-semibold text-bronze-700 tracking-wide uppercase">
                  Pilar 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
