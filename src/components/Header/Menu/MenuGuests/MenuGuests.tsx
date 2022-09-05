import React, {useState} from 'react'
import './MenuGuests.css'

function MenuGuests(props: any) {

  const [countAdult, setCountAdult] = useState(0)
  const [countChil, setCountchil] = useState(0)

  function handleSumAdults() {
    if(countAdult  < 6) {
      setCountAdult(countAdult + 1)
      props.adulSet(countAdult)
    }
  }
  function handleRestAdults() {
    if (countAdult > 0) {
      setCountAdult(countAdult - 1)
      props.adulSet(countAdult)
    }
  }


  return (
    <div>
      <div>
        <span>Adults</span>
        <p>Ages 13 or above</p>
        <div>
          <button onClick={handleRestAdults}>-</button>
          <span>{countAdult}</span>
          <button onClick={handleSumAdults}>+</button>
        </div>
      </div>
    </div>
  )
}

export default MenuGuests