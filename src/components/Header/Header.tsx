import React from 'react'
import './Header.css'
import Searchbar from './Searchbar/Searchbar'

// ----- images -----
import logo from '../../assets/logo.svg'

function Header() {
  return (
    <header>
      <div className='Header_divContent'>
        <div>
          <img className='Header_logo' src={logo} alt="" />
        </div>
        <nav>
          <Searchbar />
        </nav>
      </div>
    </header>
  )
}

export default Header