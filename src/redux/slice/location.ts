import { createSlice } from "@reduxjs/toolkit";

interface locationState {
  name: string
}

const initialState: locationState = {
  name: "Buenos Aires"
}

const locationSlice = createSlice({
  name: 'locationName',
  initialState,
  reducers: {
    setLocationName: function(state:any, action:any) {
      state.name = action.payload;
    }
  }
})

export const {setLocationName} = locationSlice.actions
export default locationSlice.reducer