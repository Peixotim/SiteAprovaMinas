"use client";

// === 1. NOVOS IMPORTS ===
import { useState } from 'react';
import { motion, type Variants } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Award,
  Users,
  Target,
  Smartphone,
  // --- Novos ícones para B2B ---
  Building,
  LifeBuoy,
} from "lucide-react";
import studentsStudying from "@/public/assets/students-success.jpg"; // Mantenha sua imagem
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// === 2. IMPORTS DO MODAL ===
import Modal from '@/components/Modal/modal'; // Ajuste o caminho se necessário
import SubscriptionForm from '@/components/Modal/SubscriptionForm'; // Ajuste o caminho se necessário

const MotionCard = motion(Card);

const AboutAprovaMinas = () => {
  // === 3. ESTADO DO MODAL ADICIONADO ===
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  // ------------------------------------

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  // === 4. FEATURES ATUALIZADAS PARA B2B (Foco no Parceiro) ===
  const features = [
    {
      icon: Award,
      title: "Certificação Legalizada",
      description:
        "Ofereça diplomas técnicos por competência (SISTEC/MEC), um serviço de alta demanda.",
    },
    {
      icon: Building,
      title: "Modelo de Negócio Validado",
      description:
        "Abra seu polo com baixo custo operacional e todo o nosso know-how de +20 anos de mercado.",
    },
    {
      icon: LifeBuoy,
      title: "Suporte Completo ao Polo",
      description:
        "Fornecemos treinamento, plataforma (AceleraEAD), marketing e suporte pedagógico total.",
    },
    {
      icon: Smartphone,
      title: "Plataforma Robusta",
      description:
        "Gerencie seus alunos, finanças e processos em um sistema EAD completo e intuitivo.",
    },
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen bg-white text-slate-800">
        

        <Header openModal={openModal} />

        <main className="flex-grow overflow-x-hidden">
          <section id="sobre" className="py-24 mt-16"> {/* Adicionado mt-16 para o Header fixo */}
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={staggerContainer}
                >

                  <motion.h2
                    variants={fadeIn}
                    className="text-4xl md:text-5xl font-extrabold text-[#1b4965] mb-6 leading-tight"
                  >
                    Sobre a{" "}
                    <span className="border-b-4 border-[#ffcc00] pb-1">
                      AprovaMinas
                    </span>
                  </motion.h2>

                  <motion.p
                    variants={fadeIn}
                    className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl"
                  >
                    Somos uma plataforma de expansão de polos educacionais
                    focada em Certificação por Competência. Nossa missão é
                    conectar empreendedores ao sucesso, fornecendo um modelo
                    de negócio lucrativo e todo o suporte da plataforma{" "}
                    <strong>AprovaMinas</strong> e do{" "}
                    <strong>Grupo RJ Global</strong>.
                  </motion.p>

                  <MotionCard
                    variants={fadeIn}
                    className="mb-10 bg-[#ffcc00] text-[#1b4965] border-none shadow-lg inline-block"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl font-extrabold">+20</div>
                      <div className="text-sm font-semibold uppercase tracking-wide">
                        Anos de tradição
                      </div>
                    </CardContent>
                  </MotionCard>

                  <motion.div
                    className="grid sm:grid-cols-2 gap-6"
                    variants={staggerContainer}
                  >
                    {features.map((feature, i) => (
                      <MotionCard
                        key={i}
                        variants={fadeIn}
                        className="bg-white border border-black/15 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:shadow-amber-400/20 hover:-translate-y-2 transition-all duration-300 rounded-xl"
                      >
                        <CardContent className="p-6">
                          <div className="mb-4 bg-[#ffcc00]/20 p-3 rounded-lg inline-block">
                            <feature.icon className="h-8 w-8 text-[#1b4965]" />
                          </div>
                          <h3 className="text-xl font-semibold mb-2 text-[#1b4965]">
                            {feature.title}
                          </h3>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </CardContent>
                      </MotionCard>
                    ))}
                  </motion.div>
                </motion.div>

                {/* === COLUNA DA IMAGEM === */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-slate-100">
                    <Image
                      src={studentsStudying}
                      alt="Empreendedor parceiro da AprovaMinas" // Alt text atualizado
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* === 8. SEÇÃO DE CTA ATUALIZADA PARA B2B === */}
          <motion.section
            className="py-24 bg-slate-50 mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <div className="container mx-auto px-4 text-center max-w-3xl">
              <motion.h2
                variants={fadeIn}
                className="text-3xl md:text-4xl font-bold text-[#1b4965] mb-4"
              >
                Pronto para Iniciar seu Próprio Polo?
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto"
              >
                Fale com nossa equipe de expansão e descubra como você pode
                lucrar com educação na sua cidade.
              </motion.p>
              
              {/* === 9. BOTÃO ATUALIZADO PARA ABRIR O MODAL === */}
              <motion.div variants={fadeIn}>
                <Button
                  size="lg"
                  onClick={openModal} // Ação: Abrir o modal
                  className="bg-[#ffcc00] text-[#1b4965] hover:bg-yellow-400 hover:shadow-lg transition-all duration-300 py-7 px-10 text-base font-semibold rounded-lg flex items-center justify-center mx-auto"
                >
                  <Building className="mr-2 h-5 w-5" /> {/* Ícone B2B */}
                  Quero ser um Parceiro
                </Button>
              </motion.div>
            </div>
          </motion.section>
        </main>

        <Footer />
      </div>

      {/* === 10. MODAL RENDERIZADO NO FINAL === */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <SubscriptionForm onClose={closeModal} />
      </Modal>
    </>
  );
};

export default AboutAprovaMinas;