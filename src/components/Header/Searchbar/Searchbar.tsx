import React, {useRef} from 'react'
import { useSelector } from 'react-redux'
import './Searchbar.css'
import icon_search from '../../../assets/icon-search.png'

function Searchbar(props:any) {

  const adultsNum = useSelector((state: any) => state.menuCounter.adults)
  const childrenNum = useSelector((state: any) => state.menuCounter.children)
  const guestsTotal = adultsNum + childrenNum;

  function handleOpen() {
    props.openMenu(true)
  }

  const handleLocationFocus = () => {
    props.openMenu(true)
    setTimeout(function() {
      props.refLoc.current.focus()
    }, 100)
  }

  const handleGuestsFocus = () => {
    props.openMenu(true)
    setTimeout(function() {
      props.refGue.current.focus()
    }, 100)
  }

  return (
    <div className='Header_divSearch'>
      <div className='Header_search'>
        <div className='Header_divSearchLocation' onClick={handleLocationFocus}>
          <span>Add location</span>
        </div>
        <div className='Header_divSearchGuests' onClick={handleGuestsFocus}>
          <span>{guestsTotal >= 1 ? `${guestsTotal} guests` : "Add guests"}</span>
        </div>
        <div className='Header_divSearchIcon' onClick={handleOpen}>
          <img className='Header_searchIcon' src={icon_search} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Searchbar