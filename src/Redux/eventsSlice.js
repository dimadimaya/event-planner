import { createSlice } from "@reduxjs/toolkit";

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    events: [],
    filter: "",
  },
  reducers: {
    addEvent(state, action) {
      state.events.unshift(action.payload);
    },
    editEvent(state, action) {
      const { id, updatedEvent } = action.payload;
      const eventToEdit = state.events.find((event) => event.id === id);
      if (eventToEdit) {
        Object.assign(eventToEdit, updatedEvent);
      }
    },
    deleteEvent(state, action) {
      state.events = state.events.filter(
        (event) => event.id !== action.payload.eventId
      );
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addEvent, editEvent, deleteEvent, setFilter } =
  eventsSlice.actions;
export default eventsSlice.reducer;
