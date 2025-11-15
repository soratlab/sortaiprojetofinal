import React from 'react';
import { PricingSection } from './components/Pricing';
import {
  ArrowPathIcon,
  BrainIcon,
  BulletIcon,
  ChartBarIcon,
  EmailIcon,
  HeartIcon,
  InstagramIcon,
  LightningBoltIcon,
  PlayButtonIcon,
  StarIcon,
  TikTokIcon,
  UploadIcon,
  WaveformIcon,
} from './components/icons';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-sm text-[#D1D5DB] hover:text-white transition-colors">
    {children}
  </a>
);

const Header: React.FC = () => (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="max-w-fit mx-auto bg-black rounded-full px-4 py-2">
        <div className="flex items-center space-x-8">
          <a href="#" className="flex items-center space-x-2 text-[#E4F64A] text-lg font-bold">
            <LightningBoltIcon className="w-4 h-4" />
            <span>sorat.ai</span>
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink href="#">Sobre</NavLink>
            <NavLink href="#">Quem somos</NavLink>
            <NavLink href="#">Funcionalidade</NavLink>
            <NavLink href="#">Planos</NavLink>
            <a href="#" className="flex items-center space-x-1.5 text-sm text-[#E4F64A] font-semibold">
              <span>Premium</span>
              <StarIcon className="w-4 h-4" />
            </a>
            <a href="#" className="bg-[#E4F64A] text-black text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-[#d1e344] transition-colors duration-300">
              Entrar
            </a>
          </nav>
        </div>
      </div>
    </header>
  );

const ActionButton: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <a href="#" className={`inline-block bg-gradient-to-br from-[#E4F64A] to-[#A2E00B] text-black font-semibold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-lime-500/30 transition-all duration-300 transform hover:-translate-y-1 ${className}`}>
        {children}
    </a>
);

const Hero: React.FC = () => (
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

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="text-center">
        <div className="inline-block bg-gradient-to-br from-[#E4F64A] to-[#A2E00B] p-4 rounded-full">
            {icon}
        </div>
        <h3 className="mt-4 text-xl font-bold text-black">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
    </div>
);

const Features: React.FC = () => (
    <section className="py-16 sm:py-20 lg:py-24 bg-transparent">
        <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-normal text-black">Aumente retenção. Melhore impacto</h2>
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

const Testimonials: React.FC = () => (
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
                        <img className="w-14 h-14 rounded-full object-cover flex-shrink-0" src="https://raw.githubusercontent.com/lovable-community/sorat-ai-landing-page/main/public/testimonial-1.jpg" alt="Criador BR" />
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
                        <img className="w-14 h-14 rounded-full object-cover flex-shrink-0" src="https://raw.githubusercontent.com/lovable-community/sorat-ai-landing-page/main/public/testimonial-2.jpg" alt="Social Media" />
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
                        <img className="w-14 h-14 rounded-full object-cover flex-shrink-0" src="https://raw.githubusercontent.com/lovable-community/sorat-ai-landing-page/main/public/testimonial-3.jpg" alt="Agência Growt Mkt" />
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


const VideoSection: React.FC = () => (
    <section className="py-16 sm:py-20 lg:py-24 bg-transparent">
        <div className="max-w-4xl mx-auto px-4">
            <div className="aspect-video bg-[#4A4A4A] rounded-3xl flex items-center justify-center shadow-lg">
                <PlayButtonIcon />
            </div>
        </div>
    </section>
);

const AddonCard: React.FC<{title: string, buttonText: string, price: string, details: string[], isPopular?: boolean}> = ({ title, buttonText, price, details, isPopular }) => (
    <div className="relative bg-white/60 border border-[#6A8109]/50 rounded-3xl p-6 flex flex-col h-full">
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

const AddonsSection: React.FC = () => (
    <section className="py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-[#D4F33D] to-[#BFE92E]">
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


const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => (
    <div>
        <h4 className="inline-block bg-gradient-to-br from-[#E4F64A] to-[#A2E00B] text-black font-semibold px-4 py-2 rounded-full">{question}</h4>
        <p className="mt-3 text-gray-700">{answer}</p>
    </div>
);

const Faq: React.FC = () => (
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

const FinalCta: React.FC = () => (
    <section className="bg-black text-white text-center py-20">
         <div className="max-w-4xl mx-auto px-4">
            <ActionButton>Comece sua primeira análise &rarr;</ActionButton>
            <p className="mt-6 text-[#D1D5DB]">Envie um vídeo e veja onde a atenção cai e o que melhorar.</p>
            <UploadIcon className="w-10 h-10 text-[#E4F64A] mx-auto mt-6" />
        </div>
    </section>
);

const Footer: React.FC = () => (
    <footer className="bg-transparent text-gray-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <a href="#" className="text-[#E4F64A] text-2xl font-bold flex items-center justify-center space-x-2">
                <LightningBoltIcon className="w-5 h-5"/>
                <span>sorat.ai</span>
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


export default function App() {
  return (
    <div className="bg-[#F7F7F7] text-gray-800">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <VideoSection />
        <PricingSection />
        <AddonsSection />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}