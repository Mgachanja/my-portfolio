import '../styles/about.css'
import {motion} from 'framer-motion'
import { me, mySkills,other } from '../helpers/Me'
import Skills from '../components/Skills'
import { Link } from 'react-router-dom'

function About() {

  


  return (
    <div className='aboutPage'>
    <h1 className='page'>About<span>.</span></h1>
    <div className='line'></div>
      <div className='me'>
        <motion.div
          initial={{ opacity: 0, y:'-100%'}}
            whileInView={{opacity:1 ,y:0 }}
            transition={{ duration: 1.5 }} 
         className='paragraph' >
        {
          me.map((item,index)=>
            <div key={index}>
              <h3>{item.heading}</h3>
              <p>{item.content}</p>
            </div>
          )
        }
        </motion.div>
      </div>
      <div className='mySkills'>
        <h3 className='Title'>my skills</h3>
        <motion.div
            initial={{ opacity: 0, x: '-100%'}}
            whileInView={{opacity:1 ,x:0 }}
            transition={{ duration: 2 }}    // Animation duration
        
         className='skills1'>

        {mySkills.map((item)=>
          <Skills img={`${item.Image}`} name={item.TechName}/>
          )
        }
        </motion.div>
        <h1 className='Title'>learning the following skills currently :</h1>
        <motion.div 
         initial={{ opacity: 0, x: '100%', }}
            whileInView={{opacity:1 ,x:0,}}
            transition={{ duration: 2 }}
        className='skills2'>
        {other.map((item)=>
        <Skills img={`${item.Image}`} name={item.TechName}/>
        )}
        </motion.div>
      </div>
      <button className='btnProjects'><Link to='/projects'>proceed to projects</Link></button>
       
    </div>
  )
}

export default About