"use client";
import React, { useState } from "react";
import {
  Instagram,
  Music2,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import ModalTermosDeUso from "./ModalTermoUso"; // Mantenha seu import do Modal

const footerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, staggerChildren: 0.15 },
  },
};

const columnVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Footer = () => {
  const [modalAberto, setModalAberto] = useState<string | null>(null);

  const quickLinks = [
    { text: "Sobre Nós", href: "/about" },
    { text: "Cursos", href: "/cursos" },
    { text: "Parcerias", href: "#parcerias" }, 
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/aprovaminas",
      name: "Instagram",
    },
    { icon: Music2, href: "https://www.tiktok.com/", name: "TikTok" },
    { icon: Youtube, href: "https://youtube.com/", name: "YouTube" },
  ];

  // SEPARADO para melhor layout
  const contactItems = [
    { icon: Phone, lines: ["(31) 97327-1770 "], href: "tel:+5531973271770 " },
    {
      icon: Mail,
      lines: ["comercial@colegioaprovaminas.com.br "],
      href: "mailto:comercial@colegioaprovaminas.com.br",
    },
    { icon: Clock, lines: ["Seg-Sex: 8h às 18h", "Sáb: 8h às 12h"], href: "#" },
  ];

  const addressItem = {
    icon: MapPin,
    lines: [
      "Luiz Rodrigues dos Santos, 44",
      "Todos os Santos - Cel. Fabriciano/MG", // Abreviei para caber melhor
      "CEP: 35170-061",
    ],
    href: "http://googleusercontent.com/maps.google.com/2", // Link do Google Maps
  };

  const handleOpenModal = (modalType: string) => setModalAberto(modalType);
  const handleCloseModal = () => setModalAberto(null);

  return (
    <motion.footer
      className="relative overflow-hidden text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Inicia um pouco antes
      variants={footerVariants}
    >
      {/* Fundo (O seu já estava ótimo) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1b4965] via-[#14344d] to-[#0f253a]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,204,0,0.1),transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ffcc00]/50 to-transparent" />

      <div className="relative container mx-auto px-6 py-20 md:py-24">
        {/* Seção Principal - ATUALIZADO para 4 colunas no desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
          
          {/* Coluna 1: Logo e Descrição */}
          <motion.div variants={columnVariants} className="lg:col-span-1">
            <Link href="/" className="block mb-6 group">
              <Image
                src="/aprovaMinas.png" 
                alt="AprovaMinas Logo"
                width={200} // Largura maior para a logo completa
                height={77} // Proporção baseada na imagem (764x296)
                className="h-auto transition-all duration-300 group-hover:opacity-90 drop-shadow-[0_2px_5px_rgba(255,204,0,0.2)]"
              />
            </Link>
            <p className="text-white/70 leading-relaxed max-w-md">
              Transformando vidas através da educação de qualidade há mais de{" "}
              <span className="text-[#ffcc00] font-semibold">18 anos</span>.
            </p>
          </motion.div>

          {/* Coluna 2: Links Rápidos */}
          <motion.div variants={columnVariants} className="md:mt-2">
            <h3 className="text-lg font-semibold mb-5 text-[#ffcc00] uppercase tracking-wider">
              Navegação
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white hover:underline transition-colors duration-300 block"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Coluna 3: Contato */}
          <motion.div variants={columnVariants} className="md:mt-2">
            <h3 className="text-lg font-semibold mb-5 text-[#ffcc00] uppercase tracking-wider">
              Contato
            </h3>
            <ul className="space-y-4">
              {contactItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                  >
                    <div className="mt-1">
                      <item.icon className="h-5 w-5 text-[#ffcc00]/80" />
                    </div>
                    <div className="text-white/70 group-hover:text-white transition-colors duration-300">
                      {item.lines.map((line, i) => (
                        <span key={i} className="block">
                          {line}
                        </span>
                      ))}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Coluna 4: Endereço e Redes Sociais */}
          <motion.div variants={columnVariants} className="md:mt-2">
            <h3 className="text-lg font-semibold mb-5 text-[#ffcc00] uppercase tracking-wider">
              Onde Estamos
            </h3>
            <ul className="space-y-4 mb-6">
              <li>
                <a
                  href={addressItem.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <div className="mt-1">
                    <addressItem.icon className="h-5 w-5 text-[#ffcc00]/80" />
                  </div>
                  <div className="text-white/70 group-hover:text-white transition-colors duration-300">
                    {addressItem.lines.map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))}
                  </div>
                </a>
              </li>
            </ul>
            
            {/* Ícones Sociais */}
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="group w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 border border-white/10 hover:bg-[#ffcc00] hover:scale-110 hover:border-[#ffcc00] transition-all duration-300"
                >
                  {/* Ícone muda de cor no hover */}
                  <link.icon className="h-5 w-5 text-[#ffcc00] group-hover:text-[#1b4965] transition-colors duration-300" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Rodapé inferior (Sub-footer) */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-white/80">AprovaMinas</span>.
              Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/60">
              <Link
                href={"/politica-de-privacidade"}
                className="hover:text-white hover:underline transition-colors"
              >
                Política de Privacidade
              </Link>
              <button
                onClick={() => handleOpenModal("termos")}
                className="hover:text-white hover:underline transition-colors"
              >
                Termos de Uso
              </button>
              <button
                onClick={() => handleOpenModal("cookies")}
                className="hover:text-white hover:underline transition-colors"
              >
                Cookies
              </button>
            </div>
          </div>
        </div>
      </div>

      {modalAberto === "termos" && (
        <ModalTermosDeUso onClose={handleCloseModal} />
      )}
      {/* Adicione outros modais aqui se necessário */}
    </motion.footer>
  );
};

export default Footer;