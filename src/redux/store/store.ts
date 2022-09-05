import { configureStore } from "@reduxjs/toolkit";
import allHotels from "../slice/allHotels";
import menuCounter from "../slice/menuCounter";

const store = configureStore({
  reducer: {
    allHotels,
    menuCounter : menuCounter
  },
})

export default store