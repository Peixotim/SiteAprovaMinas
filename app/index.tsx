"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";
import { CTABanner } from "@/components/banner/CtaBanner";
import Attraction from "@/components/Atraction";
import { HeroSection } from "@/components/HeroSection";
import { TrustStats } from "@/components/TrustStats";
import { PartnerJourney } from "@/components/PartnerJourney";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="mt-16" />
        <HeroSection/>
        <TrustStats/>
        <PartnerJourney/>
        <Attraction />
      

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
