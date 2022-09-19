import React from 'react'
import { useAppSelector } from '../../../redux/hooks/hooks'
import './TopHome.css'


function TopHome() {

  const hotels = useAppSelector((state: any) => state.allHotels.allHotels)
  const totalStays = hotels.length

  const location = useAppSelector((state:any) => state.location.name)

  return (
    <div className='TopHome_component'>
      <div className='TopH_divStayIn'>
        <h1>{location.length === 0 ? 'Add location' : `Stays in ${location}`}</h1>
      </div>

      <div className='TopH_divStayNums'>
        <span>{totalStays}+ stays</span>
      </div>
    </div>
  )
}

export default TopHome