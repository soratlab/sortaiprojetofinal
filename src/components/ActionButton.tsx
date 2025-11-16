import React from 'react';

export const ActionButton: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <a href="#" className={`inline-block bg-gradient-to-br from-[#E4F64A] to-[#A2E00B] text-black font-semibold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-lime-500/30 transition-all duration-300 transform hover:-translate-y-1 ${className}`}>
        {children}
    </a>
);