import React from 'react';
import { UploadIcon } from './icons';
import { ActionButton } from './ActionButton';

export const FinalCta: React.FC = () => (
    <section className="bg-black text-white text-center py-20">
         <div className="max-w-4xl mx-auto px-4">
            <ActionButton>Comece sua primeira análise &rarr;</ActionButton>
            <p className="mt-6 text-[#D1D5DB]">Envie um vídeo e veja onde a atenção cai e o que melhorar.</p>
            <UploadIcon className="w-10 h-10 text-[#E4F64A] mx-auto mt-6" />
        </div>
    </section>
);