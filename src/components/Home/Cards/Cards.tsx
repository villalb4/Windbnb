import React, {useEffect} from 'react'
import { getHotels } from '../../../redux/slice/allHotels'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks'
import './Cards.css'
import star from '../../../assets/icon-star.png'


function Cards() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getHotels())
  }, [dispatch])

  const hoteles = useAppSelector((state: any) => state.allHotels.allHotels)

  console.log("hotels :", hoteles)

  return (
    <div className='Cards_component'>
      <div className='Cards_divContent'>
        {hoteles?.map((e:any, i:number) => {
          return(
            <div key={i} className="Cards_card">
              <div className='Cards_divStayImage'>
                <img src={e.image} alt="Stay" />
              </div>
              <div className={e.super_host ? 'Cards_divStayInfo superHost' : 'Cards_divStayInfo'}>
                <div className='Cards_divStayText'>
                  {e.super_host && <span className='Cards_superHostButton'>SUPER HOST</span>}
                  {e.super_host && <span className='Cards_spButton'>SH</span>}
                  <p>Entire apartment. 2beds</p>
                </div>
                <div className='Cards_divStayRating'>
                  <img src={star} alt="" />
                  <span>{e.rating}</span>
                </div>
              </div>
              <p>{e.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cards
