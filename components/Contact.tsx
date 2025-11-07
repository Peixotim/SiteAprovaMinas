"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { ContactCard } from "./ContactCards";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      info: "Rua Luiz Rodrigues dos Santos, 44\nTodos os Santos - Coronel Fabriciano/MG",
      href: "https://www.google.com/maps/search/?api=1&query=Luiz+Rodrigues+dos+Santos+44+Coronel+Fabriciano+MG",
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "(31) 97329-6330",
      href: "https://wa.me/5531973296330?text=Olá! Gostaria de saber mais sobre os cursos e parcerias da Acelera EAD.",
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "gerencial@colegioaceleraead.com.br",
      href: "mailto:gerencial@colegioaceleraead.com.br",
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      info: "Segunda a Sexta: 8h às 18h",
      href: "#",
    },
  ];

  return (
    <motion.section
      id="contato"
      className="relative py-24 bg-gradient-to-b from-background via-card/50 to-background/90 overflow-hidden"
      itemScope
      itemType="https://schema.org/ContactPage"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Fundo com sutil brilho */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.05),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* TÍTULO */}
        <motion.header
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            Entre em{" "}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Contato
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Estamos prontos para ajudar você a transformar seu futuro.
            Entre em contato com a equipe da{" "}
            <span className="text-primary font-medium">Aprova Minas</span> e tire
            todas as suas dúvidas sobre parcerias e cursos.
          </p>
        </motion.header>

        {/* CARDS DE CONTATO */}
        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 w-full"
          role="list"
          variants={containerVariants}
        >
          {contactInfo.map(
            (item, index) =>
              item.info && (
                <motion.li key={index} variants={itemVariants}>
                  <ContactCard
                    icon={item.icon}
                    title={item.title}
                    info={item.info}
                    href={item.href}
                  />
                </motion.li>
              )
          )}
        </motion.ul>
      </div>
    </motion.section>
  );
};

export default Contact;
