import React from 'react';
import Image from 'next/image';

const getLibrary = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();

    return data;
};

const Library = async () => {

    const data = await getLibrary();

    return (
        <section id="library" className='container mx-auto my-[40px] px-4'>

            <h2 className='font-bold text-2xl'>THE LIBRARY</h2>

            <p className='text-[#9CA3AF]'>
                Twelve lifts covering every major muscle group.
            </p>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>

                {
                    data.map(workout => (
                        <div
                            key={workout.id}
                            className='bg-[#111827] rounded-xl overflow-hidden'
                        >

                            {/* Image */}
                            <Image
                                src={workout.image}
                                alt={workout.name}
                                width={740}
                                height={400}
                                className='w-full h-[220px] object-cover'
                            />


                            {/* Card Content */}
                            <div className='p-5'>

                                {/* Category */}
                                <div className='flex gap-2 mb-3'>
                                    {
                                        workout.muscleGroups.map((muscle, index) => (
                                            <span
                                                key={index}
                                                className='text-xs border border-[#ccff00] text-[#ccff00] px-3 py-1 rounded-full'
                                            >
                                                {muscle}
                                            </span>
                                        ))
                                    }
                                </div>


                                {/* Name */}
                                <h3 className='text-xl font-bold uppercase'>
                                    {workout.name}
                                </h3>


                                {/* Equipment */}
                                <p className='text-[#9CA3AF] mt-2'>
                                    {workout.equipment}
                                </p>


                                {/* Stats */}
                                <div className='flex justify-between mt-5 text-sm text-[#D1D5DB]'>

                                    <span>
                                        ⏱️ {workout.duration} min
                                    </span>

                                    <span>
                                        🔥 {workout.caloriesBurned} kcal
                                    </span>

                                    <span>
                                        ⭐ {workout.rating}
                                    </span>

                                </div>

                            </div>

                        </div>
                    ))
                }

            </div>

        </section>
    );
};

export default Library;