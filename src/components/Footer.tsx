import React from 'react';
import { LightningBoltIcon, EmailIcon, TikTokIcon, InstagramIcon } from './icons';

export const Footer: React.FC = () => (
    <footer className="bg-transparent text-gray-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <a href="#" className="text-2xl font-bold flex items-center justify-center space-x-2">
                <LightningBoltIcon className="w-5 h-5 text-[#E4F64A]"/>
                <span className="text-gray-800">sorat.ai</span>
            </a>
            <div className="flex justify-center items-center space-x-6 text-sm text-gray-800">
                <a href="#" className="hover:text-black">Termos de Uso</a>
                <span>|</span>
                <a href="#" className="hover:text-black">Política de Privacidade</a>
                <span>|</span>
                <a href="#" className="hover:text-black">Contato</a>
            </div>
            <div className="flex justify-center space-x-4">
                <a href="#" className="p-2 text-gray-800 hover:text-black transition-opacity"><EmailIcon className="w-7 h-7" /></a>
                <a href="#" className="p-2 text-gray-800 hover:text-black transition-opacity"><TikTokIcon className="w-7 h-7" /></a>
                <a href="#" className="p-2 text-gray-800 hover:text-black transition-opacity"><InstagramIcon className="w-7 h-7" /></a>
            </div>
            <p className="text-xs text-gray-500">
                © 2025 Sorat — Inteligência criativa para vídeos curtos.
                <br/>
                Sem fidelidade. Cancelamento imediato.
            </p>
        </div>
    </footer>
);