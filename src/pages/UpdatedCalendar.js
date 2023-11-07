import React, { useEffect, useState } from 'react';
import { EventService } from '../service/EventService';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

export const UpdatedCalendar = () => {
    const [events, setEvents] = useState(null);

    useEffect(() => {
        const eventService = new EventService();
        eventService.getEvents().then(data => setEvents(data));
    }, [])

    return (
        <div className="p-grid">
            <div className="p-col-12">
                <div className="card">
                    <ScheduleComponent
                        selectedDate={new Date(2021, 0, 15)}
                        eventSettings={{
                            dataSource: events,
                        }}
                        >
                        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
                    </ScheduleComponent>
                </div>
            </div>
        </div>
    )
}
