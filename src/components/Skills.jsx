import React from 'react'
import '../styles/skills.css'
export default function Skills({img,name}) {
  return (
    <div className='skill'>
        <div className='skillsImg'>
            <img src={`${img}`} alt=''></img>
        </div>
        <div className='skillsName'>
            <p>{name}</p>
        </div>
    </div>
  )
}
