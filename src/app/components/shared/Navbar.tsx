"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '@/assets/logo.png';
import { usePlan } from '@/context/PlanContext';

const Navbar = () => {
    const pathname = usePathname();
    const { planCount, savedCount } = usePlan();
    const [isOpen, setIsOpen] = useState(false);

    const isWorkoutsActive = pathname === '/' || pathname === '/workouts' || pathname.startsWith('/workouts/');
    const isPlanActive = pathname === '/my-plan';

    return (
        <header className="sticky top-0 z-40 bg-[#0d0f12]/95 backdrop-blur-md border-b border-[#181b22]">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                
                <Link href="/" className="flex items-center gap-2.5">
                    <Image
                        src={logo}
                        alt="FitLog"
                        width={24}
                        height={24}
                        priority
                    />
                    <span className="font-display tracking-widest text-lg font-bold text-white uppercase">
                        FITLOG
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-3">
                    <Link
                        href="/workouts"
                        className={`text-xs font-semibold tracking-wide transition-all ${
                            isWorkoutsActive
                                ? "bg-[#182312] text-[#ccff00] px-4 py-1.5 rounded-full"
                                : "text-[#8e95a5] hover:text-white px-3 py-1.5"
                        }`}
                    >
                        Workouts
                    </Link>
                    <Link
                        href="/my-plan"
                        className={`text-xs font-semibold tracking-wide transition-all ${
                            isPlanActive
                                ? "bg-[#182312] text-[#ccff00] px-4 py-1.5 rounded-full"
                                : "text-[#8e95a5] hover:text-white px-3 py-1.5"
                        }`}
                    >
                        My Plan
                    </Link>
                </nav>

                <div className="flex items-center gap-5">
                    <Link href="/my-plan" className="flex items-center gap-1.5">
                        <span className="text-xs text-[#8e95a5]">Plan</span>
                        <span className="w-5 h-5 rounded-full bg-[#ccff00] text-black font-extrabold text-[11px] flex items-center justify-center">
                            {planCount}
                        </span>
                    </Link>

                    <Link href="/my-plan?tab=saved" className="flex items-center gap-1.5">
                        <span className="text-xs text-[#8e95a5]">Saved</span>
                        <span className="w-5 h-5 rounded-full border border-[#2b313e] bg-[#13161c] text-white font-semibold text-[11px] flex items-center justify-center">
                            {savedCount}
                        </span>
                    </Link>

                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-[#8e95a5] hover:text-white p-1"
                        aria-label="Toggle Menu"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-[#13161c] border-b border-[#181b22] px-6 py-4 flex flex-col gap-2">
                    <Link
                        href="/workouts"
                        onClick={() => setIsOpen(false)}
                        className={`text-xs font-semibold py-2 px-3 rounded-lg ${
                            isWorkoutsActive ? "bg-[#182312] text-[#ccff00]" : "text-[#8e95a5]"
                        }`}
                    >
                        Workouts
                    </Link>
                    <Link
                        href="/my-plan"
                        onClick={() => setIsOpen(false)}
                        className={`text-xs font-semibold py-2 px-3 rounded-lg ${
                            isPlanActive ? "bg-[#182312] text-[#ccff00]" : "text-[#8e95a5]"
                        }`}
                    >
                        My Plan
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Navbar;