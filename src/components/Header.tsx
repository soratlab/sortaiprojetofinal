import React from 'react';
import { LightningBoltIcon, StarIcon } from './icons';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-sm text-[#D1D5DB] hover:text-white transition-colors">
    {children}
  </a>
);

export const Header: React.FC = () => (
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