import React from 'react';
import Calendar from 'react-calendar';

interface Event {
  date: string;
  title: string;
}

interface CalendarProps {
  events: Event[];
}

const CustomCalendar: React.FC<CalendarProps> = ({ events }) => {
  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      const event = events.find(event => new Date(event.date).toDateString() === date.toDateString());
      return event ? <div className="calendar-event">{event.title}</div> : null;
    }
    return null;
  };

  return (
    <div className="container mx-auto px-6 py-24 bg-white m-10">
      <div className="calendar-container">
        <Calendar tileContent={tileContent} />
      </div>
    </div>  
  );
};

export default CustomCalendar;
