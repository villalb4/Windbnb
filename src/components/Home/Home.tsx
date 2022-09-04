import React, {useEffect} from 'react'
import { useDispatch , useSelector} from 'react-redux'
import './Home.css'
import TopHome from './TopHome/TopHome'
import { setAllHotels } from '../../redux/slice/allHotels'

function Home() {

  const dispatch = useDispatch();

  // useEffect(() => {
  // })

  const hoteles = useSelector((state:any) => state)
  console.log(hoteles.allHotels.allHotels)

  return (
    <main>
      <TopHome />
    </main>
  )
}

export default Home