"use client";

// === 1. NOVOS IMPORTS ===
import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Building,
  Award,
  Mail,
  Phone,
  Clock,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Importe os componentes do Modal
import Modal from "@/components/Modal/modal"; // Ajuste o caminho se necessário
import SubscriptionForm from "@/components/Modal/SubscriptionForm"; // Ajuste o caminho se necessário

// Variantes de animação
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
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

export default function ContatoPage() {
  // === 2. NOVO ESTADO PARA O MODAL ===
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  // ------------------------------------

  // Lista de contatos secundários
  const otherContacts = [
    {
      icon: Mail,
      title: "E-mail Geral",
      value: "comercial@colgioaprovaminas.com.br",
      href: "mailto:comercial@colgioaprovaminas.com.br",
    },
    {
      icon: Phone, // Adicionei o telefone aqui também
      title: "Telefone Principal",
      value: "(31) 97327-1770",
      href: "tel:+5531973271770",
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      value: "Seg. a Sex. - 8h às 18h",
      href: "#",
    },
    {
      icon: MapPin,
      title: "Nosso Endereço",
      value: "Rua Luiz Rodrigues dos Santos, 44 - Cel. Fabriciano/MG",
      href: "https://www.google.com/maps/search/?api=1&query=Rua+Luiz+Rodrigues+dos+Santos,+44,+Coronel+Fabriciano,+MG",
    },
  ];

  return (
    // === 3. ADICIONADO FRAGMENT <> ===
    <>
      <div className="flex flex-col min-h-screen bg-white text-slate-800">
        
        {/* === 4. PROP 'openModal' ADICIONADA AO HEADER === */}
        <Header openModal={openModal} />

        <main>
          {/* === Seção 1: Herói === */}
          <motion.section
            className="bg-slate-50 py-24 mt-16 border-b border-slate-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeIn}
          >
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-[#1b4965]">
                Fale <span className="text-[#ffcc00]">Conosco</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                Seja você um futuro parceiro ou um profissional buscando sua
                certificação, nossa equipe está pronta para te atender.
              </p>
            </div>
          </motion.section>

          {/* === Seção 2: CTAs Segmentados === */}
          <motion.section
            className="py-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-[#1b4965] mb-4">
                Qual é o seu objetivo?
              </h2>
              <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-12">
                Escolha o canal de atendimento ideal para você.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                
                {/* === 5. BOTÃO "INICIAR PARCERIA" ATUALIZADO === */}
                {/* Card 1: Empreendedor (B2B) - Abre o Modal */}
                <motion.div
                  variants={fadeIn}
                  className="bg-white border border-slate-200 rounded-xl shadow-lg shadow-slate-900/5 p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:shadow-amber-400/20 hover:-translate-y-2"
                >
                  <div className="mb-4 bg-[#ffcc00]/20 p-4 rounded-full inline-block">
                    <Building className="h-10 w-10 text-[#1b4965]" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-[#1b4965]">
                    Quero ser um Parceiro
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Fale com nossa equipe de expansão e descubra como abrir seu
                    polo AprovaMinas.
                  </p>
                  <Button
                    size="lg"
                    onClick={openModal} // Ação: Abrir o modal
                    className="bg-[#ffcc00] text-[#1b4965] hover:bg-yellow-400 hover:shadow-lg transition-all duration-300 py-6 px-8 text-base font-semibold rounded-lg group"
                  >
                    {/* O <Link> foi removido daqui */}
                    Iniciar Parceria
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>

                {/* Card 2: Profissional (B2C) - Link direto WhatsApp (Correto) */}
                <motion.div
                  variants={fadeIn}
                  className="bg-white border border-slate-200 rounded-xl shadow-lg shadow-slate-900/5 p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:shadow-amber-400/20 hover:-translate-y-2"
                >
                  <div className="mb-4 bg-[#ffcc00]/20 p-4 rounded-full inline-block">
                    <Award className="h-10 w-10 text-[#1b4965]" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-[#1b4965]">
                    Sou Profissional
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Tire suas dúvidas sobre a certificação por competência e
                    como comprovar sua experiência.
                  </p>
                  <Button
                    asChild // Correto - continua como Link
                    size="lg"
                    variant="outline"
                    className="border-[#1b4965] text-[#1b4965] hover:bg-blue-50 hover:text-[#1b4965] transition-all duration-300 py-6 px-8 text-base font-semibold rounded-lg group"
                  >
                    <Link
                      href="https://wa.me/5531973271770?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20a%20Certifica%C3%A7%C3%A3o%20por%20Compet%C3%AAncia."
                      target="_blank"
                    >
                      Falar com Atendimento
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* === Seção 3: FAQ Rápido (Gerador de Confiança) === */}
          <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4 max-w-3xl">
              <motion.h2
                className="text-3xl font-bold text-center text-[#1b4965] mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeIn}
              >
                Dúvidas Frequentes
              </motion.h2>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
              >
                <Accordion type="single" collapsible className="w-full">
                  <motion.div variants={fadeIn}>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-semibold text-slate-700 hover:text-[#1b4965]">
                        A certificação por competência é legalizada pelo MEC?
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-slate-600">
                        Sim. A Certificação por Competência é amparada pela Lei
                        nº 9.394/96 (Art. 41) e segue as diretrizes do MEC. O
                        diploma técnico é emitido por instituições credenciadas
                        e registrado no SISTEC, tendo validade nacional.
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                  <motion.div variants={fadeIn}>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-lg font-semibold text-slate-700 hover:text-[#1b4965]">
                        Preciso ter CNPJ para ser um parceiro?
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-slate-600">
                        Sim. Para se tornar um polo parceiro da AprovaMinas, é
                        necessário possuir um CNPJ ativo, preferencialmente no
                        ramo de educação, consultoria ou serviços.
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                  <motion.div variants={fadeIn}>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-lg font-semibold text-slate-700 hover:text-[#1b4965]">
                        Como o profissional comprova a experiência?
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-slate-600">
                        A comprovação pode ser feita por meio de carteira de
                        trabalho (CTPS), contratos de prestação de serviço,
                        declarações de empresas ou outros documentos formais
                        que somem, no mínimo, 2 anos de atuação na área
                        desejada.
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                </Accordion>
              </motion.div>
            </div>
          </section>

          {/* === Seção 4: Mapa e Contatos Secundários (Legitimidade) === */}
          <section className="py-24">
            <div className="container mx-auto px-4">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
              >
                {/* Coluna da Esquerda: Lista de Contatos */}
                <motion.div variants={fadeIn}>
                  <h2 className="text-3xl font-bold text-[#1b4965] mb-8">
                    Nossos Canais
                  </h2>
                  <ul className="space-y-6">
                    {otherContacts.map((item) => (
                      <li key={item.title}>
                        <a
                          href={item.href}
                          target={item.href === "#" ? "_self" : "_blank"}
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 group"
                        >
                          <div className="bg-slate-100 p-3 rounded-lg group-hover:bg-[#ffcc00]/20 transition-colors">
                            <item.icon className="h-6 w-6 text-[#1b4965]" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-slate-800 group-hover:text-[#1b4965] transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-slate-600">{item.value}</p>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Coluna da Direita: Mapa */}
                <motion.div
                  variants={fadeIn}
                  className="w-full h-[400px] rounded-xl overflow-hidden shadow-2xl border border-slate-200"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.16335198889!2d-42.57116782477543!3d-20.043695980037807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaff5873976f9d3%3A0x6b8159e66c73801f!2sR.%20Luiz%20Rodrigues%20dos%20Santos%2C%2044%20-%20Todos%20os%20Santos%2C%20Coronel%20Fabriciano%20-%20MG%2C%2035170-101!5e0!3m2!1spt-BR!2sbr!4v1730953434676!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      {/* === 6. MODAL RENDERIZADO NO FINAL DA PÁGINA === */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <SubscriptionForm onClose={closeModal} />
      </Modal>
    </>
  );
}