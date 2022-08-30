import React, { useEffect, useState } from 'react'
import{API_KEY,imageUrl} from '../../Constants/Constants'
import axios from '../../axios'
import './Banner.css'
function Banner() {
    const [movie, setMovie] = useState()
  useEffect(() => {
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data.results[0])
        setMovie(response.data.results[0])
      })
  }, [])
  return (
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner_buttons'>
                <button className='buttun'>Play</button>
                <button className='buttun'>My list</button>
            </div>
            <h1 className='discription'>Top Gun: Maverick is a 2022 American action film directed by Joseph Kosinski. It is the sequel to the 1986 film Top Gun and was written by Ehren Kruger, Eric Warren Singer, and Christopher McQuarrie, based on a story by Peter Craig and Justin Marks</h1>
        </div>
        <div className='fade_bottom'>

        </div>
        
    </div>
  )
}

export default Banner