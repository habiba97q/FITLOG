"use client";

import React, { useEffect, useState, use } from 'react';
import Image from 'next/image';
import { usePlan } from '@/context/PlanContext';
import { ILibrary } from '@/types/library.type';

export default function DetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const id = resolvedParams.id;
    const [workout, setWorkout] = useState<ILibrary | null>(null);
    const [loading, setLoading] = useState(true);
    const { addToPlan, addToSaved } = usePlan();

    useEffect(() => {
        fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data && data.id) {
                    setWorkout(data);
                }
                setLoading(false);
            })
            .catch(() => {
                fetch('https://api.abcz.workers.dev/api/fitlog')
                    .then((res) => res.json())
                    .then((list: ILibrary[]) => {
                        const item = list.find((w) => String(w.id) === String(id));
                        if (item) setWorkout(item);
                        setLoading(false);
                    })
                    .catch(() => {
                        setLoading(false);
                    });
            });
    }, [id]);

    if (loading) {
        return (
            <div className="container mx-auto px-6 py-20 text-center text-sm text-[#8e95a5]">
                Loading workout…
            </div>
        );
    }

    if (!workout) {
        return (
            <div className="container mx-auto px-6 py-20 text-center">
                <h2 className="text-xl font-bold text-white">Workout not found</h2>
            </div>
        );
    }

    return (
        <section className="container mx-auto px-6 py-8 md:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                <div className="lg:col-span-6 w-full">
                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#13161c]">
                        <Image
                            src={workout.image}
                            alt={workout.name}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="lg:col-span-6 space-y-5">
                    <div>
                        <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight leading-tight">
                            {workout.name}
                        </h1>

                        <p className="text-[#8e95a5] text-xs sm:text-sm mt-2 leading-relaxed">
                            {workout.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {workout.muscleGroups.map((muscle, index) => (
                                <span
                                    key={index}
                                    className="bg-[#ccff00] text-black text-xs font-bold px-3 py-1 rounded-full"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#13161c] rounded-2xl p-5 border border-[#1b1f28] space-y-2.5">
                        <div className="flex justify-between items-center text-xs pb-2 border-b border-[#1c202a]">
                            <span className="text-[#7a8291] uppercase tracking-wider font-semibold">EQUIPMENT</span>
                            <span className="text-white font-medium">{workout.equipment}</span>
                        </div>

                        <div className="flex justify-between items-center text-xs pb-2 border-b border-[#1c202a]">
                            <span className="text-[#7a8291] uppercase tracking-wider font-semibold">DIFFICULTY</span>
                            <span className="text-white font-medium">{workout.difficulty}</span>
                        </div>

                        <div className="flex justify-between items-center text-xs pb-2 border-b border-[#1c202a]">
                            <span className="text-[#7a8291] uppercase tracking-wider font-semibold">SETS</span>
                            <span className="text-white font-medium">{workout.sets}</span>
                        </div>

                        <div className="flex justify-between items-center text-xs pb-2 border-b border-[#1c202a]">
                            <span className="text-[#7a8291] uppercase tracking-wider font-semibold">REPS</span>
                            <span className="text-white font-medium">{workout.reps}</span>
                        </div>

                        <div className="flex justify-between items-center text-xs pb-2 border-b border-[#1c202a]">
                            <span className="text-[#7a8291] uppercase tracking-wider font-semibold">DURATION</span>
                            <span className="text-white font-medium">{workout.duration} min</span>
                        </div>

                        <div className="flex justify-between items-center text-xs pb-2 border-b border-[#1c202a]">
                            <span className="text-[#7a8291] uppercase tracking-wider font-semibold">CALORIES</span>
                            <span className="text-white font-medium">{workout.caloriesBurned} kcal</span>
                        </div>

                        <div className="flex justify-between items-center text-xs">
                            <span className="text-[#7a8291] uppercase tracking-wider font-semibold">RATING</span>
                            <span className="text-white font-medium">{workout.rating}</span>
                        </div>
                    </div>

                    <div className="pt-1">
                        <h2 className="text-xs font-bold uppercase tracking-wider text-white mb-2.5">
                            INSTRUCTIONS
                        </h2>

                        <ol className="space-y-2 text-xs text-[#8e95a5] leading-relaxed list-none">
                            {workout.instructions.map((step, index) => (
                                <li key={index} className="flex gap-2">
                                    <span className="text-[#8e95a5] font-medium shrink-0">
                                        {index + 1}.
                                    </span>
                                    <span>{step}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-3">
                        <button
                            type="button"
                            onClick={() => addToPlan(workout)}
                            className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold text-xs px-5 py-3 rounded-lg flex items-center gap-2 transition-transform active:scale-95"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>Add to today&apos;s plan</span>
                        </button>

                        <button
                            type="button"
                            onClick={() => addToSaved(workout)}
                            className="border border-[#262c38] hover:border-zinc-500 bg-transparent text-white font-medium text-xs px-5 py-3 rounded-lg flex items-center gap-2 transition-colors active:scale-95"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                            <span>Save for later</span>
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
}