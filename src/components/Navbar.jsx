import {useState} from 'react'
import {Link} from 'react-router-dom'
import '../styles/navbar.css'
import logo from '../assets/logo.jpg'
import { Reorder } from '@mui/icons-material'

function Navbar() {

 

  return (
   <div className='navbar'>
    <img src={`${logo}`} alt='logo'></img>
    <button><Reorder/></button>
    <p>Gachanja.dev</p>
    <div className='navLinks'>
      <Link to='/home'>Home</Link>
      <Link to='/projects'>projects</Link>
      <Link to='/about'>About Me</Link>
      <Link to='/contact'>Contact</Link>
    </div>
   </div>
  )
}

export default Navbar