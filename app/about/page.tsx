"use client";

import { motion, Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  Users,
  Target, 
  Smartphone, 
} from "lucide-react";
import studentsStudying from "@/public/assets/students-success.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MotionCard = motion(Card);

const AboutAprovaMinas = () => {
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

  const features = [
    {
      icon: Award,
      title: "Metodologia Comprovada",
      description:
        "Técnicas de estudo validadas que otimizam seu tempo e maximizam seu aprendizado para os principais concursos.",
    },
    {
      icon: Users,
      title: "Professores Especialistas",
      description:
        "Aprenda com quem realmente entende do assunto e tem experiência real em aprovações.",
    },
    {
      icon: Target,
      title: "Foco nos Concursos de MG",
      description:
        "Conteúdo 100% focado e atualizado para as bancas e editais mais relevantes de Minas Gerais.",
    },
    {
      icon: Smartphone,
      title: "Plataforma Moderna",
      description:
        "Estude onde e quando quiser com nossa plataforma EAD intuitiva, rápida e acessível de qualquer dispositivo.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      <Header />

      <main className="flex-grow overflow-x-hidden">
        <section id="sobre" className="py-24">
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
                  Transforme seu futuro com a{" "}
                  <span className="border-b-4 border-[#ffcc00] pb-1">
                    AprovaMinas
                  </span>
                </motion.h2>

                {/* PARÁGRAFO */}
                <motion.p
                  variants={fadeIn}
                  className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl"
                >
                  Somos o cursinho preparatório líder em aprovação em Minas
                  Gerais. Nossa missão é simples: fornecer a você as
                  ferramentas, o conhecimento e o apoio necessários para
                  conquistar a vaga dos seus sonhos. Com uma metodologia
                  focada e professores de ponta, seu sucesso é nossa
                  prioridade.
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
  // Ajuste fino no shadow e shadow-color
  className="bg-white border border-black/20 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:shadow-amber-400/20 hover:-translate-y-2 transition-all duration-300 rounded-xl"
>
                      <CardContent className="p-6">
                        <div className="mb-4 bg-[#ffcc00]/20 p-3 rounded-lg inline-block">
                          {/* Ícone azul no fundo amarelo claro */}
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
                    src={studentsStudying} // Mudei o nome da variável por clareza
                    alt="Alunos da AprovaMinas comemorando o sucesso"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover" // Ajustado para h-auto
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      
        <motion.section
          className="py-24 bg-slate-50 mt-16" // Fundo cinza-claro para diferenciar
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
              Pronto para ser o próximo aprovado?
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto"
            >
              Não perca tempo. Entre em contato com um de nossos consultores
              agora mesmo e descubra o plano de estudos perfeito para você.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link
                href="https://wa.me/5531973296330?text=Ol%C3%A1%C2%8C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20cursos%20da%20AprovaMinas"
                passHref
                target="_blank"
              >
                <Button
                  size="lg" // Botão maior
                  className="bg-[#ffcc00] text-[#1b4965] hover:bg-yellow-400 hover:shadow-lg transition-all duration-300 py-7 px-10 text-base font-semibold rounded-lg flex items-center justify-center mx-auto"
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  Falar com um Consultor
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutAprovaMinas;