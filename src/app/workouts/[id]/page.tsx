import React from 'react';
import Image from 'next/image';
import { ILibrary } from '@/types/library.type';

interface IDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

const getLibrary = async () => {
    const res = await fetch(
        "https://api.abcz.workers.dev/api/fitlog"
    );

    const data = await res.json();

    return data;
};

const DetailsPage = async ({ params }: IDetailsPageProps) => {
    const { id } = await params;

    const data = await getLibrary();

    const library = data.find(
        (library: ILibrary) => String(library.id) === String(id)
    );

    if (!library) {
        return (
            <div className="container mx-auto px-4 py-20">
                <h2 className="text-2xl font-bold">
                    Workout not found
                </h2>
            </div>
        );
    }

    return (
        <section className="container mx-auto px-4 py-10">

            {/* Image */}
            <div className="relative w-full h-[400px]">
                <Image
                    src={library.image}
                    alt={library.name}
                    fill
                    className="object-cover rounded-xl"
                />
            </div>

            {/* Content */}
            <div className="mt-8">

                {/* Muscle Groups */}
                <div className="flex gap-2 mb-4">
                    {library.muscleGroups.map((muscle, index) => (
                        <span
                            key={index}
                            className="text-xs border border-[#ccff00] text-[#ccff00] px-3 py-1 rounded-full"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Name */}
                <h1 className="text-3xl font-bold uppercase">
                    {library.name}
                </h1>

                {/* Description */}
                <p className="text-[#9CA3AF] mt-4">
                    {library.description}
                </p>

                {/* Workout Information */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

                    <div className="bg-[#111827] p-4 rounded-lg">
                        <p className="text-[#9CA3AF] text-sm">
                            Equipment
                        </p>

                        <p className="font-bold mt-1">
                            {library.equipment}
                        </p>
                    </div>

                    <div className="bg-[#111827] p-4 rounded-lg">
                        <p className="text-[#9CA3AF] text-sm">
                            Difficulty
                        </p>

                        <p className="font-bold mt-1">
                            {library.difficulty}
                        </p>
                    </div>

                    <div className="bg-[#111827] p-4 rounded-lg">
                        <p className="text-[#9CA3AF] text-sm">
                            Sets / Reps
                        </p>

                        <p className="font-bold mt-1">
                            {library.sets} × {library.reps}
                        </p>
                    </div>

                    <div className="bg-[#111827] p-4 rounded-lg">
                        <p className="text-[#9CA3AF] text-sm">
                            Duration
                        </p>

                        <p className="font-bold mt-1">
                            {library.duration} min
                        </p>
                    </div>

                </div>

                {/* Calories & Rating */}
                <div className="flex gap-6 mt-6 text-sm">
                    <span>
                        🔥 {library.caloriesBurned} kcal
                    </span>

                    <span>
                        ⭐ {library.rating}
                    </span>
                </div>

                {/* Instructions */}
                <div className="mt-10">

                    <h2 className="text-2xl font-bold mb-5">
                        INSTRUCTIONS
                    </h2>

                    <div className="space-y-4">
                        {library.instructions.map((instruction, index) => (
                            <div
                                key={index}
                                className="flex gap-3"
                            >
                                <span className="text-[#ccff00] font-bold">
                                    {index + 1}.
                                </span>

                                <p className="text-[#D1D5DB]">
                                    {instruction}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-10">

                    <button className="bg-[#ccff00] text-black px-6 py-3 rounded-lg font-bold">
                        Add to today’s plan
                    </button>

                    <button className="border border-[#ccff00] text-[#ccff00] px-6 py-3 rounded-lg font-bold">
                        Save for later
                    </button>

                </div>

            </div>

        </section>
    );
};

export default DetailsPage;