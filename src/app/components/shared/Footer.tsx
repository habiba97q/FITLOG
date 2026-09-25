import React from 'react';
import Image from 'next/image';
import footerlogo from '@/assets/Vector.png';

const Footer = () => {
    return (
        <footer className="bg-[#0d0f12] border-t border-[#181b22] mt-auto">
            <div className="container mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">

                {/* Left: Logo */}
                <div className="flex items-center gap-2.5">
                    <Image
                        src={footerlogo}
                        alt="FitLog brand logo"
                        width={20}
                        height={20}
                        className="object-contain"
                    />
                    <span className="text-white font-display font-bold text-base tracking-wider uppercase">
                        FITLOG
                    </span>
                </div>

                {/* Right: Copyright */}
                <p className="text-[#6B7280] text-xs text-center sm:text-right">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
};

export default Footer;
