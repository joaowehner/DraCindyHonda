"use client";

import React, { useState, useEffect } from "react";
import { CLINIC_INFO } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after user scrolls 300px
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Botão de contato rápido WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <a
        href={CLINIC_INFO.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-floating active:scale-[0.96] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
        aria-label="Iniciar conversa com o consultório da Dra. Cindy Honda no WhatsApp"
      >
        {/* Pulse beacon */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 text-white" strokeWidth={2.2} />

        {/* Hover Tooltip on desktop */}
        <span className="hidden sm:block absolute right-16 px-3.5 py-1.5 rounded-lg bg-espresso-900 text-alabaster text-xs font-medium whitespace-nowrap shadow-soft opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200">
          Agendar pelo WhatsApp
        </span>
      </a>
    </aside>
  );
}
