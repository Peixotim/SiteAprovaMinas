"use client";

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, LifeBuoy, TrendingUp } from "lucide-react";
import Image from "next/image";


const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
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

const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// --- PROPS ATUALIZADAS ---
export function HeroSection({ openModal }: { openModal: () => void }) {
  const features = [
    {
      icon: Award,
      text: "Excelência Acadêmica",
    },
    {
      icon: LifeBuoy,
      text: "Suporte Completo ao Polo",
    },
    {
      icon: TrendingUp,
      text: "Parcerias que Transformam",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#1b4965] to-[#0f253a] text-white pt-32 pb-16 md:pb-24 overflow-hidden">
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,rgba(255,204,0,0.1),transparent_60%)] z-0"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Coluna da Esquerda: O Pitch de Vendas */}
          <div className="z-10">
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
            >
              Abra seu Polo{" "}
              <span className="text-[#ffcc00] drop-shadow-[0_0_10px_rgba(255,204,0,0.5)]">
                AprovaMinas
              </span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-white/80 mb-8 max-w-lg"
            >
              Junte-se a nós e tenha a força do{" "}
              <strong className="text-white">Grupo RJ Global</strong> e a
              plataforma da{" "}
              {/* ATUALIZEI AQUI TAMBÉM */}
              <strong className="text-white">AprovaMinas</strong> para construir
              seu negócio de sucesso.
            </motion.p>

            <motion.ul variants={fadeIn} className="space-y-4 mb-10">
              {features.map((feature) => (
                <li key={feature.text} className="flex items-center gap-3">
                  <feature.icon className="h-6 w-6 text-[#ffcc00]" />
                  <span className="text-xl font-semibold">{feature.text}</span>
                </li>
              ))}
            </motion.ul>

            {/* --- BOTÃO ATUALIZADO --- */}
            {/* Removemos o <Link> e adicionamos o onClick */}
            <motion.div variants={fadeIn}>
              <Button
                size="lg"
                onClick={openModal} // Ação: Chama a prop 'openModal'
                className="bg-[#ffcc00] text-[#1b4965] hover:bg-yellow-400 hover:shadow-lg transition-all duration-300 py-7 px-10 text-base font-semibold rounded-lg group"
              >
                Quero ser um Parceiro
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* Coluna da Direita: A Imagem */}
          <motion.div
            className="relative h-full"
            variants={slideInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image
              src="/image.webp" // Use a imagem que você baixou
              alt="Parceiro AprovaMinas de Sucesso"
              width={500}
              height={600}
              className="rounded-lg object-cover object-top h-[500px] md:h-[600px] shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}