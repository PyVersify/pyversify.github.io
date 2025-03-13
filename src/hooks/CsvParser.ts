import { useState, useEffect } from 'react';
import Papa, { ParseResult, ParseError } from 'papaparse';

export interface EventData {
    id: string | number;
    date: string;
    title: string;
    description: string;
    additionalInfo?: string;
    beginnerFriendly?: boolean;
    link: string;
}

export const useCsvParser = (csvFileName: string) => {
    const [events, setEvents] = useState<EventData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCsvData = async () => {
            try {
                setLoading(true);
                const response = await fetch(csvFileName);
                const text = await response.text();

                Papa.parse<EventData>(text, {
                    header: true,
                    dynamicTyping: true,
                    skipEmptyLines: true,
                    transformHeader: header => 
                        header.toLowerCase().replace(/\s+/g, '_'),
                    complete: (results: ParseResult<EventData>) => {
                        setEvents(results.data as EventData[]);
                        setLoading(false);
                    },
                    error: (error: Error) => {
                        setError(error.message);
                        setLoading(false);
                    } 
                });
            } catch (err) {
                setError('Failed to fetch or parse CSV file');
                setLoading(false);
            }
        };

    fetchCsvData();
    }, [csvFileName]);

    return { events, loading, error };
};