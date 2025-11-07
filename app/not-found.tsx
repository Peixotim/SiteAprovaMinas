"use client";

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Home, ScrollText} from "lucide-react";

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
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      <header className="absolute top-0 left-0 right-0 z-10 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="/aprovaMinas.png" 
                alt="Logo AprovaMinas"
                fill
                className="object-contain rounded-md"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#1b4965] to-blue-600 bg-clip-text text-transparent tracking-tight">
              AprovaMinas
            </span>
          </Link>
        </div>
      </header>


      <main className="flex-grow flex items-center justify-center pt-24 pb-12">
        <motion.div
          className="container mx-auto px-4 text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeIn}
            className="text-8xl md:text-9xl font-extrabold tracking-tighter mb-4"
          >
            <span className="text-[#1b4965]">4</span>
            <span className="text-[#ffcc00]">0</span>
            <span className="text-[#1b4965]">4</span>
          </motion.div>


          <motion.h1
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-[#1b4965] mb-4"
          >
            Página Não Encontrada
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-lg text-slate-600 max-w-lg mx-auto mb-10"
          >
            Parece que você pegou um caminho que não existe. Mas não se
            preocupe, podemos te guiar de volta à rota do sucesso.
          </motion.p>

          {/* Os Links Intuitivos (A parte "Intuitiva") */}
          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Ação Primária: Voltar ao Início */}
            <Button
              asChild
              size="lg"
              className="bg-[#ffcc00] text-[#1b4965] hover:bg-yellow-400 hover:shadow-lg transition-all duration-300 py-6 px-8 text-base font-semibold rounded-lg group"
            >
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Voltar ao Início
              </Link>
            </Button>

            {/* Ação Secundária: Ver o portfólio */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#1b4965] text-[#1b4965] hover:bg-blue-50 hover:text-[#1b4965] transition-all duration-300 py-6 px-8 text-base font-semibold rounded-lg group"
            >
              <Link href="/cursos">
                <ScrollText className="mr-2 h-5 w-5" />
                Ver Certificações
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </main>

      {/* 3. Footer Simples */}
      <footer className="py-6 text-center">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} AprovaMinas. Todos os direitos
          reservados.
        </p>
      </footer>
    </div>
  );
}