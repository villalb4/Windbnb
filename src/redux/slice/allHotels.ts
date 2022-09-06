import { createSlice } from "@reduxjs/toolkit";

// export interface NewHotel : {hotel: object}[] = {
//     hotel: {}
// }

const initialState = {
  allHotels: {}
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

export const getHotels= () => {
  return (dispatch:any) => {
    const data: object = [{
      image : "https://addawards.ru/upload/iblock/d24/1.jpg",
      super_host: true,
      beds: 2,
      rating: "4.85",
      description: "Stylist apartment in center of the city",
      location: "Finlandia"
    },
    {
      image : "https://keralaayurvedacentre.co.uk/wp-content/uploads/2020/02/the-the-benefits-of-ayurveda-in-modern-day-life.jpg",
      super_host: false,
      beds: 2,
      rating: "4.25",
      description: "Cozy, peaceful and private room with my dog.",
      location: "Finlandia"
    },
    {
      image : "https://fountainera.com/wp-content/uploads/2021/10/fountainera20.jpg",
      super_host: false,
      beds: 2,
      rating: "4.90",
      description: "Stylist apartment in center of the city",
      location: "Finlandia"
    },
    {
      image : "https://bigfoto.name/uploads/posts/2022-03/1646545004_2-bigfoto-name-p-stili-postroek-v-interere-2.jpg",
      super_host: true,
      beds: 2,
      rating: "4.90",
      description: "Stylist apartment in center of the city",
      location: "Finlandia"
    },
    {
      image : "https://bigfoto.name/uploads/posts/2022-03/1646545004_2-bigfoto-name-p-stili-postroek-v-interere-2.jpg",
      super_host: false,
      beds: 2,
      rating: "4.90",
      description: "Stylist apartment in center of the city",
      location: "finlandia"
    },
    {
      image : "https://bigfoto.name/uploads/posts/2022-03/1646545004_2-bigfoto-name-p-stili-postroek-v-interere-2.jpg",
      super_host: false,
      beds: 2,
      rating: "4.90",
      description: "Stylist apartment in center of the city",
      location: "finlandia"
    },
    ]
    dispatch(setAllHotels(data))
  }
}
