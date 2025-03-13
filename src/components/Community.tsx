import React, { useState, useEffect } from 'react';
import CustomCalendar from './Calendar';
import UpcomingEvents from './UpcomingEvents';
import EventList from './EventList';
import { fetchEvents } from '../utils/events';
import { EventData, useCsvParser } from '../hooks/CsvParser';

const Community: React.FC = () => {
  const [events, setEvents] = useState<EventData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const { events: csvEvents, loading, error } = useCsvParser('/events.csv')
        if (error) {
          setError(error);
        } else {
          setEvents(csvEvents);
        }
        setIsLoading(loading);
      } catch (err) {
        setError('Failed to fetch events');
        setIsLoading(false);
      }
    };

    loadEvents();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-[#4584b6]">Community</h1>
      <p className="text-xl text-gray-600">
        Welcome to the community page! Here you can find information about our community events, forums, and how to get involved.
      </p>
      <CustomCalendar events={events} />
      <EventList csvFileName="/events.csv" />
    </div>
  );
};

export default Community;
