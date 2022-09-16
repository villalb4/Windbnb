import React from 'react'
import './Menu.css'
import icon_search from '../../../assets/icon-search-white.png'
import MenuGuests from './MenuGuests/MenuGuests'
import {useSelector} from 'react-redux'
import MenuLocation from './MenuLocation/MenuLocation'

function Menu(props:any) {

  const adultsNum = useSelector((state: any) => state.menuCounter.adults)
  const childrenNum = useSelector((state: any) => state.menuCounter.children)

  const guestsTotal = adultsNum + childrenNum;

  function handleClose(){
    props.closeMenu(false)
  };

  return (
    <div className={props.stateMenu ? 'Menu_component active': 'Menu_component'}>
      <div className='Menu_divContent'>
        <div className='Menu_divBackground'>
          <div className='Menu_divTop'>
            <div className='Menu_top'>
              <div className='Menu_topDivOption divLocation'>
                <span className='Menu_optionSpan'>LOCATION</span>
                <input ref={props.refLoc} className='Menu_InputLocation' type="text" placeholder='Add location'/>
              </div>
              <div className='Menu_topDivOptionBorder'>
                <div ref={props.refGue} className='Menu_topDivOption divGuests'>
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
          <div className='Menu_buttonDivLoc'>
            <MenuLocation />
          </div>
          <div className='Menu_buttonDivGue'>
            <MenuGuests />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu