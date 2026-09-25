"use client";

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { usePlan } from '@/context/PlanContext';

type SortOption = 'duration' | 'calories' | 'rating';

function MyPlanContent() {
    const searchParams = useSearchParams();
    const initialTab = searchParams.get('tab') === 'saved' ? 'saved' : 'today';

    const [activeTab, setActiveTab] = useState<'today' | 'saved'>(initialTab);
    const [sortBy, setSortBy] = useState<SortOption>('duration');

    const {
        plan,
        saved,
        removeFromPlan,
        removeFromSaved,
        toggleDone,
        isDone,
    } = usePlan();

    useEffect(() => {
        const tabParam = searchParams.get('tab');
        if (tabParam === 'saved') {
            setActiveTab('saved');
        } else if (tabParam === 'today') {
            setActiveTab('today');
        }
    }, [searchParams]);

    const metrics = useMemo(() => {
        const exerciseCount = plan.length;
        const totalMinutes = plan.reduce((sum, item) => sum + (item.duration || 0), 0);
        const totalCalories = plan.reduce((sum, item) => sum + (item.caloriesBurned || 0), 0);

        return {
            exerciseCount,
            totalMinutes,
            totalCalories,
        };
    }, [plan]);

    const currentItems = useMemo(() => {
        const items = [...(activeTab === 'today' ? plan : saved)];
        items.sort((a, b) => {
            if (sortBy === 'duration') return b.duration - a.duration;
            if (sortBy === 'calories') return b.caloriesBurned - a.caloriesBurned;
            if (sortBy === 'rating') return b.rating - a.rating;
            return 0;
        });
        return items;
    }, [activeTab, plan, saved, sortBy]);

    return (
        <section className="container mx-auto px-6 py-8 md:py-10 max-w-6xl">
            <div className="mb-6">
                <h1 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
                    MY PLAN
                </h1>
                <p className="text-[#7a8291] text-xs sm:text-sm mt-1">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            <div className="bg-[#13161c] rounded-2xl p-6 sm:p-8 border border-[#1b1f28] grid grid-cols-3 gap-6 mb-8">
                <div>
                    <span className="text-xs text-[#7a8291] font-medium block mb-2">
                        Exercises
                    </span>
                    <span className="font-display font-black text-3xl sm:text-4xl text-[#ccff00]">
                        {metrics.exerciseCount}
                    </span>
                </div>

                <div>
                    <span className="text-xs text-[#7a8291] font-medium block mb-2">
                        Minutes
                    </span>
                    <span className="font-display font-black text-3xl sm:text-4xl text-white">
                        {metrics.totalMinutes}
                    </span>
                </div>

                <div>
                    <span className="text-xs text-[#7a8291] font-medium block mb-2">
                        Calories
                    </span>
                    <span className="font-display font-black text-3xl sm:text-4xl text-white">
                        {metrics.totalCalories}
                    </span>
                </div>
            </div>

            <div className="flex items-center justify-between gap-4 mb-6">
                <div className="bg-[#13161c] p-1 rounded-xl border border-[#1b1f28] inline-flex gap-1">
                    <button
                        type="button"
                        onClick={() => setActiveTab('today')}
                        className={`text-xs px-4 py-1.5 rounded-lg transition-colors ${
                            activeTab === 'today'
                                ? 'bg-[#1c202a] text-white font-medium shadow-sm'
                                : 'text-[#7a8291] hover:text-white'
                        }`}
                    >
                        Today&apos;s Plan
                    </button>

                    <button
                        type="button"
                        onClick={() => setActiveTab('saved')}
                        className={`text-xs px-4 py-1.5 rounded-lg transition-colors ${
                            activeTab === 'saved'
                                ? 'bg-[#1c202a] text-white font-medium shadow-sm'
                                : 'text-[#7a8291] hover:text-white'
                        }`}
                    >
                        Saved
                    </button>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-xs text-[#7a8291]">Sort By</span>
                    <div className="relative">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as SortOption)}
                            className="appearance-none bg-[#13161c] border border-[#1b1f28] text-white text-xs font-medium py-1.5 pl-3 pr-8 rounded-lg focus:outline-none focus:border-[#ccff00] cursor-pointer"
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

            {currentItems.length > 0 ? (
                <div className="space-y-4">
                    {currentItems.map((workout) => {
                        const done = isDone(workout.id);
                        return (
                            <div
                                key={workout.id}
                                className="bg-[#13161c] border border-[#1b1f28] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="relative w-24 h-16 sm:w-28 sm:h-18 rounded-xl overflow-hidden shrink-0 bg-[#1a1e27]">
                                        <Image
                                            src={workout.image}
                                            alt={workout.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div>
                                        <h3 className={`font-display font-bold text-sm sm:text-base uppercase tracking-wide leading-snug ${
                                            done ? 'line-through text-[#7a8291]' : 'text-white'
                                        }`}>
                                            {workout.name}
                                        </h3>

                                        <p className="text-[#7a8291] text-xs mt-0.5">
                                            {workout.equipment}
                                        </p>

                                        <div className="flex items-center gap-3 mt-1.5 text-xs text-[#8e95a5]">
                                            <span className="flex items-center gap-1">
                                                <span>⏱</span>
                                                <span>{workout.duration} min</span>
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <span>🔥</span>
                                                <span>{workout.caloriesBurned} kcal</span>
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <span>⭐</span>
                                                <span>{workout.rating}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2.5 self-end sm:self-center shrink-0">
                                    <Link
                                        href={`/workouts/${workout.id}`}
                                        className="bg-[#1a1e27] hover:bg-[#222834] text-zinc-300 text-xs px-4 py-2 rounded-full border border-[#272d3b] font-medium transition-colors"
                                    >
                                        View Details
                                    </Link>

                                    {activeTab === 'today' && (
                                        <button
                                            type="button"
                                            onClick={() => toggleDone(workout.id)}
                                            className={`text-xs px-4 py-2 rounded-full font-bold flex items-center gap-1.5 transition-all ${
                                                done
                                                    ? 'bg-[#182312] text-[#ccff00] border border-[#ccff00]/40'
                                                    : 'bg-[#ccff00] hover:bg-[#b8e600] text-black shadow-sm'
                                            }`}
                                        >
                                            <span>✓</span>
                                            <span>{done ? 'Done' : 'Mark as Done'}</span>
                                        </button>
                                    )}

                                    <button
                                        type="button"
                                        onClick={() => {
                                            if (activeTab === 'today') {
                                                removeFromPlan(workout.id);
                                            } else {
                                                removeFromSaved(workout.id);
                                            }
                                        }}
                                        className="text-[#7a8291] hover:text-white p-1 text-sm transition-colors ml-1"
                                        aria-label="Remove workout"
                                        title="Remove workout"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="bg-[#13161c] border border-[#1b1f28] rounded-2xl py-16 sm:py-24 px-6 text-center">
                    <h2 className="font-display font-black text-xl sm:text-2xl uppercase text-white tracking-wide">
                        NOTHING HERE YET
                    </h2>

                    <p className="text-[#7a8291] text-xs sm:text-sm mt-1.5 mb-6">
                        Browse the library and add a lift to get today moving.
                    </p>

                    <Link
                        href="/workouts"
                        className="inline-block bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold text-xs px-6 py-2.5 rounded-full transition-transform active:scale-95 shadow-[0_0_15px_rgba(204,255,0,0.2)]"
                    >
                        Go to workouts
                    </Link>
                </div>
            )}
        </section>
    );
}

export default function MyPlanPage() {
    return (
        <Suspense fallback={<div className="container mx-auto px-6 py-20 text-center text-[#8e95a5] text-xs">Loading workouts…</div>}>
            <MyPlanContent />
        </Suspense>
    );
}
