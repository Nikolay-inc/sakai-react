export const getUpdatedData = (eventsData) => {
    if(!eventsData) return [];
    return eventsData?.map((eventItem) => {
        return {
            start: eventItem?.StartTime,
            end: eventItem?.EndTime,
            title: eventItem?.title,
            id: eventItem?.Id,
        }
    });
}