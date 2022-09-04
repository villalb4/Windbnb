import React, {useRef} from 'react'
import './Searchbar.css'

// ----- images -----
import icon_search from '../../../assets/icon-search.png'

function Searchbar(props:any) {

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
          <span>Add guests</span>
        </div>
        <div className='Header_divSearchIcon' onClick={handleOpen}>
          <img className='Header_searchIcon' src={icon_search} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Searchbar