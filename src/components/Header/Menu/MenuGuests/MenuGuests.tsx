import React, {useState} from 'react'
import './MenuGuests.css'
import {useDispatch, useSelector} from 'react-redux'
import {adultIncrement, adultDecrement, chilIncrement, chilDecrement} from '../../../../redux/slice/menuCounter'

function MenuGuests() {

  const adultCount = useSelector((state: any) => state.menuCounter.adults)

  const dispatch = useDispatch();

  const handleAdultSum = () => {
    dispatch(adultIncrement())
  }

  const handleAdultDec = () => {
    dispatch(adultDecrement())
  }

  // const chilIncrement = () => {
  //   dispatch(chilIncrement())
  // }

  // const chilDecrement = () => {
  //   dispatch(chilDecrement())
  // }

  return (
    <div>
      <div>
        <span>Adults</span>
        <p>Ages 13 or above</p>
        <div>
          <button onClick={handleAdultDec}>-</button>
          <span>{adultCount}</span>
          <button onClick={handleAdultSum}>+</button>
        </div>
      </div>
    </div>
  )
}

export default MenuGuests