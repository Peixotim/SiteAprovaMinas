"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
    ArrowLeft, 
    ArrowDown, 
    ScrollText, // Ícone genérico para cursos
    Briefcase,  // Para o Profissional (Experiência)
    Award,      // Para o Diploma (Conquista)
    Building    // Para o Empreendedor (Polo)
} from "lucide-react";
import tecnicos from "./tecnico.json";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

// === 1. NOVOS IMPORTS ===
// Precisamos que esta página controle o Modal
import Modal from '@/components/Modal/modal'; // Ajuste o caminho se necessário
import SubscriptionForm from '@/components/Modal/SubscriptionForm'; // Ajuste o caminho se necessário

export default function CursosTecnicosPage() {
    // State para os cards
    const [cardsVisible, setCardsVisible] = useState(6);
    const cursosParaExibir = tecnicos.slice(0, cardsVisible);
    const temMaisCursos = tecnicos.length > cardsVisible;

    // === 2. NOVO ESTADO PARA O MODAL ===
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    // ------------------------------------

    const handleLoadMore = () => {
        setCardsVisible(prev => prev + 6); 
    };

    // Nossos "Diferenciais" - Focados no seu Modelo de Negócio
    const diferenciais = [
        {
            icon: Briefcase,
            title: "Para o Profissional",
            description: "Comprove 2+ anos de experiência na área e solicite sua aferição para obter o diploma."
        },
        {
            icon: Award,
            title: "O Diploma Técnico",
            description: "Receba um diploma reconhecido (SISTEC/MEC), 100% legal, que impulsiona sua carreira."
        },
        {
            icon: Building,
            title: "Para o Empreendedor",
            description: "Seja nosso parceiro. Ofereça essas certificações em sua cidade com um modelo de negócio validado."
        }
    ];

    return (
        // === 3. ADICIONADO FRAGMENT <> PARA ENCAPSULAR A PÁGINA E O MODAL ===
        <>
            <div className='flex flex-col min-h-screen bg-white text-slate-800'>
                
                {/* === 4. PROP 'openModal' ADICIONADA AO HEADER === */}
                <Header openModal={openModal} />

                <section className="bg-slate-50 py-24 mt-16 border-b border-slate-200">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-[#1b4965]">
                            Certificação Técnica por <span className="text-[#ffcc00]">Competência</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                            Se você já tem 2+ anos de experiência, pode obter seu diploma técnico de forma rápida e legal. Conheça as áreas.
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1b4965] mb-4">
                            Como Funciona a Certificação?
                        </h2>
                        <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-16">
                            Nosso foco é duplo: certificar profissionais experientes e criar oportunidades para empreendedores.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {diferenciais.map((item) => (
                                <div key={item.title} className="flex flex-col items-center text-center p-6">
                                    <div className="mb-4 bg-[#ffcc00]/20 p-4 rounded-full inline-block">
                                        <item.icon className="h-10 w-10 text-[#1b4965]" />
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-2 text-[#1b4965]">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* === Seção Principal: Portfólio de Certificações (A Vitrine) === */}
                <main className="flex-grow bg-slate-50 py-20 border-t border-slate-200">
                    <div className="container mx-auto px-4">

                        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1b4965] mb-16">
                            Portfólio de Certificações
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {cursosParaExibir.map((curso, index) => (
                                <Card 
                                    key={index} 
                                    className="bg-white border border-slate-200 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:shadow-amber-400/20 hover:-translate-y-2 transition-all duration-300 rounded-xl overflow-hidden"
                                >
                                    <CardHeader className="bg-[#1b4965] p-6 flex flex-row items-center gap-4">
                                        <div className="flex-shrink-0">
                                            <ScrollText className="h-8 w-8 text-[#ffcc00]" />
                                        </div>
                                        <CardTitle className="text-2xl font-bold text-white leading-tight">
                                            {curso.course}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            <span className="text-xs font-semibold uppercase px-3 py-1 bg-blue-100 text-[#1b4965] rounded-full">
                                                {curso.type}
                                            </span>
                                            <span className="text-xs font-semibold uppercase px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                                                Emissão: {curso.partner}
                                            </span>
                                        </div>
                                        
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            {curso.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Botão "Carregar mais" */}
                        {temMaisCursos && (
                            <div className="mt-16 text-center">
                                <Button
                                    size="lg"
                                    className="bg-[#ffcc00] text-[#1b4965] hover:bg-yellow-400 hover:shadow-lg transition-all duration-300 px-12 py-7 text-lg font-semibold rounded-lg group"
                                    onClick={handleLoadMore}
                                >
                                    Carregar mais Certificações
                                    <ArrowDown className="ml-3 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
                                </Button>
                            </div>
                        )}
                    </div>
                </main>

                {/* === NOVA SEÇÃO: CTA para Empreendedores === */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 text-center max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1b4965] mb-6 leading-tight">
                            Seja um Empreendedor de Sucesso
                            <br />
                            <span className="border-b-4 border-[#ffcc00] pb-1">
                                Abra um Polo AprovaMinas
                            </span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                            Leve nosso portfólio de certificações para sua cidade. Ofereça um serviço de alta demanda, baixo custo operacional e transforme a vida de profissionais na sua região. Nós damos todo o suporte.
                        </p>
                        
                        {/* === 5. BOTÃO ATUALIZADO (não é mais um Link) === */}
                        <Button
                            size="lg"
                            onClick={openModal} // Ação: Abrir o modal
                            className="bg-[#ffcc00] text-[#1b4965] hover:bg-yellow-400 hover:shadow-lg transition-all duration-300 py-7 px-10 text-base font-semibold rounded-lg flex items-center justify-center mx-auto"
                        >
                            <Building className="mr-2 h-5 w-5" />
                            Quero ser um Parceiro
                        </Button>
                    </div>
                </section>
                
                <Footer />
            </div>

            {/* === 6. MODAL RENDERIZADO NO FINAL DA PÁGINA === */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <SubscriptionForm onClose={closeModal} />
            </Modal>
        </>
    );
}