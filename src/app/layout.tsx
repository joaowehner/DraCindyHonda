import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CLINIC_INFO } from "@/lib/constants";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FBF9F5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://joaowehner.github.io/DraCindyHonda"),
  title: "Dra. Cindy Honda | Cirurgiã-Dentista em Campo Grande - MS",
  description:
    "Consultório Odontológico Dra. Cindy Honda (CRO-MS 7657). Graduada em Odontologia pela UFMS. Reabilitação oral, próteses e implantes com atendimento individualizado no Carandá Bosque, Campo Grande/MS.",
  keywords: [
    "Dra Cindy Honda",
    "Cindy Tiemi Honda",
    "Dentista Campo Grande MS",
    "Cirurgiã-Dentista Campo Grande",
    "Implantes Dentários Campo Grande",
    "Prótese Dentária Campo Grande MS",
    "Consultório Odontológico Carandá Bosque",
    "CRO MS 7657",
    "Reabilitação Oral Campo Grande",
  ],
  authors: [{ name: "Dra. Cindy Honda" }],
  creator: "Dra. Cindy Tiemi Honda",
  publisher: "Consultório Odontológico Dra. Cindy Honda",
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  icons: {
    icon: [
      { url: "/DraCindyHonda/icon.svg", type: "image/svg+xml" },
      { url: "/DraCindyHonda/favicon.ico", sizes: "32x32" },
    ],
    shortcut: "/DraCindyHonda/favicon.ico",
    apple: "/DraCindyHonda/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://joaowehner.github.io/DraCindyHonda",
    title: "Dra. Cindy Honda | Consultório Odontológico no Carandá Bosque, Campo Grande/MS",
    description:
      "Cirurgiã-Dentista (CRO-MS 7657), graduada pela UFMS. Atendimento acolhedor e individualizado no Carandá Bosque, Campo Grande/MS.",
    siteName: "Consultório Odontológico Dra. Cindy Honda",
    images: [
      {
        url: "/DraCindyHonda/images/dra-cindy-honda-hero.jpg",
        width: 1440,
        height: 1919,
        alt: "Dra. Cindy Honda no consultório odontológico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Cindy Honda | Cirurgiã-Dentista no Carandá Bosque",
    description:
      "Cirurgiã-Dentista graduada pela UFMS (CRO-MS 7657). Atendimento com hora marcada em Campo Grande/MS.",
    images: ["https://joaowehner.github.io/DraCindyHonda/images/dra-cindy-honda-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Consultório Odontológico Dra. Cindy Honda",
    alternateName: "Dra. Cindy Honda",
    image: "https://joaowehner.github.io/DraCindyHonda/images/dra-cindy-honda-hero.jpg",
    telephone: CLINIC_INFO.contact.phone,
    url: "https://joaowehner.github.io/DraCindyHonda",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${CLINIC_INFO.address.street}, ${CLINIC_INFO.address.suite}`,
      addressLocality: CLINIC_INFO.address.city,
      addressRegion: CLINIC_INFO.address.state,
      postalCode: CLINIC_INFO.address.zip,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CLINIC_INFO.geo.latitude,
      longitude: CLINIC_INFO.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    medicalSpecialty: ["Dentistry"],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidade Federal de Mato Grosso do Sul (UFMS)",
    },
    employee: {
      "@type": "Person",
      name: CLINIC_INFO.fullName,
      jobTitle: "Cirurgiã-Dentista",
      identifier: CLINIC_INFO.cro,
    },
  };

  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-alabaster font-sans text-espresso-900 antialiased selection:bg-sand-200 selection:text-espresso-950">
        {children}
      </body>
    </html>
  );
}
