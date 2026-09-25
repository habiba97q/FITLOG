"use client";

import React, { useState, useEffect, useMemo } from 'react';
import LibraryCard from '../../LibraryCard';
import { ILibrary } from '@/types/library.type';

type SortOption = 'duration' | 'calories' | 'rating';

const Library = () => {
    const [workouts, setWorkouts] = useState<ILibrary[]>([]);
    const [loading, setLoading] = useState(true);
    const [sortBy, setSortBy] = useState<SortOption>('duration');

    useEffect(() => {
        fetch('https://api.abcz.workers.dev/api/fitlog')
            .then((res) => res.json())
            .then((data) => {
                setWorkouts(data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, []);

    const sortedWorkouts = useMemo(() => {
        const list = [...workouts];
        list.sort((a, b) => {
            if (sortBy === 'duration') return b.duration - a.duration;
            if (sortBy === 'calories') return b.caloriesBurned - a.caloriesBurned;
            if (sortBy === 'rating') return b.rating - a.rating;
            return 0;
        });
        return list;
    }, [workouts, sortBy]);

    return (
        <section id="library" className="container mx-auto px-6 py-6 scroll-mt-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                <div>
                    <h2 className="font-display font-black text-2xl text-white uppercase tracking-wide">
                        THE LIBRARY
                    </h2>
                    <p className="text-[#7a8291] text-xs sm:text-sm mt-0.5">
                        Twelve lifts covering every major muscle group.
                    </p>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="text-xs text-[#7a8291]">Sort By</span>
                    <div className="relative">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as SortOption)}
                            className="appearance-none bg-[#13161c] border border-[#1e232e] text-white text-xs font-medium py-1.5 pl-3 pr-8 rounded-lg focus:outline-none focus:border-[#ccff00] cursor-pointer"
                        >
                            <option value="duration">Duration</option>
                            <option value="calories">Calories</option>
                            <option value="rating">Rating</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-400">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="bg-[#13161c] rounded-xl overflow-hidden animate-pulse"
                        >
                            <div className="h-[200px] bg-[#1a1e27]" />
                            <div className="p-4 space-y-3">
                                <div className="flex gap-2">
                                    <div className="h-4 w-12 bg-[#1a1e27] rounded-full" />
                                    <div className="h-4 w-12 bg-[#1a1e27] rounded-full" />
                                </div>
                                <div className="h-5 w-3/4 bg-[#1a1e27] rounded" />
                                <div className="h-3 w-1/2 bg-[#1a1e27] rounded" />
                                <div className="h-4 w-full bg-[#1a1e27] rounded mt-3" />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {sortedWorkouts.map((workout) => (
                        <LibraryCard key={workout.id} library={workout} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default Library;