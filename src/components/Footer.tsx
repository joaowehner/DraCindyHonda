import React from "react";
import Link from "next/link";
import { CLINIC_INFO } from "@/lib/constants";
import { ShieldCheck, Instagram, ExternalLink, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso-950 text-sand-300 pt-16 pb-24 sm:pb-16 border-t border-espresso-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-espresso-900">
          
          {/* Column 1: Identity & CRO */}
          <div className="lg:col-span-4 space-y-4">
            <span className="block font-display text-2xl font-bold text-alabaster tracking-tight">
              Dra. Cindy Honda
            </span>
            <p className="text-xs sm:text-sm text-sand-300 leading-relaxed font-normal">
              Consultório Odontológico dedicado à Implantodontia, Prótese Dentária e Reabilitação Oral com padrão técnico e acolhimento humano.
            </p>
            
            <div className="pt-2 text-xs text-sand-300 space-y-1">
              <p className="font-medium text-sand-200">
                Responsável Técnica: {CLINIC_INFO.fullName}
              </p>
              <p>Cirurgiã-Dentista • <span className="font-semibold text-bronze-400">{CLINIC_INFO.cro}</span></p>
              <p>{CLINIC_INFO.education}</p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
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
                <a href="#especialidades" className="hover:text-bronze-400 transition-colors">
                  Especialidades
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-bronze-400 transition-colors">
                  Sobre a Dra. Cindy
                </a>
              </li>
              <li>
                <a href="#consultorio" className="hover:text-bronze-400 transition-colors">
                  O Consultório
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

          {/* Column 3: Specialties */}
          <div className="lg:col-span-3 space-y-3">
            <span className="block text-xs font-semibold text-alabaster uppercase tracking-wider">
              Atuação Clínica
            </span>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="text-sand-300">Implantodontia & Enxertos</li>
              <li className="text-sand-300">Prótese Dentária & Reabilitação</li>
              <li className="text-sand-300">Coroas em Cerâmica Pura & Zircônia</li>
              <li className="text-sand-300">Odontologia Estética & Facetas</li>
              <li className="text-sand-300">Clareamento & Profilaxia Preventiva</li>
            </ul>
          </div>

          {/* Column 4: Contact & Channels */}
          <div className="lg:col-span-3 space-y-3">
            <span className="block text-xs font-semibold text-alabaster uppercase tracking-wider">
              Contato & Redes
            </span>
            <div className="space-y-2 text-xs sm:text-sm">
              <a
                href={CLINIC_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sand-200 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
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

        {/* Legal & Regulatory Compliance Notice */}
        <div className="pt-8 text-[11px] sm:text-xs text-sand-400/80 space-y-3 leading-relaxed">
          <p>
            <strong>Aviso de Conformidade Ética:</strong> Este website foi desenvolvido em estrita observância ao Código de Ética Odontológica e às resoluções do Conselho Federal de Odontologia (CFO), incluindo a Resolução CFO 196/2019. Seu propósito é estritamente informativo e educativo sobre as qualificações da profissional e os serviços clínicos disponíveis. As informações aqui contidas não configuram promessa de resultado e não substituem uma avaliação clínica individualizada realizada presencialmente no consultório.
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
