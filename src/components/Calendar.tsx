import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

interface Event {
  date: string;
  title: string;
}

interface CalendarProps {
  events: Event[];
}

const CustomCalendar: React.FC<CalendarProps> = ({ events }) => {
  const eventContent = (eventInfo: any) => {
    return (
      <div className="calendar-event">
        {eventInfo.event.title}
      </div>
    );
  };

  const eventsList = events.map(event => ({
    title: event.title,
    start: event.date
  }));

  return (
    <div className="container mx-auto px-6 py-24 bg-white m-10">
      <div className="calendar-container">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={eventsList}
          eventContent={eventContent}
        />
      </div>
    </div>  
  );
};

export default CustomCalendar;
