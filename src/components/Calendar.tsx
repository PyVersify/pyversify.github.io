import React from 'react';

interface Event {
  date: string;
  title: string;
}

interface CalendarProps {
  events: Event[];
}

const Calendar: React.FC<CalendarProps> = ({ events }) => {
  const renderCalendar = () => {
    // Create a calendar grid for 2025
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November'
    ];

    return months.map((month, index) => (
      <div key={index} className="calendar-month">
        <h3 className="text-lg font-bold mb-2">{month}</h3>
        <div className="calendar-grid">
          {events
            .filter(event => new Date(event.date).getMonth() === index)
            .map((event, idx) => (
              <div key={idx} className="calendar-event">
                <span>{new Date(event.date).getDate()}</span>
                <span>{event.title}</span>
              </div>
            ))}
        </div>
      </div>
    ));
  };

  return (
    <div className="calendar-container">
      {renderCalendar()}
    </div>
  );
};

export default Calendar;
