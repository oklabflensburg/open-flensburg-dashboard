import React from 'react';
import { useEffect, useState } from 'react';
import DashboardTile from './DashboardTile';
import { fetchData, fetchEventData } from '../services/lifeService';
import { Event, Events, EventListProps } from '../types/event'
import { format, parse, startOfMonth, endOfMonth, isWithinInterval } from 'date-fns';
import { de } from 'date-fns/locale';
import Card from './Card'




const Calendar: React.FC<EventListProps> = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [eventsData, setEventsData] = useState<Event[] | null>(null);
    const [currentMonth, setCurrentMonth] = useState(new Date());

    useEffect(() => {
        const loadData = async () => {
            try {
                setIsLoading(true);
                const response = await fetchEventData('src/assets/fakedata/events.json').then((data) => setEventsData(data))

            } catch (error) {
                console.error('Error loading Event data:', error);

            } finally {
                setIsLoading(false);
            }


        };
        loadData()
    }, [])

    const prepareEventData = (eventsData) => {
        return eventsData.dates.map((date, index) => ({
            date,
            name: eventsData.events[index],
            description: eventsData.descriptions[index],
            location: eventsData.locations[index],
            timeStart: eventsData.timeStart[index],
            timeEnd: eventsData.timeEnd[index],
            imageUrl: eventsData.imageUrls[index]
        }));
    };


    const eventData = eventsData ? prepareEventData(eventsData) : [];


    // Filter events for current month
    const monthEvents = eventData.filter(event => {
        const eventDate = parse(event.date, 'yyyy-MM-dd', new Date());
        return isWithinInterval(eventDate, {
            start: startOfMonth(currentMonth),
            end: endOfMonth(currentMonth)
        });
    });

    const navigateMonth = (direction: 'prev' | 'next') => {
        setCurrentMonth(prevMonth => {
            const newMonth = new Date(prevMonth);
            newMonth.setMonth(prevMonth.getMonth() + (direction === 'next' ? 1 : -1));
            return newMonth;
        });
    };



    return (
        <DashboardTile title='Events in Flensburg' description='Hier werden aktuelle Events in Flensburg angezeigt' bgColor='bg-red' fontColor='red-dark' themeIconUrl='public/icons/Life/life-quality.webp'>

            <div className="rounded-lg">
                {/* Month Navigation */}
                <div className="px-4 py-3 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        <button onClick={() => navigateMonth('prev')} className="bg-white p-2 hover:text-gray-900 focus:outline-none">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <h2 className="text-lg font-semibold text-gray-900">
                            {format(new Date(currentMonth), "MMMM yyyy", { locale: de, },)}
                        </h2>
                        <button
                            onClick={() => navigateMonth('next')}
                            className="bg-white p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Event List */}
                <div className="divide-y divide-gray-200 p-4">
                    {monthEvents.length > 0 ? (
                         <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                       {monthEvents.map((event, index)=> (
                        <div className='grid gap-4"'>
                            <Card key={`${event.date}-${index}`} eventName={event.name} description={event.description} location={event.location} imageUrl={event.imageUrl}></Card>
                        </div>
                      ))} </div>
                    ) : <div className="p-4 text-center text-gray-500">
                        Keine Events eingestellt für {format(new Date(currentMonth), "MMMM yyyy", { locale: de, },)}
                    </div>}
                </div>
            </div>

        </DashboardTile>
    )
}
export default Calendar;
