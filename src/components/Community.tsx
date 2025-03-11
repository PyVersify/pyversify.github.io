import React, { useState, useEffect } from 'react';
import Calendar from './Calendar';
import UpcomingEvents from './UpcomingEvents';
import { fetchEvents } from '../utils/events';

const Community: React.FC = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      const eventsData = await fetchEvents();
      setEvents(eventsData);
    };

    loadEvents();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-[#4584b6]">Community</h1>
      <p className="text-xl text-gray-600">
        Welcome to the community page! Here you can find information about our community events, forums, and how to get involved.
      </p>
      <Calendar events={events} />
      <UpcomingEvents events={events} />
    </div>
  );
};

export default Community;
