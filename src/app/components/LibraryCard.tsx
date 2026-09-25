import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ILibrary } from '@/types/libraryType';

interface ILibraryCardProps {
    library: ILibrary;
}

const LibraryCard = ({ library }: ILibraryCardProps) => {
    return (
        <Link
            href={`/workouts/${library.id}`}
            className='bg-[#111827] rounded-xl overflow-hidden block'
        >

            {/* Image */}
            <Image
                src={library.image}
                alt={library.name}
                width={740}
                height={400}
                className='w-full h-[220px] object-cover'
            />

            {/* Card Content */}
            <div className='p-5'>

                {/* Category */}
                <div className='flex gap-2 mb-3'>
                    {
                        library.muscleGroups.map((muscle, index) => (
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
                    {library.name}
                </h3>

                {/* Equipment */}
                <p className='text-[#9CA3AF] mt-2'>
                    {library.equipment}
                </p>

                {/* Stats */}
                <div className='flex justify-between mt-5 text-sm text-[#D1D5DB]'>

                    <span>
                        ⏱️ {library.duration} min
                    </span>

                    <span>
                        🔥 {library.caloriesBurned} kcal
                    </span>

                    <span>
                        ⭐ {library.rating}
                    </span>

                </div>

            </div>

        </Link>
    );
};

export default LibraryCard;