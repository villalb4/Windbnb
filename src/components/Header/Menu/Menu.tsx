import React, { useState } from 'react'
import './Menu.css'
import icon_search from '../../../assets/icon-search-white.png'
import MenuGuests from './MenuGuests/MenuGuests'
import { useAppSelector, useAppDispatch } from '../../../redux/hooks/hooks'
import { setLocationName } from '../../../redux/slice/location'
import { setLocationCondition, setGuestsCondition } from '../../../redux/slice/menuSelect'
import MenuLocation from './MenuLocation/MenuLocation'

function Menu(props:any) {

  const dispatch = useAppDispatch()
  const location = useAppSelector((state: any) => state.location.name)

  const adultsNum = useAppSelector((state: any) => state.menuCounter.adults)
  const childrenNum = useAppSelector((state: any) => state.menuCounter.children)

  const locationState = useAppSelector((state:any) => state.menuSelect.locationCondition)
  const guestsState = useAppSelector((state:any) => state.menuSelect.guestsCondition)

  console.log("guests menu: ",guestsState)
  console.log("location menu: ",locationState)

  const guestsTotal = adultsNum + childrenNum;

  const [inputValue, setInputValue] = useState(location)

  function handleClose(){
    dispatch(setLocationName(inputValue))
    props.closeMenu(false)
  };

  function handleChange(e:any) {
    let value = e.target.value
    setInputValue(value)
  }

  function handleLocation() {
    dispatch(setLocationCondition(true))
    dispatch(setGuestsCondition(false))
  }

  function guestsLocation() {
    dispatch(setGuestsCondition(true))
    dispatch(setLocationCondition(false))
  }

  return (
    <div className={props.stateMenu ? 'Menu_component active': 'Menu_component'}>
      <div className='Menu_divContent'>
        <div className='Menu_divBackground'>
          <div className='Menu_divTop'>
            <div className='Menu_divTopTextButton'>
              <div className='Menu_divTextEdit'>
                <span>Edit your search</span>
              </div>
              <div className='Menu_divButtonX'>
                <button onClick={handleClose}>x</button>
              </div>
            </div>
            <div className='Menu_top'>
              <div className='Menu_topDivOption divLocation' onClick={handleLocation}>
                <span className='Menu_optionSpan'>LOCATION</span>
                <input 
                  ref={props.refLoc}
                  className='Menu_InputLocation'
                  type="text"
                  placeholder='Add location'
                  onChange={handleChange}
                  value={inputValue}
                />
              </div>
              <div className='Menu_topDivOptionBorder'>
                <div ref={props.refGue} className='Menu_topDivOption divGuests' onClick={guestsLocation}>
                  <span className='Menu_optionSpan'>GUESTS</span>
                  <span className={guestsTotal >= 1 ? 'Menu_placeHolderSpan active' : 'Menu_placeHolderSpan'}>
                    {guestsTotal >= 1 ? `${guestsTotal} guests` : "Add guests"}
                  </span>
                </div>
              </div>
              <div className='Menu_topDivOption divSearch'>
                <button className='Menu_SearchButton' onClick={handleClose}>
                  <div className='Menu_divIconSearch'>
                    <img className='Menu_iconSearch' src={icon_search} alt="" />
                  </div>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='Menu_bottom'>
          <div className={locationState ? 'Menu_buttonDivLoc active' : 'Menu_buttonDivLoc'}>
            <MenuLocation input={setInputValue} stateValue={inputValue}/>
          </div>
          <div className={guestsState ? 'Menu_buttonDivGue active' : 'Menu_buttonDivGue'}>
            <MenuGuests />
          </div>
        </div>

        <div className='Menu_topDivOption divSearchResponsive'>
          <button className='Menu_SearchButton' onClick={handleClose}>
            <div className='Menu_divIconSearch'>
              <img className='Menu_iconSearch' src={icon_search} alt="" />
            </div>
            Search
          </button>
        </div>

      </div>
    </div>
  )
}

export default Menu