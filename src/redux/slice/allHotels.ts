import { createSlice } from "@reduxjs/toolkit";

// export interface NewHotel {
//   name: string;
//   price: number;
// }

const initialState = {
  allHotels: []
}

export const allHotels = createSlice({
  name: "allHotels",
  initialState,
  reducers: {
    setAllHotels: function (state:any, action:any) {
      state.allHotels = action.payload;
    }
  }
})

export const {setAllHotels} = allHotels.actions

export default allHotels.reducer

// -----------------

export const getHotels = () => (dispatch:any) => {
  const hoteles: object[] = [{
    image : "",
    super_host: false,
    entire_or_private: "",
    rating: "4.85",
    description: ""
  }]
  dispatch(setAllHotels(hoteles))
}