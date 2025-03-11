import Papa from 'papaparse';

interface Event {
  date: string;
  title: string;
}

export const fetchEvents = async (): Promise<Event[]> => {
  const response = await fetch('/events.csv');
  const csvText = await response.text();
  const parsedData = Papa.parse<Event>(csvText, {
    header: true,
    dynamicTyping: true,
  });

  return parsedData.data;
};
