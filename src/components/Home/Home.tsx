import React, {useEffect} from 'react'
import TopHome from './TopHome/TopHome'
import Cards from './Cards/Cards'
import { useAppDispatch , useAppSelector } from '../../redux/hooks/hooks'
import { getHotels } from '../../redux/slice/allHotels'
import './Home.css'

function Home() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getHotels())
  }, [])

  const hoteles = useAppSelector((state: any) => state.allHotels.allHotels)

  console.log(hoteles)

  return (
    <main>
      <TopHome />
      <Cards />
    </main>
  )
}

export default Home