import React from 'react';

export default function Loading() {
    return (
        <div className="container mx-auto px-6 py-24 flex flex-col items-center justify-center text-center">
            <div className="w-8 h-8 border-2 border-[#ccff00] border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-sm font-semibold text-[#8e95a5]">
                Loading…
            </p>
        </div>
    );
}
