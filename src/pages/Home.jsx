import React from 'react'
import home from '../assets/homecontent.jpg'
import '../styles/home.css'
import { DocumentScanner, LinkedIn } from '@mui/icons-material'
function Home() {
  return (
    <div className='home'>
      
          <div className='homeContent'>
            <h1>Hello !</h1>
            <p id='name'>My name is<span> Gachanja.</span></p>
            <p>I'm a fullstack developer</p>
            </div>
            <img src={`${home}`} alt=''></img>
              <div className='button-links'>
                  <button>check my CV<div className='innerLogos'><DocumentScanner/></div></button>
                  <button>linkedIn<div className='innerLogos'><LinkedIn/></div></button>
              </div>
          </div>
  )
}

export default Home
