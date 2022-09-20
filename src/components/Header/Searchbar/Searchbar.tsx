import React from 'react'
import { useAppSelector, useAppDispatch} from '../../../redux/hooks/hooks'
import { setLocationCondition, setGuestsCondition } from '../../../redux/slice/menuSelect'
import './Searchbar.css'
import icon_search from '../../../assets/icon-search.png'

function Searchbar(props:any) {

  const dispatch = useAppDispatch()

  const location = useAppSelector((state:any) => state.location.name)

  const adultsNum = useAppSelector((state: any) => state.menuCounter.adults)
  const childrenNum = useAppSelector((state: any) => state.menuCounter.children)
  const guestsTotal = adultsNum + childrenNum;

  function handleOpen() {
    props.openMenu(true)
  }

  const handleLocationFocus = () => {
    props.openMenu(true)
    setTimeout(function() {
      props.refLoc.current.focus()
    }, 100)
    dispatch(setLocationCondition(true))
    dispatch(setGuestsCondition(false))
  }

  const handleGuestsFocus = () => {
    props.openMenu(true)
    setTimeout(function() {
      props.refGue.current.focus()
    }, 100)
    dispatch(setGuestsCondition(true))
    dispatch(setLocationCondition(false))
  }

  return (
    <div className='Header_divSearch'>
      <div className='Header_search'>
        <div className='Header_divSearchLocation' onClick={handleLocationFocus}>
          <span>{location ? location : 'Add location'}</span>
        </div>
        <div className='Header_divSearchGuests' onClick={handleGuestsFocus}>
          <span className={guestsTotal >=1 ? 'Header_spanTotalGuest active' : 'Header_spanTotalGuest'}>
            {guestsTotal >= 1 ? `${guestsTotal} guests` : "Add guests"}
          </span>
        </div>
        <div className='Header_divSearchIcon' onClick={handleOpen}>
          <img className='Header_searchIcon' src={icon_search} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Searchbar