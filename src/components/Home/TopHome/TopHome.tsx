import React from 'react'
import { useAppSelector } from '../../../redux/hooks/hooks'
import './TopHome.css'


function TopHome() {

  const hotels = useAppSelector((state: any) => state.allHotels.allHotels)
  const totalStays = hotels.length

  return (
    <div className='TopHome_component'>
      <div className='TopH_divStayIn'>
        <h1>Stays in</h1>
      </div>

      <div className='TopH_divStayNums'>
        <span>{totalStays}+ stays</span>
      </div>
    </div>
  )
}

export default TopHome