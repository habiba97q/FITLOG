import React from 'react';
import Image from 'next/image';
import footerlogo from '@/assets/Vector.png';

const Footer = () => {
    return (
        <footer className="bg-[#090A0D] border-t border-[#1A1D24]">
            <div className="container mx-auto px-4 py-8 flex justify-between items-center">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image
                        src={footerlogo}
                        alt="FitLog"
                        width={20}
                        height={20}
                    />

                    <span className="text-white font-bold text-sm">
                        FITLOG
                    </span>
                </div>

                {/* Copyright */}
                <p className="text-[#6B7280] text-xs">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
};

export default Footer;
