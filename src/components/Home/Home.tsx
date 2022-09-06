import React, {useEffect} from 'react'
import { useDispatch , useSelector} from 'react-redux'
import './Home.css'
import TopHome from './TopHome/TopHome'
import Cards from './Cards/Cards'

function Home() {

  const dispatch = useDispatch();

  // useEffect(() => {
  // })

  // const hoteles = useSelector((state:any) => state)
  // console.log(hoteles.allHotels.allHotels)

  return (
    <main>
      <TopHome />
      <Cards />
    </main>
  )
}

export default Home