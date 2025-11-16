import React from 'react';

export const Testimonials: React.FC = () => (
    <section className="py-16 sm:py-20 lg:py-24 bg-transparent">
        <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white border border-gray-200/80 rounded-3xl p-8 md:p-12 shadow-sm">
                <div className="text-center mb-12">
                    <span className="inline-block bg-[#E4F64A] text-black font-semibold px-6 py-3 rounded-full text-base">
                        Quem usa, recomenda | 1.200+ análises aplicadas em criadores, agências e marcas.
                    </span>
                </div>
                <div className="space-y-10">
                    {/* Testimonial 1 */}
                    <div className="flex items-start space-x-5">
                        <img className="w-14 h-14 rounded-full object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1639747525393-216c311b2f97?q=80&w=256&h=256&fit=crop" alt="Criador BR" />
                        <div>
                            <span className="inline-block bg-gray-200 text-gray-800 text-sm font-semibold px-4 py-1.5 rounded-full">
                                Criador BR - Moda Fitness
                            </span>
                            <blockquote className="mt-2 text-gray-800 text-lg">
                                “<span className="border-b border-gray-500 pb-px">A IA identificou o ponto exato de queda. Subi de 38% para 51% de retenção nos 5s.</span>”
                            </blockquote>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="flex items-start space-x-5">
                        <img className="w-14 h-14 rounded-full object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=80&w=256&h=256&fit=crop" alt="Social Media" />
                        <div>
                            <span className="inline-block bg-[#E4F64A] text-black text-sm font-semibold px-4 py-1.5 rounded-full">
                                Social Media - Restaurante
                            </span>
                            <blockquote className="mt-2 text-gray-800 text-lg">
                                “Economizei quase 1h por vídeo só seguindo as recomendações.”
                            </blockquote>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="flex items-start space-x-5">
                        <img className="w-14 h-14 rounded-full object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1635541739727-33153ab7a99f?q=80&w=256&h=256&fit=crop" alt="Agência Growt Mkt" />
                        <div>
                            <span className="inline-block bg-[#2D3748] text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                                Agência Growt Mkt
                            </span>
                            <blockquote className="mt-2 text-gray-800 text-lg">
                                “+20% de watch-time em uma semana. Os ajustes são precisos.”
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);