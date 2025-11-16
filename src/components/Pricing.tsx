import React from 'react';
import { CheckCircleIcon, XCircleIcon } from './icons';

type PlanFeature = string;

type PricingPlanProps = {
    name: string;
    price: string;
    priceDetails: string;
    buttonText: string;
    descriptions: string[];
    features: PlanFeature[];
    excludedFeatures?: PlanFeature[];
    isPopular?: boolean;
    isEnterprise?: boolean;
};

const PricingPlan: React.FC<PricingPlanProps> = ({ name, price, priceDetails, buttonText, descriptions, features, excludedFeatures, isPopular, isEnterprise }) => {
    const cardBaseClasses = "relative rounded-3xl p-8 flex flex-col h-full border";
    const cardClasses = isPopular
        ? `${cardBaseClasses} bg-[#2A2F1D] border-[#E4F64A]`
        : `${cardBaseClasses} bg-[#1D1D1D] border-gray-700/50`;

    return (
        <div className={cardClasses}>
            {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E4F64A] text-black text-sm font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                    Mais Popular
                </div>
            )}
            
            <h3 className={`text-2xl font-semibold flex items-baseline flex-wrap ${isPopular ? 'text-white' : 'text-[#E4F64A]'}`}>{name}{isEnterprise && <span className="text-base font-normal ml-2 whitespace-nowrap"> – {priceDetails}</span>}</h3>
            
            {!isEnterprise && (
                 <div className="flex items-baseline mt-4">
                    <p className="text-4xl font-medium text-white whitespace-nowrap">{price}</p>
                    <span className="text-lg font-normal text-[#D1D5DB] ml-1">/mês</span>
                </div>
            )}

            <a 
                href="#" 
                className={`w-full text-center text-black font-semibold py-3 rounded-full mt-6 transition-all duration-300 transform hover:-translate-y-0.5 block bg-gradient-to-r from-[#E4F64A] to-[#A2E00B] ${isEnterprise ? 'mt-8' : ''}`}>
                {buttonText}
            </a>

            <div className="mt-6 space-y-1">
                {descriptions.map((desc, i) => (
                     <p key={i} className="text-[#E4F64A] text-sm">{desc}</p>
                ))}
            </div>
            
            <div className="border-t border-gray-700/50 my-6"></div>

            <ul className="space-y-4 text-[#F3F4F6] flex-grow text-sm">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                         <CheckCircleIcon className="w-5 h-5 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            {excludedFeatures && excludedFeatures.length > 0 && (
                 <ul className="space-y-4 text-gray-500 mt-6 text-sm">
                    {excludedFeatures.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <XCircleIcon className="w-5 h-5 mr-3 flex-shrink-0" />
                            <span className="line-through">{feature}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const plansData: PricingPlanProps[] = [
    {
        name: "Starter",
        price: "R$ 59,90",
        priceDetails: "",
        buttonText: "Começar",
        descriptions: ["20 análises por mês"],
        features: [
            "Hook Score",
            "Ritmo (básico)",
            "Emoção (básico)",
            "Linha do Tempo de Retenção",
            "Hashtags sugeridas",
            "Títulos curtos",
            "Relatório rápido (mensal)",
        ],
        excludedFeatures: [
            "Comparador",
            "Mapa de Calor",
            "Sugestões visuais de cortes",
            "Reescrita de roteiro",
            "Microcopy completo"
        ]
    },
    {
        name: "Pro",
        price: "R$ 99,90",
        priceDetails: "",
        buttonText: "Assinar Pro",
        descriptions: ["60 análises por mês", "Tudo do Starter +"],
        features: [
            "Ritmo avançado",
            "Emoção avançada",
            "Comparador Antes × Depois",
            "Sugestões visuais de cortes (frame exato)",
            "Mapa de Calor (horários ideais de postagem)",
            "Reescrita de roteiro com IA",
            "Títulos, legendas e CTA otimizados",
            "Relatório quinzenal (IA)",
        ],
        isPopular: true,
    },
    {
        name: "Studio",
        price: "R$ 199,90",
        priceDetails: "",
        buttonText: "Assinar Studio",
        descriptions: ["150 análises por mês", "Tudo do Pro +"],
        features: [
            "Três usuários colaborando",
            "Pastas por cliente",
            "Exportação CSV",
            "Relatório semanal (IA)",
            "Suporte prioritário",
        ],
    },
    {
        name: "Enterprise",
        price: "",
        priceDetails: "Sob consulta",
        buttonText: "Falar com vendas",
        descriptions: ["500-10.000 análises por mês"],
        features: [
            "Tudo do Studio",
            "SLA comercial",
            "Onboarding dedicado",
            "Customizações avançadas",
        ],
        isEnterprise: true,
    }
]

export const PricingSection: React.FC = () => (
    <section className="bg-[#111111] py-20 sm:py-24 lg:py-28 overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute -top-[20rem] left-1/2 -translate-x-1/2 w-[80rem] h-[50rem] bg-[radial-gradient(circle_at_center,_#E4F64A40_0%,_transparent_40%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#E4F64A]">Escolha seu plano</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-16 items-start">
                {plansData.map(plan => <PricingPlan key={plan.name} {...plan} />)}
            </div>
             <p className="text-center text-gray-400 mt-12">Sem fidelidade. Cancele quando quiser.</p>
        </div>
    </section>
);