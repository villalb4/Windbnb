import React, {useRef, useState} from 'react'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hooks'
import { setLocationName } from '../../../../redux/slice/location'
import './MenuLocation.css'
import icon_location from '../../../../assets/icon_location.png'

function MenuLocation() {

  const dispatch = useAppDispatch()
  const location = useAppSelector((state:any) => state.location.name)

  const citys: object[] = [
    {name: 'Buenos Aires'},
    {name: 'Mar Del Plata'},
    {name: 'Cordoba'},
    {name: 'Tierra Del Fuego'}
  ]

  return (
    <div>
      {citys.map((e:any, i:any) => {
        return(
          <div className='MenuLocation_divMapDefault' key={i}>
            <img src={icon_location} alt="" />
            <span>{e.name}</span>
          </div>
        )
      })}
    </div>
  )
}

export default MenuLocation