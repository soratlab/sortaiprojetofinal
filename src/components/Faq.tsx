import React from 'react';

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => (
    <div>
        <h4 className="inline-block bg-gradient-to-br from-[#E4F64A] to-[#A2E00B] text-black font-semibold px-4 py-2 rounded-full">{question}</h4>
        <p className="mt-3 text-gray-700">{answer}</p>
    </div>
);

export const Faq: React.FC = () => (
    <section className="py-16 sm:py-20 lg:py-24 bg-transparent">
        <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <FaqItem
                    question="A análise funciona com qualquer vídeo?"
                    answer="Sim. Reels, TikTok, Shorts e vídeos verticais até 2 minutos."
                />
                <FaqItem
                    question="Posso enviar vídeos por link?"
                    answer="Sim. Links do Instagram e TikTok são suportados."
                />
                <FaqItem
                    question="A Sorat reescreve roteiros completos?"
                    answer="Sim. Nos planos Pro e Studio, a IA gera versões alternativas com sugestões de ritmo, cortes e CTA."
                />
                <FaqItem
                    question="Vocês guardam meus vídeos?"
                    answer="Não. Processamos e excluímos automaticamente após análise."
                />
                <FaqItem
                    question="A IA indica exatamente onde a retenção cai?"
                    answer="Sim. Você recebe os segundos exatos de queda e o motivo (pausa, corte fraco, baixa energia, etc.)."
                />
                <FaqItem
                    question="Posso cancelar quando quiser?"
                    answer="Sim. O cancelamento é imediato e sem fidelidade."
                />
            </div>
        </div>
    </section>
);