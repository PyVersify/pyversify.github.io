import React from 'react';
import EventCard from './EventCard';
import { useCsvParser } from '../hooks/CsvParser';


interface EventListProps {
    csvFileName: string;
}

const EventList: React.FC<EventListProps> = ({ csvFileName }) => {
    const { events, loading, error } = useCsvParser(csvFileName);

    if (loading) {
        return (
            <div className='max-w-3xl mx-auto p-4 text-center'>
                <div className='animate-pulse text-xl'>Loading events...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className='max-w-3xl mx-auto p-4 text-center'>
                <div className='text-xl text-red-500'>Error: {error}</div>
            </div>
        );
    }

    if (events.length === 0) {
        return (
            <div className='max-w-3xl mx-auto p-4 text-center'>
                <div className='text-xl'>No events found</div>
            </div>
        );
    }

    return (
        <div className='max-w-3xl mx-auto p-4'>
            <div className='max-h-[600px] overflow-y-auto'>
                {events.map((event) => (
                    <EventCard 
                        key={event.id}
                        id={event.id}
                        date={event.date}
                        title={event.title}
                        description={event.description}
                        additionalInfo={event.additionalInfo}
                        beginnerFriendly={event.beginnerFriendly}
                        link={event.link}
                    />
                ))}
            </div>
        </div>  
    );
};

export default EventList;
