import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    longitude: null,
    latitude: null,
  },
  reducers: {
    setLocation: (state, action) => {
      state.longitude = action.payload[0];
      state.latitude = action.payload[1];
    },
  },
});

export const { setLocation } = locationSlice.actions;

export default locationSlice.reducer;