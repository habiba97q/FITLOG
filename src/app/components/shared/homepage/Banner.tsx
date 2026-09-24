import React from 'react';
import Image from 'next/image';
import bannerImg from '@/assets/banner.png'

const Banner = () => {
    return (
        <section className='container mx-auto py-15'>
            <div className=' grid grid-cols-2 gap-4 items-center bg-[#222630] rounded-2xl p-4'>
                <div className='space-y-4'>

                    <p className='text-[#C2F800] font-medium  text-xs '>WORKOUT LIBRARY</p>

                    <h2 className='font-bold text-4xl'>TRAIN WITH INTENT. LOG <br />EVERY SET.</h2>

                    <p className='text-[#9CA3AF]'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
                        into today's plan, and watch the week's work add up.</p>

                    <button className='btn bg-[#C2F800] border-none outline-none text-[#000000] font-bold text-xs'>BROWSE WORKOUTS</button>
                </div>
                <div className="translate-x-10">
                    <Image src={bannerImg} alt="Banner" />

                </div>
            </div>
        </section>
    );
};

export default Banner;