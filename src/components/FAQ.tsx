"use client";

import React, { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { CLINIC_INFO } from "@/lib/constants";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      question: "Como funciona a primeira consulta de avaliação?",
      answer:
        "A primeira consulta é uma conversa clínica dedicada e detalhada. Avaliamos a saúde geral da sua boca, tecidos gengivais, estrutura óssea e dentes remanescentes. Se necessário, solicitamos exames de imagem complementares (como radiografias panorâmicas ou tomografias computadorizadas) para planejar com máxima segurança cada etapa do seu tratamento.",
    },
    {
      question: "Como é realizado o planejamento para colocação de implantes dentários?",
      answer:
        "O tratamento com implantes é planejado caso a caso. Analisamos a quantidade e qualidade óssea para a fixação do pino de titânio (a raiz artificial). Todo o procedimento é conduzido sob anestesia local confortável, com técnicas modernas que buscam menor invasividade e recuperação pós-operatória suave. Após a osseointegração, confeccionamos e instalamos a prótese definitiva sobre o implante.",
    },
    {
      question: "Qual a diferença entre coroas em cerâmica pura e próteses convencionais?",
      answer:
        "As cerâmicas modernas (como dissilicato de lítio e zircônia translúcida) não utilizam metal na estrutura interna. Isso elimina aquela linha escura na gengiva comum em próteses antigas e permite que a luz atravesse o dente da mesma forma que no dente natural, resultando em harmonia estética, estabilidade de cor e alta resistência biológica.",
    },
    {
      question: "O consultório atende por convênio ou somente particular?",
      answer:
        "Nosso atendimento é exclusivamente particular. Essa escolha permite dedicar o tempo necessário a cada consulta, utilizar materiais de alto padrão e personalizar o plano de tratamento sem as restrições impostas por operadoras. Quando o plano de saúde do paciente oferece modalidade de livre escolha, fornecemos a documentação e recibo necessários para a solicitação de reembolso.",
    },
    {
      question: "Como é a pontualidade e como funciona o agendamento de horários?",
      answer:
        "A pontualidade é um valor inegociável em nosso consultório. Reservamos a sala e o tempo exclusivamente para você no horário marcado. O agendamento é realizado de forma ágil e conveniente pelo WhatsApp da clínica, onde nossa equipe encontra o melhor horário para sua rotina.",
    },
    {
      question: "Onde fica localizado o consultório e como estacionar?",
      answer:
        "O consultório está situado na Rua Vitório Zeola, 1516, Sala 02, no Carandá Bosque em Campo Grande/MS. A região é nobre, arborizada e tranquila, com facilidade para estacionar diretamente em frente ao imóvel com total comodidade e segurança.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-alabaster border-t border-sand-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-espresso-900">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-base sm:text-lg text-espresso-600 font-normal">
            Esclarecimentos sobre atendimentos, procedimentos de reabilitação e funcionamento do consultório.
          </p>
        </div>

        {/* Accordion list */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-outer border border-sand-200/80 bg-sand-50/60 overflow-hidden transition-colors duration-150"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus-visible:ring-2 focus-visible:ring-bronze-500 rounded-outer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg sm:text-xl font-semibold text-espresso-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-sand-100 flex items-center justify-center text-espresso-700 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-bronze-500 text-alabaster" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" strokeWidth={2} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-espresso-600 leading-relaxed font-normal border-t border-sand-200/40 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp direct help */}
        <div className="mt-12 p-6 rounded-outer bg-sand-100/70 border border-sand-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="block font-semibold text-espresso-900 text-sm sm:text-base">
              Ainda tem alguma dúvida sobre seu caso?
            </span>
            <span className="block text-xs sm:text-sm text-espresso-600">
              Converse diretamente com nosso atendimento pelo WhatsApp.
            </span>
          </div>

          <a
            href={CLINIC_INFO.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-espresso-900 text-alabaster hover:bg-espresso-800 text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full active:scale-[0.96] transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" strokeWidth={2} />
            <span>Tirar dúvidas no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
