import React from 'react';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="container mx-auto px-6 py-24 sm:py-32 flex flex-col items-center justify-center text-center">
            <h1 className="font-display font-black text-7xl sm:text-9xl text-[#1a1e27] tracking-tighter select-none">
                404
            </h1>

            <h2 className="font-display font-black text-2xl sm:text-4xl text-white uppercase tracking-tight -mt-4 sm:-mt-8 mb-3">
                PAGE NOT FOUND
            </h2>

            <p className="text-[#8e95a5] text-xs sm:text-sm max-w-md mx-auto mb-8 leading-relaxed">
                The workout or page you are looking for doesn&apos;t exist or has moved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                    href="/workouts"
                    className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold text-xs uppercase px-5 py-3 rounded-lg transition-transform active:scale-95"
                >
                    Browse Workouts
                </Link>

                <Link
                    href="/my-plan"
                    className="border border-[#262c38] hover:border-zinc-500 bg-[#13161c] text-white text-xs px-5 py-3 rounded-lg transition-colors"
                >
                    My Plan
                </Link>
            </div>
        </div>
    );
}
