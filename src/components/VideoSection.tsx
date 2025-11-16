import React from 'react';
import { PlayButtonIcon } from './icons';

export const VideoSection: React.FC = () => (
    <section className="py-16 sm:py-20 lg:py-24 bg-transparent">
        <div className="max-w-4xl mx-auto px-4">
            <div className="aspect-video bg-[#4A4A4A] rounded-3xl flex items-center justify-center shadow-lg">
                <PlayButtonIcon />
            </div>
        </div>
    </section>
);