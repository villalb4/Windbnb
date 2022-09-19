import React from 'react'
import { useAppSelector } from '../../../../redux/hooks/hooks'
import './MenuLocation.css'
import icon_location from '../../../../assets/icon_location.png'

function MenuLocation(props:any) {

  const citys = useAppSelector((state: any) => state.citys.allCitys)

  console.log(props.stateValue)

  const hola = citys.filter((e:any) => {
    const cityName = e.name.toLowerCase()
    return cityName.includes(props.stateValue.toLowerCase())
  })

  console.log(hola)

  function handleSelect(e:any) {
    const value = e.target.value
    props.input(value)
  }

  return (
    <div>
      {hola?.slice(0,4).map((e:any, i:any) => {
        return(
          <button
            className='MenuLocation_divMapDefault'
            key={i}
            value={e.name}
            onClick={handleSelect}
          >
            <img src={icon_location} alt="" />
            <span>{`${e.name}, Argentina`}</span>
          </button>
        )
      })}
    </div>
  )
}

export default MenuLocation