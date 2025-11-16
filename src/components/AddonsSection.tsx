import React from 'react';
import { BulletIcon } from './icons';

const AddonCard: React.FC<{title: string, buttonText: string, price: string, details: string[], isPopular?: boolean}> = ({ title, buttonText, price, details, isPopular }) => (
    <div className="relative bg-[#E8EAF0] rounded-3xl p-6 flex flex-col h-full shadow-sm">
        {isPopular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
                Mais Popular
            </div>
        )}
        <h3 className="text-xl font-bold text-black">{title}</h3>
        <a href="#" className="w-full text-center bg-black text-white font-semibold py-3 rounded-full mt-4 transition-transform hover:-translate-y-0.5">
            {buttonText}
        </a>
        <ul className="space-y-2 text-black/80 text-sm mt-4 flex-grow">
            <li className="flex items-start">
                <BulletIcon className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                <span className="font-medium">{price}</span>
            </li>
            {details.map((detail, i) => (
                <li key={i} className="flex items-start">
                    <BulletIcon className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                </li>
            ))}
        </ul>
    </div>
);

export const AddonsSection: React.FC = () => (
    <section className="py-20 sm:py-24 lg:py-28 bg-[#D1D3D4]">
        <div className="max-w-7xl mx-auto px-4">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
                <AddonCard 
                    title="Pacotes de Créditos" 
                    buttonText="Adicionar Créditos"
                    price="R$ 49,90 - R$ 169,90"
                    details={[
                        "1 crédito = 1 vídeo. Val: 12 meses.",
                        "20 créditos - R$ 49,90",
                        "50 créditos - R$ 99,90",
                        "100 créditos - R$ 169,90",
                    ]}
                    isPopular
                />
                 <AddonCard 
                    title="Impulso de Texto" 
                    buttonText="Ativar"
                    price="R$ 19,90"
                    details={[
                        "Até 10 entregas/mês entre roteiros curtos, títulos e legendas"
                    ]}
                />
                <AddonCard 
                    title="Relatório Pro" 
                    buttonText="Ativar relatório"
                    price="R$ 24,90"
                    details={[
                        "Versão IA simplificada: evolução de retenção, acertos da semana e próximos passos."
                    ]}
                />
                <AddonCard 
                    title="Consultoria Sorat" 
                    buttonText="Agendar"
                    price="R$ 149,90"
                    details={[
                        "45 min + plano de ação de 7 dias"
                    ]}
                />
             </div>
        </div>
    </section>
);