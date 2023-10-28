import React from 'react'
import '../styles/about.css'
import cover from '../assets/cover.jpg'
import home from '../assets/back.jpg'
import Skills from '../components/Skills'
import { Link } from 'react-router-dom'


function About() {
  return (
    <div className='aboutPage'>
      <h1 className='Title'>get to know me</h1>
      <div className='me'>
        <div className='paragraph' style={{backgroundImage:`${home}`}}>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
              accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
              molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
              officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
              nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
              error repudiandae fuga? Ipsa laudantium molestias eos sapiente
              officiis modi at sunt excepturi expedita sint? Sed quibusdam
              recusandae alias error harum maxime adipisci amet laborum.
              Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
              cumque velit

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
              accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
              molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
              officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
              nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
              error repudiandae fuga? Ipsa laudantium molestias eos sapiente
              officiis modi at sunt excepturi expedita sint? Sed quibusdam
              recusandae alias error harum maxime adipisci amet laborum.
              Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
              cumque velit
          </p>
        </div>
        <div className='imgCont'>
          <img src={`${cover}`} alt=''></img>
        </div>
      </div>
      <div className='mySkills'>
        <h1 className='Title'>my skills</h1>
        <div className='skills'>
          <Skills/>
          <Skills/>
          <Skills/>
          <Skills/>
          <Skills/>
          <Skills/>
          <Skills/>
          <Skills/>
          <Skills/>
          <Skills/>
        </div>
      </div>
      <button className='btnProjects'><Link to='/projects'>proceed to projects</Link></button>
    </div>
  )
}

export default About