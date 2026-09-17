import React from "react";
import { CLINIC_INFO } from "@/lib/constants";
import { ShieldCheck, Instagram, ExternalLink, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso-950 text-sand-300 pt-16 pb-24 sm:pb-16 border-t border-espresso-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-espresso-900">
          
          {/* Column 1: Identity & Professional Info */}
          <div className="lg:col-span-5 space-y-4">
            <span className="block font-display text-2xl font-bold text-alabaster tracking-tight">
              Dra. Cindy Honda
            </span>
            <p className="text-xs sm:text-sm text-sand-300 leading-relaxed font-normal max-w-sm">
              Consultório Odontológico com atendimento individualizado no bairro Carandá Bosque, Campo Grande/MS.
            </p>
            
            <div className="pt-2 text-xs text-sand-300 space-y-1">
              <p className="font-medium text-sand-200">
                {CLINIC_INFO.fullName}
              </p>
              <p>Cirurgiã-Dentista • <span className="font-semibold text-bronze-400">{CLINIC_INFO.cro}</span></p>
              <p>{CLINIC_INFO.education}</p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="block text-xs font-semibold text-alabaster uppercase tracking-wider">
              Navegação
            </span>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="hover:text-bronze-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#atendimentos" className="hover:text-bronze-400 transition-colors">
                  Atendimentos
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-bronze-400 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#consultorio" className="hover:text-bronze-400 transition-colors">
                  Consultório
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-bronze-400 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-bronze-400 transition-colors">
                  Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Channels */}
          <div className="lg:col-span-4 space-y-3">
            <span className="block text-xs font-semibold text-alabaster uppercase tracking-wider">
              Contato & Consultório
            </span>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <a
                href={CLINIC_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sand-200 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>WhatsApp: {CLINIC_INFO.contact.phone}</span>
              </a>

              <p className="flex items-start gap-2 text-sand-300">
                <MapPin className="w-3.5 h-3.5 text-bronze-400 mt-0.5 shrink-0" />
                <span>{CLINIC_INFO.address.full}</span>
              </p>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={CLINIC_INFO.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-espresso-900 hover:bg-espresso-800 text-sand-200 hover:text-alabaster text-xs transition-colors"
                  aria-label="Instagram da Dra. Cindy Honda"
                >
                  <Instagram className="w-3.5 h-3.5 text-bronze-400" />
                  <span>{CLINIC_INFO.contact.instagram}</span>
                </a>

                <a
                  href={CLINIC_INFO.contact.linktreeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-espresso-900 hover:bg-espresso-800 text-sand-200 hover:text-alabaster text-xs transition-colors"
                  aria-label="Linktree da Dra. Cindy Honda"
                >
                  <ExternalLink className="w-3 h-3 text-bronze-400" />
                  <span>Linktree</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Short Legal & Ethical Disclaimer */}
        <div className="pt-8 text-[11px] sm:text-xs text-sand-400/80 space-y-3 leading-relaxed">
          <p>
            Conteúdo de caráter informativo sobre saúde bucal e atendimentos odontológicos. Procedimentos e planos de tratamento são definidos mediante avaliação clínica presencial.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-espresso-900 text-sand-400">
            <p>
              © {currentYear} Consultório Odontológico Dra. Cindy Honda. Todos os direitos reservados.
            </p>
            <p className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-bronze-500" />
              <span>Privacidade protegida conforme a LGPD</span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
