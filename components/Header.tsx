"use client";

import { Button } from "./ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/utils/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ openModal }: { openModal: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  // --- O ESTADO DO MODAL FOI REMOVIDO DAQUI ---

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, []);



  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0.6 },
        }}
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/30 shadow-lg transition-all"
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.png" 
                alt="Logo AprovaMinas"
                fill
                className="object-contain rounded-md"
              />
            </div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold bg-gradient-to-r from-[#1b4965] to-blue-600 bg-clip-text text-transparent tracking-tight"
            >
              AprovaMinas
            </motion.span>
          </Link>

          {/* NAVEGAÇÃO DESKTOP */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <motion.div key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className={`transition-colors ${
                      isActive
                        ? "text-[#1b4965]" 
                        : "text-foreground/80 hover:text-[#1b4965]"
                    }`}
                  >
                    {item.label}
                  </Link>

                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="absolute bottom-[-6px] left-0 h-[2px] w-full bg-[#1b4965] rounded-full"
                      transition={{ duration: 0.4 }}
                    />
                  )}

                  <motion.div className="absolute bottom-[-6px] left-0 h-[2px] w-0 bg-gradient-to-r from-[#1b4965] to-blue-500 group-hover:w-full transition-all duration-300 rounded-full" />
                </motion.div>
              );
            })}
          </nav>

          {/* --- BOTÃO DESKTOP ATUALIZADO --- */}
          <div className="hidden md:block">
            <Button
              onClick={openModal} // Ação: Chama a prop 'openModal'
              className="bg-[#ffcc00] text-[#1b4965] hover:bg-yellow-400 hover:shadow-lg transition-all duration-300 px-5 py-2 text-sm font-semibold shadow-md hover:scale-[1.03]"
            >
              Quero ser um Parceiro
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </Button>
        </div>

        {/* MENU MOBILE ANIMADO */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-[75%] sm:w-[50%] h-screen bg-background/95 backdrop-blur-xl shadow-2xl border-l border-border/30 flex flex-col justify-center items-center space-y-8 md:hidden"
            >
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xl font-semibold tracking-wide ${
                    pathname === item.href
                      ? "text-[#1b4965]"
                      : "text-foreground hover:text-[#1b4965] transition"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* --- BOTÃO MOBILE ATUALIZADO --- */}
              <Button
                onClick={() => {
                  openModal(); // Ação: Chama a prop 'openModal'
                  setIsMenuOpen(false); 
                }}
                className="bg-[#ffcc00] text-[#1b4965] hover:bg-yellow-400 w-3/4 py-3 text-lg font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all"
              >
                Quero ser um Parceiro
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* --- RENDERIZAÇÃO DO MODAL REMOVIDA DAQUI --- */}
    </>
  );
};

export default Header;