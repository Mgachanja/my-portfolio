import React from 'react'
import '../styles/projectContainer.css'
function ProjectsContainer({title,image,description,link}) {
  return (
    <div className='pContainer'>
        <h3>{title}</h3>
        <div className='imgContainer'>
            <img src={`${image}`} alt=''></img>
        </div>
        <div className='description'>
        <p>{description}</p>
         <a href={link} className='section' >check out the code for this project on my github!!</a>
        </div>
    </div>
  )
}

export default ProjectsContainer