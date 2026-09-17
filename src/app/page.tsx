import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Treatments from "@/components/Treatments";
import About from "@/components/About";
import Experience from "@/components/Experience";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import LocationSection from "@/components/LocationSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex flex-col">
        <Hero />
        <Philosophy />
        <Treatments />
        <About />
        <Experience />
        <SocialProof />
        <FAQ />
        <LocationSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
