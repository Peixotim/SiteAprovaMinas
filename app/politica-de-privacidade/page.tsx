"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Header from "@/components/Header";
import {
  ChevronDown,
  FileText,
  Database,
  Share2,
  ShieldCheck,
  Cookie,
  Mail,
} from "lucide-react";
import Footer from "@/components/Footer";

// === 1. NOVOS IMPORTS ===
// Precisamos que esta página controle o Modal
import Modal from "@/components/Modal/modal"; // Ajuste o caminho se necessário
import SubscriptionForm from "@/components/Modal/SubscriptionForm"; // Ajuste o caminho se necessário

// --- DADOS DA PÁGINA (COM MARCA CORRIGIDA) ---
const privacySections = [
  {
    id: "secao1",
    title: "Quais dados coletamos?",
    icon: Database,
    summary:
      "Coletamos apenas os dados que você nos fornece diretamente, como no formulário 'Quero ser um Parceiro' (nome, WhatsApp), e dados automáticos de navegação (cookies).",
    content: (
      <>
        <p>
          Coletamos informações que você nos fornece voluntariamente ao
          interagir com nosso site, especificamente através de formulários
          para se tornar um parceiro. Os dados coletados incluem:
        </p>
        <ul>
          <li>
            <strong>Nome Completo:</strong> Para sabermos como nos dirigir a
            você.
          </li>
          <li>
            <strong>WhatsApp:</strong> Para entrarmos em contato e respondermos
            sua solicitação de parceria.
          </li>
        </ul>
        <p>
          Além disso, podemos coletar dados automaticamente através de cookies e
          tecnologias similares para garantir o funcionamento do site e analisar
          o tráfego. Veja mais na Seção 5.
        </p>
      </>
    ),
  },
  {
    id: "secao2",
    title: "Como usamos seus dados?",
    icon: FileText,
    summary:
      "Usamos seus dados exclusivamente para responder ao seu contato, gerenciar nossa relação de parceria (caso você se torne um) e, com sua permissão, enviar novidades.",
    content: (
      <>
        <p>
          A <strong>AprovaMinas</strong> utiliza os dados coletados para as
          seguintes finalidades:
        </p>
        <ul>
          <li>
            <strong>Prestação de Serviço:</strong> Responder suas dúvidas e
            fornecer informações sobre como se tornar um polo parceiro.
          </li>
          <li>
            <strong>Comunicação:</strong> Entrar em contato via WhatsApp ou
            e-mail para dar andamento à sua solicitação, conforme autorizado no
            formulário.
          </li>
          <li>
            <strong>Marketing:</strong> Enviar informações sobre novos cursos,
            atualizações e oportunidades de negócio, sempre oferecendo a opção
            de você se descadastrar (opt-out).
          </li>
          <li>
            <strong>Melhoria do Site:</strong> Analisar como nossos visitantes
            usam o site para otimizar a experiência e a performance.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "secao3",
    title: "Com quem compartilhamos?",
    icon: Share2,
    summary:
      "Não vendemos seus dados. Apenas compartilhamos com ferramentas essenciais para nosso trabalho (como a plataforma de CRM ou o WhatsApp) e se formos obrigados por lei.",
    content: (
      <>
        <p>
          Nós não vendemos ou alugamos seus dados pessoais para terceiros. O
          compartilhamento ocorre apenas nas seguintes circunstâncias:
        </p>
        <ul>
          <li>
            <strong>Provedores de Serviço:</strong> Com empresas que nos ajudam
            a operar, como serviços de hospedagem, plataformas de CRM (para
            gerenciar o contato) e ferramentas de disparo de e-mail marketing,
            como o WhatsApp Business.
          </li>
          <li>
            <strong>Obrigações Legais:</strong> Se formos intimados
            judicialmente ou para cumprir com obrigações legais ou regulatórias.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "secao4",
    title: "Seus Direitos (LGPD)",
    icon: ShieldCheck,
    summary:
      "Você tem total controle sobre seus dados. A qualquer momento, você pode pedir para ver, corrigir ou excluir suas informações de nossos sistemas.",
    content: (
      <>
        <p>
          Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você tem
          o direito de:
        </p>
        <ul>
          <li>
            <strong>Confirmar</strong> a existência de tratamento dos seus
            dados.
          </li>
          <li>
            <strong>Acessar</strong> seus dados.
          </li>
          <li>
            <strong>Corrigir</strong> dados incompletos, inexatos ou
            desatualizados.
          </li>
          <li>
            <strong>Solicitar a anonimização, bloqueio ou eliminação</strong> de
            dados desnecessários ou excessivos.
          </li>
          <li>
            <strong>Revogar o consentimento</strong> a qualquer momento.
          </li>
        </ul>
        <p>
          Para exercer seus direitos, entre em contato conosco (veja Seção 6).
        </p>
      </>
    ),
  },
  {
    id: "secao5",
    title: "Cookies",
    icon: Cookie,
    summary:
      "Usamos pequenos arquivos (cookies) para o site funcionar corretamente e para analisar como ele é usado, nos ajudando a melhorar sua experiência.",
    content: (
      <>
        <p>
          Nosso site utiliza cookies para otimizar sua navegação. Cookies são
          pequenos arquivos de texto armazenados no seu dispositivo.
        </p>
        <ul>
          <li>
            <strong>Cookies Essenciais:</strong> Necessários para o
            funcionamento básico do site (ex: segurança, login).
          </li>
          <li>
            <strong>Cookies de Análise:</strong> Nos ajudam a entender como os
            visitantes interagem com o site (ex: Google Analytics),
            permitindo-nos melhorar nossos serviços.
          </li>
        </ul>
        <p>
          Você pode gerenciar ou desabilitar os cookies através das
          configurações do seu navegador.
        </p>
      </>
    ),
  },
  {
    id: "secao6",
    title: "Fale Conosco",
    icon: Mail,
    summary:
      "Se você tiver qualquer dúvida sobre esta política ou sobre seus dados, este é o canal direto com nosso Encarregado de Proteção de Dados (DPO).",
    content: (
      <>
        <p>
          Se você tiver dúvidas, comentários ou solicitações relacionadas a esta
          Política de Privacidade ou ao tratamento de seus dados pessoais, entre
          em contato com nosso Encarregado de Proteção de Dados (DPO) através do
          e-mail:
        </p>
        <p>
          <strong>E-mail:</strong>{" "}
          <a
            href="mailto:privacidade@aprovaminas.com.br" // E-mail corrigido
            className="text-[#1b4965] hover:underline" // Cor corrigida
          >
            privacidade@aprovaminas.com.br
          </a>
        </p>
        <p>
          Reservamo-nos o direito de alterar esta política a qualquer momento.
          Quaisquer alterações serão publicadas nesta página com a data de
          atualização revisada.
        </p>
      </>
    ),
  },
];

// --- VARIANTES DE ANIMAÇÃO ---
const pageVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const accordionVariants: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
};

// --- COMPONENTE DA SEÇÃO (ITEM DO ACORDEÃO) ---
type PrivacySectionProps = {
  section: (typeof privacySections)[0];
  isOpen: boolean;
  onToggle: () => void;
};

function PrivacySection({ section, isOpen, onToggle }: PrivacySectionProps) {
  const Icon = section.icon;

  return (
    <motion.div
      variants={itemVariants}
      className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 overflow-hidden"
      whileHover={{
        y: -5,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Cabeçalho Clicável da Seção */}
      <button
        onClick={onToggle}
        className="w-full p-6 lg:p-8 flex justify-between items-start text-left"
      >
        <div className="flex items-start">
          <span className="bg-[#ffcc00]/20 text-[#1b4965] p-4 rounded-xl mr-5">
            <Icon className="h-7 w-7" />
          </span>
          <div>
            <h2 className="text-xl lg:text-2xl font-bold text-[#1b4965]">
              {section.title}
            </h2>
            <p className="mt-2 text-base lg:text-lg text-slate-600 pr-4">
              {section.summary}
            </p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown className={`h-6 w-6 text-gray-400`} />
        </motion.div>
      </button>

      {/* Conteúdo Legal (Expansível) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            variants={accordionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div
              className="prose prose-lg max-w-none text-slate-700 px-6 lg:px-8 pb-8 
                         prose-a:text-[#1b4965] hover:prose-a:text-blue-700 
                         prose-strong:text-[#1b4965] 
                         prose-li:marker:text-[#ffcc00]"
            >
              {section.content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// -------------------------------------------------------------------
// O CÓDIGO PROBLEMÁTICO FOI MOVIDO DAQUI
// -------------------------------------------------------------------

export default function PrivacyPolicyPage() {
  
  // === 2. ESTADO DO MODAL MOVIDO PARA CÁ ===
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  // ----------------------------------------

  const [openSectionId, setOpenSectionId] = useState<string | null>(
    privacySections[0].id
  );

  const handleToggle = (id: string) => {
    setOpenSectionId(openSectionId === id ? null : id);
  };

  return (
    // === 3. FRAGMENT ADICIONADO ===
    <>
      <div className="bg-slate-50 min-h-screen">
        
        {/* === 4. PROP 'openModal' PASSADA PARA O HEADER === */}
        <Header openModal={openModal} />
        
        {/* mt-16 ajustado para mb-14 que você tinha */}
        <div className="pt-16" /> 

        {/* Hero Section (com cores da marca) */}
        <motion.div
          className="bg-gradient-to-br from-[#1b4965] to-[#0f253a] text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight">
              Política de Privacidade
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
              Sua confiança é a nossa prioridade. Entenda como tratamos seus dados
              de forma clara e transparente.
            </p>
            <p className="mt-4 text-base text-white/70">
              Última atualização:{" "}
              {new Date().toLocaleDateString("pt-BR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </motion.div>

        {/* Conteúdo Principal (Acordeão) */}
        <motion.main
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 max-w-4xl"
          variants={pageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-8">
            {privacySections.map((section) => (
              <PrivacySection
                key={section.id}
                section={section}
                isOpen={openSectionId === section.id}
                onToggle={() => handleToggle(section.id)}
              />
            ))}
          </div>
        </motion.main>

        <Footer />
      </div>

      {/* === 5. MODAL RENDERIZADO NO FINAL === */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <SubscriptionForm onClose={closeModal} />
      </Modal>
    </>
  );
}