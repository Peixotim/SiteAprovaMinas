"use client";

import { motion, type Variants } from "framer-motion"; // ATUALIZADO: Importei o tipo 'Variants'
import { Card, CardContent } from "@/components/ui/card";
import { Activity, Users, GraduationCap } from "lucide-react"; // Ícones melhores

// Animação para os cards
const cardVariants: Variants = { // ATUALIZADO: Adicionei o tipo 'Variants'
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

export function TrustStats() {
  const stats = [
    {
      icon: Activity,
      number: "+ DE 20",
      label: "ANOS DE ATUAÇÃO",
    },
    {
      icon: Users,
      number: "+ DE 200",
      label: "PARCEIROS EDUCACIONAIS",
    },
    {
      icon: GraduationCap,
      number: "+ DE 500 MIL",
      label: "ALUNOS FORMADOS",
    },
  ];

  return (
    // O margin-top negativo "puxa" esta seção para cima, sobrepondo o Hero
    <section className="relative -mt-16 z-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={cardVariants}>
              <Card className="bg-[#1b4965] text-white border-none shadow-xl rounded-2xl">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="mb-4 bg-white/10 p-4 rounded-full">
                    <stat.icon className="h-10 w-10 text-[#ffcc00]" />
                  </div>
                  <div className="text-4xl font-extrabold text-[#ffcc00]">
                    {stat.number}
                  </div>
                  <div className="text-base font-semibold text-white/90 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}