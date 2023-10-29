import {useState} from 'react'
import {Link} from 'react-router-dom'
import '../styles/navbar.css'
import logo from '../assets/logo.jpg'
import { CasesOutlined, DocumentScannerTwoTone, Home,  PhoneCallback, Reorder, VerifiedUserRounded } from '@mui/icons-material'

function Navbar() {
  const[ToggleMobileMenu,setToggleMobileMenu] = useState(false)
  const mobileMenu=()=>{ setToggleMobileMenu(!ToggleMobileMenu)}
  return (
  <>
   <div className='navbar'>
    <div className='logos'>
      <img src={logo} alt=''></img>
    </div>
    <ul className='navList'>
      <div className='icon'>
        <Home style={{fontSize:50 ,color:'azure'}}/>
      </div>

      <div className='icon'>
        <VerifiedUserRounded style={{fontSize:50 ,color:'azure'}}/>
      </div>

      <div className='icon'>
        <CasesOutlined style={{fontSize:50 ,color:'azure'}}/>
      </div>
      
       <div className='icon'>
        <DocumentScannerTwoTone style={{fontSize:50 ,color:'azure'}}/>
      </div>
      
       <div className='icon'>
        <PhoneCallback style={{fontSize:50 ,color:'azure'}}/>
      </div>

    </ul>
   </div>
   </>
  )
}

export default Navbar