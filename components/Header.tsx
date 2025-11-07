"use client";

import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/utils/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  // Controle do header no scroll
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
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image
              src="/Acelera EAD.png"
              alt="Logo Acelera EAD"
              fill
              className="object-contain rounded-md"
            />
          </div>
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent tracking-tight"
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
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>

                {/* Sub-linha animada */}
                {isActive && (
                  <motion.span
                    layoutId="underline"
                    className="absolute bottom-[-6px] left-0 h-[2px] w-full bg-primary rounded-full"
                    transition={{ duration: 0.4 }}
                  />
                )}

                {/* Efeito hover gradiente */}
                <motion.div
                  className="absolute bottom-[-6px] left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-blue-500 group-hover:w-full transition-all duration-300 rounded-full"
                />
              </motion.div>
            );
          })}
        </nav>

        {/* BOTÃO DESKTOP */}
        <div className="hidden md:block">
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2 text-sm font-semibold shadow-md hover:shadow-lg hover:scale-[1.03] transition-all"
          >
            Inscreva-se
          </Button>
        </div>

        {/* MENU MOBILE */}
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
                    ? "text-primary"
                    : "text-foreground hover:text-primary transition"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Button
              onClick={() => setIsMenuOpen(false)}
              className="bg-primary hover:bg-primary/90 w-3/4 py-3 text-lg font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all"
            >
              Inscreva-se
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
