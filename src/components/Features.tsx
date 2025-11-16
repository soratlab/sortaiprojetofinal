import React from 'react';
import { LightningBoltIcon, WaveformIcon, HeartIcon, ArrowPathIcon } from './icons';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="text-center group">
        <div className="inline-block bg-gradient-to-br from-[#E4F64A] to-[#A2E00B] p-4 rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-lime-500/30 group-hover:scale-105">
            {icon}
        </div>
        <h3 className="mt-4 text-xl font-bold text-black">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
    </div>
);

export const Features: React.FC = () => (
    <section className="py-16 sm:py-20 lg:py-24 bg-transparent">
        <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black">Aumente retenção. Melhore impacto</h2>
            <p className="mt-4 text-lg text-gray-600">+18% nos primeiros segundos com ajustes precisos da IA.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mt-12">
                <FeatureCard icon={<LightningBoltIcon className="w-8 h-8 text-black" />} title="Hook" description="Valida força da abertura" />
                <FeatureCard icon={<WaveformIcon className="w-8 h-8 text-black" />} title="Ritmo" description="Identifica pausas e cortes fracos" />
                <FeatureCard icon={<HeartIcon className="w-8 h-8 text-black" />} title="Emoção" description="Analisa tom e energia" />
                <FeatureCard icon={<ArrowPathIcon className="w-8 h-8 text-black" />} title="Comparador" description="Mostra evolução real entre versões" />
            </div>
        </div>
    </section>
);