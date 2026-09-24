import React from 'react';
import LibraryCard from '../../LibraryCard';

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
                    data.map((workout, ind) => {
                        return (
                            <LibraryCard
                                key={ind}
                                library={workout}
                            />
                        );
                    })
                }

            </div>

        </section>
    );
};

export default Library;