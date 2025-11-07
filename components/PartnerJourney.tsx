"use client";

import { motion, type Variants } from "framer-motion"; // ATUALIZADO: Importei o tipo 'Variants'
import { Building, ScrollText, Award, TrendingUp } from "lucide-react";

const fadeIn: Variants = { // ATUALIZADO: Adicionei o tipo 'Variants'
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function PartnerJourney() {
  const steps = [
    {
      icon: Building,
      title: "Passo 1: Torne-se um Polo",
      description:
        "Você abre seu polo AprovaMinas. Nós fornecemos todo o suporte, marca e treinamento.",
    },
    {
      icon: ScrollText,
      title: "Passo 2: Ofereça o Portfólio",
      description:
        "Você vende as Certificações por Competência, um mercado de alta demanda e pouca concorrência.",
    },
    {
      icon: Award,
      title: "Passo 3: Transforme Vidas",
      description:
        "O profissional comprova a experiência e conquista o diploma técnico 100% legalizado.",
    },
    {
      icon: TrendingUp,
      title: "Passo 4: Lucre com Propósito",
      description:
        "Você fatura com cada certificação emitida, criando um negócio lucrativo e de impacto social.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-[#1b4965] mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
        >
          Sua Jornada para o Sucesso em{" "}
          <span className="border-b-4 border-[#ffcc00] pb-1">4 Passos</span>
        </motion.h2>
        <motion.p
          className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
        >
          Criamos um modelo de negócio simples, lucrativo e com todo o suporte
          que você precisa.
        </motion.p>

        {/* Adicionei um 'staggerChildren' ao container para animar os cards um após o outro */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Inicia a animação quando 20% estiver visível
          transition={{ staggerChildren: 0.15 }} // Cada card aparece 0.15s após o anterior
        >
          {steps.map((step) => (
            <motion.div
              key={step.title}
              className="flex flex-col items-center text-center p-6 border border-slate-200 rounded-xl shadow-lg shadow-slate-900/5 hover:shadow-xl hover:shadow-amber-400/20 hover:-translate-y-2 transition-all duration-300"
              variants={fadeIn} // Reutilizamos a mesma animação 'fadeIn'
            >
              <div className="mb-4 bg-[#ffcc00]/20 p-4 rounded-full inline-block">
                <step.icon className="h-10 w-10 text-[#1b4965]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#1b4965]">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}