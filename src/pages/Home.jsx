import React from 'react'
import '../styles/home.css'
import { Celebration, DocumentScanner, LinkedIn, WavingHand } from '@mui/icons-material'
import Stars from '../components/Stars'
import { TypingText } from '../helpers/TextAnimator'
function Home() {

  const desc="i've spent an year building and scaling things for the web ."
  return (
    <div className='home'>
          <div className='homeContent'>
            <div className='home-mini-nav'>
              <LinkedIn style={{fontSize:20,color:'skyblue',marginRight:20}}/><DocumentScanner style={{fontSize:25,color: 'white'}}/>
              <h1>Gachanja.Dev</h1>
            </div>
            <Stars/>
            <div className='intro'>
              <p className='name'>Hey, I'm<span> Gachanja .</span><WavingHand style={{fontSize:50,color:'lightyellow'}}/></p>
              <p className='profession'><span id='me'>I'm a </span><br/><span className='full'>FULL</span><br/><span className='stack'>STACK</span><br/><span className='dev'>DEVELOPER</span></p>
              <p className='description'><TypingText text={desc}/><br/>lets connect <Celebration style={{color:'orange'}}/></p> 
            </div>
          </div>
    </div>
  )
}

export default Home
