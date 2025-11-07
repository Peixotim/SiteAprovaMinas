"use client";

import { motion, type Variants } from "framer-motion"; // ATUALIZADO: Importei o tipo 'Variants'
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

// Animação para os cards
const cardVariants: Variants = { // ATUALIZADO: Adicionei o tipo 'Variants'
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

const fadeIn: Variants = { // ATUALIZADO: Adicionei o tipo 'Variants'
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      lines: [
        "Rua Luiz Rodrigues dos Santos, 44",
        "Todos os Santos - Coronel Fabriciano/MG",
      ],
      href: "https://www.google.com/maps/place/R.+Luiz+Rodrigues+dos+Santos,+44+-+Todos+os+Santos,+Coronel+Fabriciano+-+MG,+35170-061", // Adicionei um link de exemplo
    },
    {
      icon: Phone,
      title: "Telefone",
      lines: ["(31) 97327-1770"],
      href: "tel:+5531973271770",
    },
    {
      icon: Mail,
      title: "E-mail",
      lines: ["comercial@colegioaprovaminas.com.br"],
      href: "mailto:comercial@colegioaprovaminas.com.br",
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      lines: ["Segunda a Sexta: 8h às 18h"],
      href: "#",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        {/* Título da Seção */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-[#1b4965] mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
        >
          Entre em <span className="text-[#ffcc00]">Contato</span>
        </motion.h2>
        <motion.p
          className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
        >
          Estamos prontos para ajudar você a transformar seu futuro. Fale com
          nossa equipe e tire todas as suas dúvidas sobre parcerias.
        </motion.p>

        {/* Grade de Cards de Contato */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
        >
          {contactInfo.map((item) => (
            <motion.div key={item.title} variants={cardVariants}>
              {/* Adicionei 'group' para poder estilizar o 'a' no hover do card */}
              <a
                href={item.href}
                target={item.href === "#" ? "_self" : "_blank"} // Não abre nova aba se o link for '#'
                rel="noopener noreferrer"
                className="group"
              >
                <Card
                  // Efeito de hover consistente com o resto do site
                  className="h-full bg-white border border-slate-200 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:shadow-amber-400/20 hover:-translate-y-2 transition-all duration-300 rounded-xl overflow-hidden p-6"
                >
                  <CardContent className="p-0 flex flex-col items-center text-center md:items-start md:text-left">
                    <div className="mb-4 bg-[#ffcc00]/20 p-3 rounded-full inline-block transition-transform duration-300 group-hover:scale-110">
                      <item.icon className="h-8 w-8 text-[#1b4965]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-[#1b4965] transition-colors duration-300 group-hover:text-blue-800">
                      {item.title}
                    </h3>
                    <div className="text-slate-600 leading-relaxed text-sm">
                      {item.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}