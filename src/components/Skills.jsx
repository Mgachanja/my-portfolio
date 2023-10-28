import React from 'react'
import home from '../assets/back.jpg'
import '../styles/skills.css'
export default function Skills() {
  return (
    <div className='skill'>
        <div className='skillsImg'>
            <img src={`${home}`} alt=''></img>
        </div>
        <div className='skillsName'>
            <p>maajabu hayaa!</p>
        </div>
    </div>
  )
}
