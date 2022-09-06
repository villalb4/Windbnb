import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  adults: number;
  children: number;
}

const initialState: CounterState = {
  adults: 0,
  children: 0,
}

export const menuCounter = createSlice({
  name: 'menuCounter',
  initialState,
  reducers: {
    adultIncrement: (state) => {
			if(state.adults < 4) {
        state.adults += 1;
			} 
    },
    adultDecrement: (state) => {
			if(state.adults > 0) {
        state.adults -= 1;
			}
    },
    chilIncrement: (state) => {
			if(state.children < 4) {
        state.children += 1;
			}
    },
    chilDecrement: (state) => {
			if(state.children > 0) {
        state.children -= 1;
			}
    }
  }
})

export const {adultIncrement, adultDecrement, chilIncrement, chilDecrement} = menuCounter.actions;
export default menuCounter.reducer;
