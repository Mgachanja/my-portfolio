import React from 'react'
import home from '../assets/homecontent.jpg'
import '../styles/home.css'
import { Celebration, DocumentScanner, LinkedIn, PhoneEnabled, WavingHand } from '@mui/icons-material'
function Home() {
  return (
    <div className='home'>
          <div className='homeContent'>
            <div className='home-mini-nav'>
              <LinkedIn style={{fontSize:40,color:'skyblue',marginRight:20}}/><DocumentScanner style={{fontSize:35,color: 'white'}}/>
              <h1>Gachanja.Dev</h1>
            </div>
            <div className='intro'>
              <p className='name'>Hey, I'm<span> Gachanja .</span><WavingHand style={{fontSize:50,color:'lightyellow'}}/></p>
              <p className='profession'><span id='me'>I'm a </span><br/><span className='full'>FULL</span><br/><span className='stack'>STACK</span><br/><span className='dev'>DEVELOPER</span></p>
              <p className='description'>i've spent an year building and scaling things for the web<span>.</span><br/>lets connect <Celebration style={{color:'orange'}}/></p> 
            </div>
            <button id='btn'>contact me<PhoneEnabled/></button>
          </div>
    </div>
  )
}

export default Home
