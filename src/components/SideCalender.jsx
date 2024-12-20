"use client";
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const SideCalender = () => {
    const [value, onChange] = useState(new Date());

    const events = [
        {
            id: 1,
            title: "Lorem ipsum dolor",
            time: "12:00 PM - 2:00 PM",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: 2,
            title: "Lorem ipsum dolor",
            time: "12:00 PM - 2:00 PM",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: 3,
            title: "Lorem ipsum dolor",
            time: "12:00 PM - 2:00 PM",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ];

    return (
        <div className='p-4 rounded-lg'>
            <Calendar onChange={onChange} value={value} />
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold my-4">Upcoming Events</h1>
            </div>
            <div className="flex flex-col gap-4">
                {
                    events.map(event => (
                        <div key={event.id}>
                            <div className="flex items-center justify-between">
                                <h1 className="font-semibold text-gray-600">{event.title}</h1>
                                <span className="text-gray-300 text-xs">{event.time}</span>
                            </div>
                            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
                        </div>
                    ))
                }
            </div>
        </div >
    );
};

export default SideCalender;