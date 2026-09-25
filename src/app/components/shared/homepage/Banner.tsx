import React from 'react';
import Image from 'next/image';
import bannerImg from '@/assets/banner.png';

const Banner = () => {
    return (
        <section className="container mx-auto px-6 pt-6 pb-4">
            <div className="bg-[#15181e] rounded-2xl p-8 sm:p-12 lg:p-14 relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    <div className="lg:col-span-7 space-y-4">
                        <p className="text-[#ccff00] text-[11px] font-bold tracking-widest uppercase">
                            WORKOUT LIBRARY
                        </p>

                        <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-5xl text-white uppercase tracking-tight leading-[1.08]">
                            TRAIN WITH INTENT. LOG <br />
                            EVERY SET.
                        </h1>

                        <p className="text-[#8e95a5] text-xs sm:text-sm leading-relaxed max-w-md">
                            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br className="hidden sm:inline" />
                            into today&apos;s plan, and watch the week&apos;s work add up.
                        </p>

                        <div className="pt-2">
                            <a
                                href="#library"
                                className="inline-flex items-center gap-2 bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-lg transition-transform active:scale-95"
                            >
                                <span>BROWSE WORKOUTS</span>
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
                        <div className="relative w-full max-w-sm sm:max-w-md">
                            <Image
                                src={bannerImg}
                                alt="Gym training"
                                priority
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;