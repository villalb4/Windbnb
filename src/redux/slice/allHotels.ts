import { createSlice } from "@reduxjs/toolkit";

interface hotelsState {
  allHotels: object[]
}

const initialState: hotelsState = {
  allHotels: [],
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
    //fake api
    const data: object[] = [{
      //--------------------------FINALANDIA-------------------------------
      id: 1,
      image : "https://alterainvest.ru/upload/resize_cache/iblock/720/490_330_2/720de7e683a11c7017ca85529e9583cb.jpg",
      super_host: true,
      beds: 2,
      rating: "4.85",
      description: "Stylist apartment in center of the city",
      location: "Finlandia"
    },
    {
      id: 2,
      image : "https://keralaayurvedacentre.co.uk/wp-content/uploads/2020/02/the-the-benefits-of-ayurveda-in-modern-day-life.jpg",
      super_host: false,
      beds: 2,
      rating: "4.25",
      description: "Cozy, peaceful and private room with my dog.",
      location: "Finlandia"
    },
    {
      id: 3,
      image : "https://fountainera.com/wp-content/uploads/2021/10/fountainera20.jpg",
      super_host: false,
      beds: 2,
      rating: "4.90",
      description: "Stylist apartment in center of the city",
      location: "Finlandia"
    },
    {
      id: 4,
      image : "https://cdn11.bigcommerce.com/s-14045/product_images/uploaded_images/spiritual-benefit-of-sleep.jpg",
      super_host: true,
      beds: 2,
      rating: "4.90",
      description: "Stylist apartment in center of the city",
      location: "Finlandia"
    },
    {
      id: 5,
      image : "https://minner.hu/wp-content/uploads/2018/11/airbnb-kiadas-vallalkozas-e1549283391995.jpg",
      super_host: false,
      beds: 2,
      rating: "4.90",
      description: "Stylist apartment in center of the city",
      location: "finlandia"
    },
    {
      id: 6,
      image : "https://cdn.shopify.com/s/files/1/0610/6959/0775/articles/comment-disposer-ses-meubles-dans-salon-salle-a-manger-1_1000x.jpg?v=1639155465",
      super_host: false,
      beds: 2,
      rating: "4.90",
      description: "Stylist apartment in center of the city",
      location: "finlandia"
    },

    {
      id: 6,
      image : "https://cdn.shopify.com/s/files/1/0610/6959/0775/articles/comment-disposer-ses-meubles-dans-salon-salle-a-manger-1_1000x.jpg?v=1639155465",
      super_host: false,
      beds: 2,
      rating: "4.90",
      description: "Stylist apartment in center of the city",
      location: "finlandia"
    },
    {
      id: 6,
      image : "https://cdn.shopify.com/s/files/1/0610/6959/0775/articles/comment-disposer-ses-meubles-dans-salon-salle-a-manger-1_1000x.jpg?v=1639155465",
      super_host: false,
      beds: 2,
      rating: "4.90",
      description: "Stylist apartment in center of the city",
      location: "finlandia"
    },
    {
      id: 6,
      image : "https://cdn.shopify.com/s/files/1/0610/6959/0775/articles/comment-disposer-ses-meubles-dans-salon-salle-a-manger-1_1000x.jpg?v=1639155465",
      super_host: false,
      beds: 2,
      rating: "4.90",
      description: "Stylist apartment in center of the city",
      location: "finlandia"
    },

    
    //--------------------------BUENOS AIRES-------------------------------

    ]
    dispatch(setAllHotels(data))
  }
}

