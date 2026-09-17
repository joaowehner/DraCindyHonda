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
        "A primeira consulta é dedicada a entender suas queixas e avaliar a saúde bucal de forma completa. A Dra. Cindy realiza o exame clínico, analisa as necessidades funcionais e estéticas e, se necessário, solicita exames complementares para estruturar um plano de tratamento claro e personalizado.",
    },
    {
      question: "Quais atendimentos são realizados no consultório?",
      answer:
        "O consultório atua com foco em reabilitação oral, implantes dentários, próteses e restaurações, além de atendimentos de clínica geral, clareamento dental e cuidados preventivos. Cada procedimento é indicado após criteriosa avaliação clínica individual.",
    },
    {
      question: "Onde fica localizado o consultório?",
      answer:
        "O consultório está localizado na Rua Vitório Zeola, 1516, Sala 02, no bairro Carandá Bosque, em Campo Grande/MS. O acesso é prático e o local oferece tranquilidade para seu atendimento com hora marcada.",
    },
    {
      question: "Como funciona o agendamento de horários?",
      answer:
        "Os agendamentos são realizados diretamente pelo WhatsApp. Basta enviar uma mensagem para consultar os horários disponíveis e programar sua consulta com tranquilidade e atenção individualizada.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-sand-50 border-t border-sand-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-espresso-900">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-base sm:text-lg text-espresso-600 font-normal">
            Esclarecimentos sobre os atendimentos e o funcionamento do consultório.
          </p>
        </div>

        {/* Accordion list */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-outer border border-sand-200/80 bg-alabaster overflow-hidden transition-colors duration-150"
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
