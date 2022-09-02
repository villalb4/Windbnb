import React from 'react'
import { useDispatch , useSelector} from 'react-redux'
import './Home.css'
import TopHome from './TopHome/TopHome'
import { setAllHotels } from '../../redux/slice/allHotels'
import Menu from '../Header/Menu/Menu'

function Home() {

  const dispatch = useDispatch();

  // const hoteles = useSelector((state:any) => state.setAllHotels.allHotels)
  // console.log(hoteles)

  return (
    <main>
      <Menu />
      <TopHome />
    </main>
  )
}

export default Home