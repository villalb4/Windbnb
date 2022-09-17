import React from 'react'
import TopHome from './TopHome/TopHome'
import Cards from './Cards/Cards'
import './Home.css'

function Home() {
  return (
    <main>
      <TopHome />
      <Cards />
      <p className='Home_credits'>created by <a href="https://github.com/villalb4" target="_blanck" className='Home_spanUser'>villalb4</a> - devChallenges.io</p>
    </main>
  )
}

export default Home