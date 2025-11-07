"use client";


import { useState } from 'react';

import SubscriptionForm from '@/components/Modal/SubscriptionForm';
import Modal from '@/components/Modal/modal';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { TrustStats } from "@/components/TrustStats";
import { PartnerJourney } from "@/components/PartnerJourney";

import { Contact } from "@/components/Contact";
import Attraction from '@/components/Atraction';

const Index = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white">

      <Header openModal={openModal} />

      <main>
        <div className="mt-16" />

        {/* 2. Entregamos a mesma função 'openModal' para o HeroSection */}
        <HeroSection openModal={openModal} />
        
        <TrustStats />
        <PartnerJourney />
        
        {/* 3. O CTABanner também precisa da função 'openModal' */}
  
        <Attraction/>
        <Contact />
      </main>
      <Footer />

      {/* 4. O Modal e o Formulário são renderizados aqui, na página principal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <SubscriptionForm onClose={closeModal} />
      </Modal>
    </div>
  );
};

export default Index;