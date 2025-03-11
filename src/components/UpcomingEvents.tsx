import React from 'react';

interface Event {
  date: string;
  title: string;
}

interface UpcomingEventsProps {
  events: Event[];
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events }) => {
  const futureEvents = events.filter(event => new Date(event.date) > new Date());

  return (
    <div className="upcoming-events-container">
      <h2 className="text-2xl font-bold mb-4 text-[#4584b6]">Upcoming Events</h2>
      <ul className="upcoming-events-list">
        {futureEvents.map((event, index) => (
          <li key={index} className="upcoming-event-item">
            <span>{new Date(event.date).toLocaleDateString()}</span>
            <span>{event.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingEvents;
