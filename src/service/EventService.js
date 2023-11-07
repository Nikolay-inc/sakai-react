import axios from 'axios';

const eventsUrl = `https://api.nopaperwork.ca:844/api/events/1bec2050-d5a2-4a6a-a476-8f7a6424ace0/1/20/`;

export class EventService {
    // getEvents() {
    //     return axios.get('assets/demo/data/events.json')
    //         .then(res => res.data.data);
    // }
    getEvents() {
        return axios.get(eventsUrl)
            .then(res => res.data.events);
    }
}
