# Consultório Odontológico Dra. Cindy Honda — Presença Digital Premium

Website institucional e de alta conversão desenvolvido para o **Consultório Odontológico Dra. Cindy Honda** (Campo Grande/MS), concebido sob direção de arte editorial, arquitetura de conversão ética e engenharia frontend de padrão agência (R$ 10.000+).

- **URL Pública:** [https://joaowehner.github.io/DraCindyHonda/](https://joaowehner.github.io/DraCindyHonda/)
- **Repositório:** [https://github.com/joaowehner/DraCindyHonda](https://github.com/joaowehner/DraCindyHonda)
- **Hospedagem / Deploy:** GitHub Pages (Static Export via GitHub Actions oficial)

---

## 1. Como Rodar o Projeto Localmente

### Pré-requisitos
- Node.js 18+ (testado e validado em Node v24.18.1)
- npm ou pnpm

### Passos de Instalação e Execução
```bash
# 1. Instalar as dependências
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev
# Acesse no navegador: http://localhost:3000

# 3. Compilar para produção
npm run build

# 4. Iniciar o servidor de produção
npm run start
```

---

## 2. Onde Editar as Informações do Site

Todas as informações centrais da clínica foram concentradas em um único arquivo de configuração para tornar manutenções futuras ágeis e à prova de falhas:

### **`src/lib/constants.ts`**
Neste arquivo você pode alterar em segundos:
- **WhatsApp e Telefone:** Números de telefone, links de disparo e mensagem pré-formatada do WhatsApp.
- **Endereço e Geolocalização:** Rua, sala, bairro, CEP, links de rota do Google Maps e Waze.
- **Nome e Registro Profissional:** Nome exibido, nome completo e número do CRO (CRO-MS 7657).
- **Especialidades e Titulação:** Lista de especialidades oficiais e instituição de formação.
- **Horários e Atendimento:** Mensagem sobre funcionamento e agendamento.
- **Redes Sociais:** Instagram (`@dra.cindyhonda`) e Linktree (`linktr.ee/dracindy`).

### **Onde Editar Textos e Seções Específicas:**
- **Hero & Chamada Principal:** `src/components/Hero.tsx`
- **Filosofia & Pilares de Cuidado:** `src/components/Philosophy.tsx`
- **Tratamentos & Serviços Detalhados:** `src/components/Treatments.tsx`
- **Biografia & Trajetória:** `src/components/About.tsx`
- **Diferenciais do Consultório:** `src/components/Experience.tsx`
- **Perguntas Frequentes (FAQ):** `src/components/FAQ.tsx`
- **Mapa e Rota:** `src/components/LocationSection.tsx`
- **Rodapé Institucional e Regulatório:** `src/components/Footer.tsx`
- **Paleta de Cores & Design Tokens:** `tailwind.config.ts` e `src/app/globals.css`

### **Onde Substituir ou Adicionar Novas Fotos:**
Todas as fotos de alta resolução estão organizadas na pasta:
- `public/images/`
  - `dra-cindy-honda-hero.jpg` (Foto principal do Hero — 1440x1919)
  - `dra-cindy-honda-sobre.jpg` (Foto da seção Sobre — 1440x1799)
  - `dra-cindy-honda-formacao-ufms.jpg` (Foto acadêmica UFMS — 1440x1799)
  - `dra-cindy-avatar.jpg` (Foto de perfil do Header e Mobile)

---

## 3. Resumo da Investigação & Fontes Pesquisadas

A concepção do projeto foi antecedida por profunda investigação de dados públicos e redes:

1. **Instagram Oficial (`@dra.cindyhonda`):**
   - Bio oficial: *"Cirurgiã - dentista | UFMS | CRO 7657 • Especialista em Implantodontia e Prótese • Campo Grande | MS"*.
   - Fotos autênticas em resolução master (1440x1919px) extraídas diretamente de publicações e ensaios oficiais.
   - Linguagem visual: Tons quentes, linho, alfaiataria bege e preta, iluminação natural suave, serenidade, sem afetação estética.
2. **Linktree Oficial (`linktr.ee/dracindy`):**
   - Confirmou link direto de agendamento: `https://wa.me/5567981210010`.
   - Confirmou endereço público: `R. Vitório Zeola, 1516 - Sala 02 - Carandá Bosque, Campo Grande`.
3. **Diários Oficiais & Editais UFMS:**
   - Confirmaram graduação pela Universidade Federal de Mato Grosso do Sul (UFMS), monitorias acadêmicas e classificação em processos seletivos de residência odontológica.
4. **Google Maps & Diretórios Locais:**
   - Confirmação de endereço comercial no Carandá Bosque.

---

## 4. Informações Confirmadas vs. Omitidas

### **Confirmadas e Utilizadas:**
- Nome: Cindy Tiemi Honda / Dra. Cindy Honda
- Registro: CRO-MS 7657
- Titulação: Cirurgiã-Dentista, Especialista em Implantodontia e Prótese Dentária
- Formação: Universidade Federal de Mato Grosso do Sul (UFMS)
- Endereço: Rua Vitório Zeola, 1516, Sala 02 — Carandá Bosque, Campo Grande/MS — CEP 79032-360
- Telefone / WhatsApp: (67) 98121-0010
- Atuação: Implantodontia, Prótese Dentária, Reabilitação Oral, Odontologia Estética, Clareamento e Prevenção.

### **Omitidas por Falta de Confirmação (Conformidade Rigorosa):**
- Depoimentos textuais de pacientes (nenhum depoimento textual público com nome confirmado foi encontrado; portanto, **não foi fabricado nenhum depoimento falso**, preservando 100% da integridade ética).
- Preços, formas de parcelamento ou promoções (vedados pelo Código de Ética Odontológica e CFO).
- Fotos de procedimentos antes/depois de terceiros (vedadas sem consentimento e contexto clínico específico).
- Equipamentos de marcas comerciais não confirmadas.

---

## 5. Arquitetura Técnica & Performance

- **Framework:** Next.js 14 (App Router) + React 18 + TypeScript
- **Estilização:** Tailwind CSS com Design Tokens semânticos baseados na skill `color-expert` (OKLCH, escala Alabaster / Sand / Espresso / Bronze)
- **Acessibilidade:** WCAG 2.1 AA (contraste superior a 5.4:1 em texto regular e 14.8:1 em títulos; foco visível para teclado; áreas de toque >= 44px)
- **Microinterações:** Princípios da skill `make-interfaces-feel-better` (raios de borda concêntricos, feedback `scale(0.96)`, transições sem `all`, scroll suave com respeito a `prefers-reduced-motion`)
- **Auditoria de Qualidade:** Validado com o skill `impeccable` (zero kickers de template, zero textos em degradê espalhafatosos, tipografia editorial balanceada).
- **SEO & Google Ads:** Schema.org `Dentist` JSON-LD estruturado no `<head>`, OpenGraph completo, URLs limpas, sem trackers intrusivos no demo.
