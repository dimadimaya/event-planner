export const getEvents = (state) => state.events.events;
export const getFilter = (state) => state.events.filter;
export const selectEventById = (state, eventId) => {
  return state.events.events.find((event) => event.id === eventId);
};
