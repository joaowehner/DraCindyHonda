"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CLINIC_INFO, assetPath } from "@/lib/constants";
import { Phone, MessageCircle, Menu, X, MapPin } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Atendimentos", href: "#atendimentos" },
    { name: "Sobre", href: "#sobre" },
    { name: "Consultório", href: "#consultorio" },
    { name: "Dúvidas", href: "#faq" },
    { name: "Localização", href: "#localizacao" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[padding,background-color,border-color,box-shadow] duration-200 ${
        isScrolled
          ? "bg-alabaster/95 backdrop-blur-md shadow-subtle border-b border-sand-200/60 py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Professional Monogram and Name */}
          <Link
            href="#inicio"
            className="group flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-bronze-500 rounded-lg p-1 transition-opacity"
            aria-label="Dra. Cindy Honda - Início"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-sand-300 shadow-sm transition-transform duration-200 group-hover:scale-105 shrink-0">
              <Image
                src={assetPath("/images/dra-cindy-avatar.jpg")}
                alt="Retrato de perfil Dra. Cindy Honda"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <span className="block font-display text-xl sm:text-2xl font-bold tracking-tight text-espresso-900 group-hover:text-bronze-700 transition-colors">
                Dra. Cindy Honda
              </span>
              <span className="block text-[10px] sm:text-[11px] tracking-wider uppercase text-espresso-500 font-medium">
                Cirurgiã-Dentista • {CLINIC_INFO.cro}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-espresso-700 hover:text-bronze-600 transition-colors duration-150 py-1 focus-visible:ring-2 focus-visible:ring-bronze-500 rounded"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Phone & CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${CLINIC_INFO.contact.phoneRaw}`}
              className="hidden xl:inline-flex items-center gap-1.5 text-xs text-espresso-600 hover:text-espresso-900 font-medium px-2.5 py-1.5 transition-colors whitespace-nowrap"
              title="Ligar para o consultório da Dra. Cindy Honda"
            >
              <Phone className="w-3.5 h-3.5 text-bronze-500 shrink-0" strokeWidth={1.75} />
              <span className="num-tabular">{CLINIC_INFO.contact.phone}</span>
            </a>

            <a
              href={CLINIC_INFO.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-espresso-900 text-alabaster hover:bg-espresso-800 text-xs sm:text-sm font-medium px-4 sm:px-5 py-2.5 rounded-full shadow-sm hover:shadow active:scale-[0.96] transition-transform duration-150 focus-visible:ring-2 focus-visible:ring-bronze-500 whitespace-nowrap"
              aria-label="Agendar consulta pelo WhatsApp da Dra. Cindy Honda"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" strokeWidth={2} />
              <span>Agendar Consulta</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-espresso-700 hover:text-espresso-900 hover:bg-sand-100 transition-colors focus-visible:ring-2 focus-visible:ring-bronze-500"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Fechar menu principal" : "Abrir menu principal"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" strokeWidth={1.75} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      {/* Fullscreen High-End Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[64px] bg-alabaster z-50 flex flex-col justify-between px-6 py-8 overflow-y-auto animate-in fade-in duration-150 border-t border-sand-200">
          <nav className="flex flex-col space-y-4" aria-label="Navegação mobile">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-2xl font-semibold text-espresso-900 hover:text-bronze-600 transition-colors py-2 border-b border-sand-100"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-8 border-t border-sand-200 space-y-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-espresso-600">
              <MapPin className="w-4 h-4 text-bronze-500 shrink-0" strokeWidth={1.75} />
              <span>{CLINIC_INFO.address.full}</span>
            </div>

            <a
              href={CLINIC_INFO.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2.5 bg-espresso-900 text-alabaster py-3.5 rounded-full text-sm font-semibold shadow-soft active:scale-[0.96] transition-transform"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" strokeWidth={2} />
              <span>Falar no WhatsApp</span>
            </a>

            <div className="text-center text-[11px] text-espresso-500">
              <span>{CLINIC_INFO.cro} • Dra. Cindy Tiemi Honda</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
