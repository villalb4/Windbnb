import React, {useState} from 'react'
import './Header.css'
import Searchbar from './Searchbar/Searchbar'
import Menu from './Menu/Menu'

// ----- images -----
import logo from '../../assets/logo.svg'

function Header() {

  const [openMenu, setOpenMenu] = useState(false)

  function handleMenuOpen(e:boolean) {
    setOpenMenu(e)
  }

  function handleMenuClose(e:boolean) {
    setOpenMenu(e)
  }

  return (
    <header>
      <div>
        <Menu  closeMenu={handleMenuClose} stateMenu={openMenu}/>
      </div>
      <div className='Header_divContent'>
        <div>
          <img className='Header_logo' src={logo} alt="" />
        </div>
        <nav>
          <Searchbar openMenu={handleMenuOpen}/>
        </nav>
      </div>
    </header>
  )
}

export default Header