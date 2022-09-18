import React from 'react'
import './MenuLocation.css'
import icon_location from '../../../../assets/icon_location.png'

function MenuLocation(props:any) {

  const citys: object[] = [
    {name: 'Buenos Aires'},
    {name: 'Mar Del Plata'},
    {name: 'Cordoba'},
    {name: 'Tierra Del Fuego'}
  ]

  
  function handleSelect(e:any) {
    const value = e.target.value
    props.input(value)

  }

  return (
    <div>
      {citys.map((e:any, i:any) => {
        return(
          <button
            className='MenuLocation_divMapDefault'
            key={i}
            value={e.name}
            onClick={handleSelect}
          >
            <img src={icon_location} alt="" />
            <span>{e.name}</span>
          </button>
        )
      })}
    </div>
  )
}

export default MenuLocation