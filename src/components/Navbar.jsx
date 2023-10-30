import {useState} from 'react'
import {Link} from 'react-router-dom'
import '../styles/navbar.css'
import logo from '../assets/logo.jpg'
import { CasesOutlined, DocumentScannerTwoTone, Home,  PhoneCallback, Reorder, VerifiedUserRounded } from '@mui/icons-material'

function Navbar() {
  const[ToggleMobileMenu,setToggleMobileMenu] = useState(false)
  const mobileMenu=()=>{ setToggleMobileMenu(!ToggleMobileMenu)}
  return (
  
   <div className='navbar'>
    <div className='logo'>
      <img src={logo} alt=''></img>
      <h2>Gachanja.Dev</h2>
    </div>
    <ul className='navList'>
      <div className='icon'>
        <Home style={{fontSize:40 }}/>
        <Link to = '/'>Home</Link>

      </div>

      <div className='icon'>
        <VerifiedUserRounded style={{fontSize:40 }}/>
        <Link to = '/about' className=''>About</Link>
      </div>

      <div className='icon'>
        <CasesOutlined style={{fontSize:40 }}/>
        <Link to = '/projects'>Projects</Link>

      </div>
      
       <div className='icon'>
        <DocumentScannerTwoTone style={{fontSize:40 }}/>
        <Link to = '/blog'>Blog</Link>

      </div>
      
       <div className='icon'>
        <PhoneCallback style={{fontSize:40 ,}}/>
        <Link to = '/contact'>Contact</Link>
        
      </div>

    </ul>
   </div>
  
  )
}

export default Navbar