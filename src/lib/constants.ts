export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.NODE_ENV === "production" ? "/DraCindyHonda" : "");

export const assetPath = (path: string): string => {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${cleanPath}`;
};

export const CLINIC_INFO = {
  doctorName: "Dra. Cindy Honda",
  fullName: "Cindy Tiemi Honda",
  cro: "CRO-MS 7657",
  title: "Cirurgiã-Dentista | Especialista em Implantodontia e Prótese Dentária",
  specialties: [
    "Implantodontia",
    "Prótese Dentária",
    "Reabilitação Oral",
    "Odontologia Estética",
  ],
  education: "Graduada pela Universidade Federal de Mato Grosso do Sul (UFMS)",
  address: {
    street: "Rua Vitório Zeola, 1516",
    suite: "Sala 02",
    neighborhood: "Carandá Bosque",
    city: "Campo Grande",
    state: "MS",
    zip: "79032-360",
    full: "Rua Vitório Zeola, 1516, Sala 02, Carandá Bosque, Campo Grande - MS, CEP 79032-360",
    googleMapsUrl: "https://maps.google.com/?q=Rua+Vit%C3%B3rio+Zeola,+1516+-+Carand%C3%A1+Bosque,+Campo+Grande+-+MS",
    wazeUrl: "https://waze.com/ul?q=Rua+Vit%C3%B3rio+Zeola+1516+Campo+Grande+MS",
  },
  contact: {
    phone: "(67) 98121-0010",
    phoneRaw: "5567981210010",
    whatsappUrl: "https://wa.me/5567981210010?text=Ol%C3%A1%2C%20Dra.%20Cindy!%20Gostaria%20de%20solicitar%20informa%C3%A7%C3%B5es%20e%20agendar%20uma%20avalia%C3%A7%C3%A3o%20no%20consult%C3%B3rio.",
    whatsappUrlGeneral: "https://wa.me/5567981210010",
    instagram: "@dra.cindyhonda",
    instagramUrl: "https://www.instagram.com/dra.cindyhonda/",
    linktreeUrl: "https://linktr.ee/dracindy",
  },
  schedule: {
    days: "Segunda a Sexta-feira",
    hours: "Atendimento com hora marcada",
    note: "Horários dedicados e pontualidade rigorosa para seu conforto.",
  },
  geo: {
    latitude: -20.4439,
    longitude: -54.5762,
  },
};
