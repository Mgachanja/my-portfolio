import React from 'react'
import background from '../assets/back.jpg'
import '../styles/home.css'
function Home() {
  return (
    <div className='home'>
    <div className='bg' style={{backgroundImage:`url(${background})`}}>
       <h1>hello about page</h1>
       </div>
    </div>
  )
}

export default Home
