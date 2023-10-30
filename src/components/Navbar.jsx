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
    <div className='logo'>
      <img src={logo} alt=''></img>
      <h2>Gachanja.Dev</h2>
    </div>
    <ul className='navList'>
      <div className='icon'>
        <Link to='/' className='icons'> <Home style={{fontSize:40, color:'azure'}}/></Link>
        <Link to = '/'>Home</Link>
      </div>

      <div className='icon'>
      <Link to = '/about' className='icons'><VerifiedUserRounded style={{fontSize:40, color:'azure' }}/></Link>
        <Link to = '/about'>About</Link>
      </div>

      <div className='icon'>
      <Link to = '/projects' className='icons'><CasesOutlined style={{fontSize:40, color:'azure' }}/></Link>
        <Link to = '/projects'>Projects</Link>
      </div>
      
       <div className='icon'>
       <Link to = '/blog' className='icons'><DocumentScannerTwoTone style={{fontSize:40, color:'azure' }}/></Link>
        <Link to = '/blog'>Blog</Link>
      </div>
      
       <div className='icon'>
       <Link to = '/contact' className='icons'><PhoneCallback style={{fontSize:40 , color:'azure'}}/></Link>
        <Link to = '/contact'>Contact</Link>
      </div>
    </ul>
   </div>

   <div className='btn' onClick={mobileMenu}><Reorder style={{color:'azure',fontSize:40}}/></div>
   <div className={ToggleMobileMenu?'showMobileMenu':'hideMobileMenu'}>
   <div className='logo'>
      <img src={logo} alt=''></img>
      <h2>Gachanja.Dev</h2>
    </div>
    <ul className='navList' onClick={mobileMenu}>
      <div className='icon'>
        <Link to='/' className='icons'> <Home style={{fontSize:40, color:'azure'}}/></Link>
        <Link to = '/'>Home</Link>
      </div>

      <div className='icon'>
      <Link to = '/about' className='icons'><VerifiedUserRounded style={{fontSize:40, color:'azure' }}/></Link>
        <Link to = '/about'>About</Link>
      </div>

      <div className='icon'>
      <Link to = '/projects' className='icons'><CasesOutlined style={{fontSize:40, color:'azure' }}/></Link>
        <Link to = '/projects'>Projects</Link>
      </div>
      
       <div className='icon'>
       <Link to = '/blog' className='icons'><DocumentScannerTwoTone style={{fontSize:40, color:'azure' }}/></Link>
        <Link to = '/blog'>Blog</Link>
      </div>
      
       <div className='icon'>
       <Link to = '/contact' className='icons'><PhoneCallback style={{fontSize:40 , color:'azure'}}/></Link>
        <Link to = '/contact'>Contact</Link>
      </div>
    </ul>
   </div>
   </>
  
  )
}

export default Navbar