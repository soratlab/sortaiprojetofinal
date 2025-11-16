import React from 'react';
import { UploadIcon, BrainIcon, ChartBarIcon } from './icons';
import { ActionButton } from './ActionButton';

export const Hero: React.FC = () => (
    <section className="bg-transparent pt-32 pb-16 sm:pb-20 lg:pb-24 text-center">
        <div className="max-w-5xl mx-auto px-4">
            <ActionButton>Rodar análise grátis &rarr;</ActionButton>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-black mt-6 !leading-tight">
                Direção criativa por IA: identifique quedas de retenção e corrija na hora.
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                Análise automática de emoção, ritmo e energia, sugestões práticas em 1 minuto.
            </p>
        </div>
        <div className="max-w-5xl mx-auto px-4 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                {/* Card 1: Upload */}
                <div className="relative bg-[#E8EAF0] rounded-3xl p-6 min-h-[220px] overflow-hidden shadow-sm">
                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex justify-between items-start">
                            <h3 className="text-base font-bold text-gray-700 tracking-wider">1 - FAÇA UPLOAD</h3>
                            <UploadIcon className="w-7 h-7 text-gray-700" style={{strokeWidth: '1.5'}} />
                        </div>
                        <p className="mt-auto text-base text-gray-600">MP4 ou link.</p>
                    </div>
                </div>

                {/* Card 2: Intelligence */}
                <div className="relative bg-gradient-to-br from-[#E4F64A] to-[#a2e00b] rounded-3xl p-6 min-h-[220px] overflow-hidden shadow-lg shadow-lime-500/20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_140%,_rgba(255,255,255,0.5)_0%,_transparent_60%)]"></div>
                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex justify-between items-start">
                            <h3 className="text-base font-bold text-gray-900 tracking-wider">2 - INTELIGÊNCIA</h3>
                            <BrainIcon className="w-7 h-7 text-gray-900" />
                        </div>
                        <p className="mt-auto text-black text-base">A Sorat detecta quedas de atenção, ritmo e emoção.</p>
                    </div>
                </div>
                
                {/* Card 3: Correction */}
                <div className="relative bg-[#E8EAF0] rounded-3xl p-6 min-h-[220px] overflow-hidden text-gray-700 shadow-sm">
                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex justify-between items-start">
                            <h3 className="text-base font-bold tracking-wider">3. CORREÇÃO</h3>
                            <ChartBarIcon className="w-7 h-7" style={{strokeWidth: '1.5'}} />
                        </div>
                        <p className="mt-auto text-base">Receba visualizações e ações claras para melhorar seu vídeo.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-12">
            <ActionButton>Teste grátis &rarr;</ActionButton>
        </div>
    </section>
);