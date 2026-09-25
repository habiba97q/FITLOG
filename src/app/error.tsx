'use client';

import React from 'react';

export default function Error({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="container mx-auto px-6 py-24 flex flex-col items-center justify-center text-center">
            <h2 className="font-display font-black text-2xl text-white uppercase mb-2">
                Something went wrong
            </h2>
            <p className="text-[#8e95a5] text-xs max-w-sm mb-6">
                Failed to load data. Please check your internet connection and try again.
            </p>
            <button
                type="button"
                onClick={() => reset()}
                className="bg-[#ccff00] text-black font-bold text-xs uppercase px-5 py-2.5 rounded-lg"
            >
                Try Again
            </button>
        </div>
    );
}
