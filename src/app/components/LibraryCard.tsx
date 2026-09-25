import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ILibrary } from '@/types/library.type';

interface Props {
    library: ILibrary;
}

const LibraryCard = ({ library }: Props) => {
    return (
        <Link
            href={`/workouts/${library.id}`}
            className="group bg-[#13161c] rounded-xl overflow-hidden block transition-all duration-200 hover:-translate-y-1 hover:shadow-xl border border-transparent hover:border-[#1e232e]"
        >
            <div className="relative w-full h-[190px] sm:h-[210px] bg-[#1a1e27] overflow-hidden">
                <Image
                    src={library.image}
                    alt={library.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="p-4 sm:p-5">
                <div className="flex flex-wrap gap-1.5 mb-2.5">
                    {library.muscleGroups.map((muscle, index) => (
                        <span
                            key={index}
                            className="bg-[#ccff00] text-black text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg uppercase text-white tracking-wide group-hover:text-[#ccff00] transition-colors leading-snug">
                    {library.name}
                </h3>

                <p className="text-[#7a8291] text-xs mt-1">
                    {library.equipment}
                </p>

                <div className="flex items-center gap-4 mt-4 text-xs text-[#8e95a5]">
                    <span className="flex items-center gap-1">
                        <span className="text-[11px]">⏱</span>
                        <span>{library.duration} min</span>
                    </span>

                    <span className="flex items-center gap-1">
                        <span className="text-[11px]">🔥</span>
                        <span>{library.caloriesBurned} kcal</span>
                    </span>

                    <span className="flex items-center gap-1">
                        <span className="text-[11px]">⭐</span>
                        <span>{library.rating}</span>
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default LibraryCard;