import React from 'react'
import ProjectsContainer from '../components/ProjectsContainer'
import '../styles/projects.css'
import { CasesOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'
function Projects() {
  return (
    <div className='projectsPage'>
      <h1 className='title'>MY PROJECTS<CasesOutlined/></h1>
      <div className='projectsList'>
        <ProjectsContainer/>
        <ProjectsContainer/>
        <ProjectsContainer/>
        <ProjectsContainer/>
        <ProjectsContainer/>
        <ProjectsContainer/>
      </div>
      <Link to='/contact'><button>reach out to me!!</button></Link>
    </div>
  )
}

export default Projects