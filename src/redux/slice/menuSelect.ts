import { createSlice } from "@reduxjs/toolkit";

interface menuSelectState {
  locationCondition: boolean,
  guestsCondition: boolean,
}

const initialState: menuSelectState = {
  locationCondition: true,
  guestsCondition: false,
}

const menuSelectSlice = createSlice({
  name: 'menuSelect',
  initialState,
  reducers: {
    setLocationCondition: function(state:any, action:any) {
      state.locationCondition = action.payload
    },
    setGuestsCondition: function(state:any, action:any) {
      state.guestsCondition = action.payload
    }
  }
})

export const {setLocationCondition, setGuestsCondition} = menuSelectSlice.actions
export default menuSelectSlice.reducer