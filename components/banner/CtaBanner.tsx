"use client";

import {
  useState,
  useEffect,
  useRef,
  type ReactNode,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ArrowRight,
  Send,
  CheckCircle,
  Loader2,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// ============================================================================
// 1. COMPONENTE MODAL (Lógica de exibição - Sem alterações)
// ============================================================================
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

function Modal({ isOpen, onClose, children }: ModalProps) {
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscKeyDown);
    return () => document.removeEventListener("keydown", handleEscKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            ref={modalContentRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-lg mx-4 bg-white rounded-2xl shadow-2xl p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ============================================================================
// 2. COMPONENTE DO FORMULÁRIO (Refatorado para B2B e Re-estilizado)
// ============================================================================
interface SubscriptionFormProps {
  onClose: () => void;
}

type FormStatus = "form" | "loading" | "success";

function SubscriptionForm({ onClose }: SubscriptionFormProps) {
  const [status, setStatus] = useState<FormStatus>("form");
  const [whatsapp, setWhatsapp] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [showAcceptError, setShowAcceptError] = useState(false);

  // --- Estilos da Marca ---
  const brandColors = {
    text: "text-[#1b4965]",
    bg: "bg-[#1b4965]",
    hoverBg: "hover:bg-[#0f253a]", // Um azul mais escuro
    focusRing: "focus:ring-[#1b4965]/30",
    focusBorder: "focus:border-[#1b4965]",
  };

  const inputStyle = `w-full px-4 py-3 bg-slate-100 border-2 border-transparent rounded-lg placeholder:text-slate-400 focus:outline-none focus:bg-white ${brandColors.focusBorder} ${brandColors.focusRing} transition-all`;
  // --- Fim Estilos ---

  const handleWhatsappChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").substring(0, 11);
    let formattedValue = value.replace(/^(\d{2})/, "($1) ");
    if (value.length > 6) {
      formattedValue = formattedValue.replace(/(\d{5})(\d)/, "$1-$2");
    } else if (value.length > 2) {
      formattedValue = formattedValue.replace(/(\d{4})(\d)/, "$1-$2");
    }
    setWhatsapp(formattedValue);
  };

  const onSuccessRedirect = () => {
    // ATUALIZADO: Link do WhatsApp com número e mensagem B2B
    const whatsappUrl =
      "https://api.whatsapp.com/send?phone=5531973296330&text=Ol%C3%A1%21%20Acabei%20de%20enviar%20meus%20dados%20pelo%20site%20e%20tenho%20interesse%20em%20ser%20um%20Parceiro%20AprovaMinas.";
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!accepted) {
      setShowAcceptError(true);
      return;
    }
    setShowAcceptError(false);
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simula envio
    setStatus("success");
  };

  if (status === "loading") {
    return (
      <div className="flex flex-col items-center justify-center h-80 text-center">
        <Loader2 className={`h-12 w-12 ${brandColors.text} animate-spin`} />
        <p className="mt-4 text-lg font-medium text-slate-600">
          Enviando seus dados...
        </p>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center h-80 text-center">
        <CheckCircle className="h-16 w-16 text-green-500" />
        <h2 className="mt-4 text-3xl font-bold text-slate-800">
          Dados Enviados!
        </h2>
        <p className="mt-2 text-slate-600">
          Obrigado! Para agilizar, clique no botão abaixo e fale com nossa
          equipe de expansão no WhatsApp.
        </p>
        <div className="mt-8 w-full flex flex-col sm:flex-row gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3 text-slate-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
          >
            Fechar
          </button>
          <button
            onClick={onSuccessRedirect}
            className="w-full flex-1 px-6 py-3 flex items-center justify-center gap-2 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition-all"
          >
            <MessageCircle size={18} />
            <span>Conversar no WhatsApp</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-slate-800">
        Inicie sua Parceria
      </h2>
      <p className="text-slate-500 mt-2 mb-6">
        Deixe seus dados e nossa equipe de expansão entrará em contato.
      </p>
      <form onSubmit={handleSubmit} className="text-left">
        <div className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-600 mb-1"
            >
              Nome Completo <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={inputStyle}
              placeholder="Seu nome completo"
            />
          </div>
          <div>
            <label
              htmlFor="whatsapp"
              className="block text-sm font-medium text-slate-600 mb-1"
            >
              WhatsApp <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              required
              className={inputStyle}
              placeholder="(00) 00000-0000"
              value={whatsapp}
              onChange={handleWhatsappChange}
              maxLength={16}
            />
          </div>
          
          {/* CAMPO DE INTERESSE REMOVIDO - O clique no botão já define o interesse. */}
          
          <div
            className={`rounded-lg border p-4 ${
              showAcceptError && !accepted
                ? "border-red-300"
                : "border-slate-200"
            }`}
          >
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                className={`mt-1 h-4 w-4 rounded border-slate-300 ${brandColors.text} ${brandColors.focusRing}`}
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
              />
              <span className="text-sm text-slate-700">
                Li e{" "}
                <a
                  href="/politica-de-privacidade"
                  target="_blank"
                  className={`font-medium ${brandColors.text} underline underline-offset-2 hover:text-blue-500`}
                >
                  aceito a Política de Privacidade
                </a>{" "}
                e autorizo o tratamento dos meus dados para contato.
              </span>
            </label>
            {showAcceptError && !accepted && (
              <p className="mt-2 text-xs text-red-600">
                Você precisa aceitar a Política de Privacidade para enviar.
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-4 pt-8">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3 text-slate-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={!accepted}
            className={`w-full flex-1 px-6 py-3 flex items-center justify-center gap-2 rounded-lg font-bold shadow-lg transition-colors ${
              accepted
                ? `${brandColors.bg} text-white ${brandColors.hoverBg}`
                : "bg-slate-300 text-slate-500 cursor-not-allowed"
            }`}
          >
            <Send size={18} />
            <span>Enviar e Iniciar Conversa</span>
          </button>
        </div>
      </form>
    </div>
  );
}

// ============================================================================
// 3. COMPONENTE BANNER (O "Gancho" B2B - Refatorado)
// ============================================================================

export function CTABanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="bg-gradient-to-r from-yellow-300 via-[#ffcc00] to-yellow-300 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-white/30 backdrop-blur-lg p-8 md:p-12 rounded-2xl shadow-xl max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1b4965] mb-4">
              Pronto para expandir seu{" "}
              <span className="text-white">portfólio</span>?
            </h2>
            <p className="text-lg text-slate-800/80 mb-8 max-w-2xl mx-auto">
              Junte-se a uma rede de parceiros inovadores e leve sua oferta de
              cursos para o próximo nível sem investimento inicial.
            </p>
            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)} // Ação: Abrir o Modal
              className="bg-white text-[#1b4965] hover:bg-slate-50 hover:shadow-lg transition-all duration-300 py-7 px-10 text-base font-semibold rounded-lg group"
            >
              Quero ser um Parceiro
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* O Modal que será renderizado */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <SubscriptionForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
}