import React from 'react';
import { Metadata } from 'next';
import Banner from '../components/shared/homepage/Banner';
import Library from '../components/shared/homepage/Library';

export const metadata: Metadata = {
    title: 'Workout Library — FitLog',
    description: 'Explore twelve lifts covering every major muscle group. Build your daily training plan.',
};

const WorkoutsPage = () => {
    return (
        <div>
            <Banner />
            <Library />
        </div>
    );
};

export default WorkoutsPage;
