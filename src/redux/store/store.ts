import { configureStore } from "@reduxjs/toolkit";
import allHotels from "../slice/allHotels";

const store = configureStore({
  reducer: {
    allHotels
  },
})

export default store