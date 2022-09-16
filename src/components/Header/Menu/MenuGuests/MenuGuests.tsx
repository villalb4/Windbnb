import React from 'react'
import './MenuGuests.css'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hooks'
import {adultIncrement, adultDecrement, chilIncrement, chilDecrement} from '../../../../redux/slice/menuCounter'

function MenuGuests() {

  const adultCount = useAppSelector((state: any) => state.menuCounter.adults)
  const chilCount = useAppSelector((state: any) => state.menuCounter.children)

  const dispatch = useAppDispatch();

  const handleAdultSum = () => {
    dispatch(adultIncrement())
  }

  const handleAdultDec = () => {
    dispatch(adultDecrement())
  }

  const handleChilIncrement = () => {
    dispatch(chilIncrement())
  }

  const handleChilDecrement = () => {
    dispatch(chilDecrement())
  }

  return (
    <div className='MenuGuests_component'>
      <div className='MenuG_divAdults'>
        <div className='MenuG_divSpans'>
          <span>Adults</span>
          <p>Ages 13 or above</p>
        </div>
        <div className='MenuG_divButtons'>
          <button onClick={handleAdultDec}>-</button>
          <span>{adultCount}</span>
          <button onClick={handleAdultSum}>+</button>
        </div>
      </div>

      <div className='MenuG_divChil'>
        <div className='MenuG_divSpans'>
          <span>Children</span>
          <p>Ages 2-12</p>
        </div>
        <div className='MenuG_divButtons'>
          <button onClick={handleChilDecrement}>-</button>
          <span>{chilCount}</span>
          <button onClick={handleChilIncrement}>+</button>
        </div>
      </div>
    </div>
  )
}

export default MenuGuests
