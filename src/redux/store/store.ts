import { configureStore } from "@reduxjs/toolkit";
import allHotels from "../slice/allHotels";
import menuCounter from "../slice/menuCounter";
import location from "../slice/location";

const store = configureStore({
  reducer: {
    allHotels,
    menuCounter,
    location
  },
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch