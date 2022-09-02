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
    image : "https://th.bing.com/th/id/R.bb05960bdb880224ff07360ca3cc40f9?rik=GTMl0Dx%2b5G6P3w&riu=http%3a%2f%2fmykarmastream.com%2fwp-content%2fuploads%2f2017%2f08%2fscandinavian-home-interior-4.png&ehk=JI9qw9YXqHoE25Rf%2f%2fulfYdngPyxL0EWMBPPEjNixvc%3d&risl=&pid=ImgRaw&r=0",
    super_host: true,
    entire_or_private: "Entire apartment.2 beds",
    rating: "4.85",
    description: "Stylist apartment in center of the city"
  },
  {
    image : "https://th.bing.com/th/id/R.bb05960bdb880224ff07360ca3cc40f9?rik=GTMl0Dx%2b5G6P3w&riu=http%3a%2f%2fmykarmastream.com%2fwp-content%2fuploads%2f2017%2f08%2fscandinavian-home-interior-4.png&ehk=JI9qw9YXqHoE25Rf%2f%2fulfYdngPyxL0EWMBPPEjNixvc%3d&risl=&pid=ImgRaw&r=0",
    super_host: false,
    entire_or_private: "Private room",
    rating: "4.25",
    description: "Cozy, peaceful and private room with beautiful dog"
  }]
  dispatch(setAllHotels(hoteles))
}