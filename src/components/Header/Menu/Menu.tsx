import React from 'react'
import './Menu.css'
import icon_search from '../../../assets/icon-search-white.png'

function Menu(props:any) {

  function handleClose(){
    props.closeMenu(false)
  }

  console.log(props)

  return (
    // <div className='Menu_component'>
    <div className={props.stateMenu ? 'Menu_component active': 'Menu_component'}>
      <div className='Menu_divContent'>
        <div className='Menu_divBackground'>
          <div className='Menu_divTop'>
            <div className='Menu_top'>
              <div className='Menu_topDivOption divLocation'>
                <span className='Menu_optionSpan'>LOCATION</span>
                <input className='Menu_InputLocation' type="text" placeholder='Add location'/>
              </div>
              <div className='Menu_topDivOption divGuests'>
                <span className='Menu_optionSpan'>GUESTS</span>
                <span>Add guests</span>
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

        <div>
              
        </div>
      </div>
    </div>
  )
}

export default Menu