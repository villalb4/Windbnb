import { createSlice } from "@reduxjs/toolkit";

// export interface NewHotel : {hotel: object}[] = {
//     hotel: {}
// }

const initialState = {
  // allHotels: {}
}

export const allHotelsSlice = createSlice({
  name: "hoteles",
  initialState,
  reducers: {
    setAllHotels: function (state:any, action:any) {
      state.allHotels = action.payload;
    }
  }
})

export const {setAllHotels} = allHotelsSlice.actions;
export default allHotelsSlice.reducer
