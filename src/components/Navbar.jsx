import {useState} from 'react'
import {Link} from 'react-router-dom'
import '../styles/navbar.css'
import logo from '../assets/logo.jpg'
import { CasesOutlined, Home,  PhoneCallback, Reorder, VerifiedUserRounded } from '@mui/icons-material'

function Navbar() {
  const[ToggleMobileMenu,setToggleMobileMenu] = useState(false)
  const mobileMenu=()=>{ setToggleMobileMenu(!ToggleMobileMenu)}
  return (
  <>
   <div className='navbar'>
    <img src={`${logo}`} alt='logo'></img>
    <button onClick={mobileMenu}><Reorder/></button>
    <p>Gachanja.dev</p>
    <div className='navLinks'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About Me</Link>
      <Link to='/projects'>projects</Link>
      <Link to='/contact'>Contact</Link>
    </div>
    </div>
    <div className={ToggleMobileMenu?'showMobileMenu':'closeMobileMenu'}>
      <div className='mobileLinks'>
      <Link to='/'><Home/>  Home</Link>
      <Link to='/about'><VerifiedUserRounded/>  About Me</Link>
      <Link to='/projects'><CasesOutlined/>  Projects</Link>
      <Link to='/contact'><PhoneCallback/>  Contact</Link>
      </div>
    </div>
   </>
  )
}

export default Navbar