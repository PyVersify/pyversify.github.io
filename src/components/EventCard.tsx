import React from 'react';
import { EventData } from '../hooks/CsvParser';

interface EventCardProps extends EventData {}

const EventCard: React.FC<EventCardProps> = ({ 
    date, 
    title, 
    description, 
    additionalInfo, 
    beginnerFriendly, 
    link 
}) => {
    // Handle both string and Date objects
    const eventDate = new Date(date);
    const month = eventDate.toLocaleString('default', { month: 'long' });
    const day = eventDate.getDate();
    const year = eventDate.getFullYear();

    return (
        <article className='flex bg-white rounded-lg shadow-md overflow-hidden w-full mb-4'>
            {/* Date Section */}
            <header className='bg-blue-500 text-white p-4 flex flex-col items-center justify-center min-w-[100px]'>
                <time dateTime={eventDate.toISOString()}>
                    <div className='text-xl font-bold text-white'>{month}</div>
                    <div className='text-6xl font-bold leading-none text-white'>{day}</div>
                    <div className='text-xl text-white'>{year}</div>
                </time> 
            </header>
            
            {/* Content Section */}
            <div className='flex-1 p-4 relative'>
                <div className='flex justify-between items-center mb-2'>
                    <h3 className='text-xl font-semibold'>{title}</h3>
                    {beginnerFriendly && (
                        <span className='bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm border border-green-300'>
                            Beginner Friendly
                        </span>
                    )}
                </div>

                <div className='bg-gray-100 rounded-lg p-4 mb-2'>
                    <p className='text-gray-700'>{description}</p>
                    {additionalInfo && (
                        <p className='text-gray-600 mt-2'>{additionalInfo}</p>
                    )}
                </div>

                <div className='flex justify-end'>
                    <a 
                        href={link}
                        className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg'
                        aria-label={`Attend ${title} event`}
                    >
                        Attend Event
                    </a>
                </div>
            </div>
        </article>
    );
};

export default EventCard;
