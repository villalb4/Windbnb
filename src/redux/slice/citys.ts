import { createSlice } from "@reduxjs/toolkit";

interface cityState {
  allCitys: object[]
}

const initialState: cityState = {
  allCitys: []
}

const citysSlice = createSlice({
  name: 'citys',
  initialState: initialState,
  reducers: {
    setCitys: function(state:any, action:any) {
      state.allCitys = action.payload
    }
  }
})

export const {setCitys} = citysSlice.actions
export default citysSlice.reducer

export const getCitys = () => {
  return (dispatch:any) => {
    const data: object[] = [
      {name: 'Buenos Aires'},
      {name: 'Mar Del Plata'},
      {name: 'Cordoba'},
      {name: 'Santa Cruz'},
      {name: 'Rosario'},
      {name: 'Mendoza'},
      {name: 'Tierra Del Fuego'},
    ]
    dispatch(setCitys(data))
  }
}