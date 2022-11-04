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
      image : "https://homebnc.com/homeimg/2015/11/09-living-room-decor-homebnc.jpg",
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
      image : "https://th.bing.com/th/id/R.16e65214bb27f4fbb47b53d5ee341845?rik=ggfVFFTwd1IbRg&riu=http%3a%2f%2fmydecorative.com%2fwp-content%2fuploads%2f2013%2f06%2fMinimalist-home.jpg&ehk=7uqg2HOF%2bG%2fWo164D5vpCIRgj0GD34FIbbg9ZWRXk%2bg%3d&risl=&pid=ImgRaw&r=0",
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

