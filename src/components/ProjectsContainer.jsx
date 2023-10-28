import React from 'react'
import image from '../assets/homecontent.jpg'
import '../styles/projectContainer.css'
function ProjectsContainer() {
  return (
    <div className='pContainer'>
        <h3>project title</h3>
        <div className='imgContainer'>
            <img src={`${image}`} alt=''></img>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum!
          </p>
          <p>check out the code for the project</p>
    </div>
  )
}

export default ProjectsContainer