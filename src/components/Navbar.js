import React, { useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useStore } from '../store'
import { Dropdown } from 'rsuite';
import $ from 'jquery'; 
import '../Navbar.css'
import 'rsuite/dist/rsuite.min.css';
import { useMediaQuery } from 'react-responsive'
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';

const Navbar1 = () => {
  const currentName = useStore((state) => state.currentName);
  const { setCurrentName, setCurrentEmail } = useStore();
  const location = useLocation();
  console.log(location.pathname)
  const refer = useRef(null);
  const referburger = useRef(null);
  window.addEventListener('scroll', fixNav)
  function fixNav() {
    if (window.scrollY > 150) {
      refer.current.classList.add('active1');
      referburger.current.classList.remove('navbar-dark');
      referburger.current.classList.add('navbar-light');
    } else {
      refer.current.classList.remove('active1');
      referburger.current.classList.remove('navbar-light');
      referburger.current.classList.add('navbar-dark');
    }
}

useEffect(()=>{
     if(location.pathname =='/' || location.pathname == '/contact'){
      refer.current.classList.remove('navbg');
       refer.current.classList.add('navbg1');
       
     }
     else{
      refer.current.classList.remove('navbg1');
      refer.current.classList.add('navbg');
     }
     
    
},[location])
const CustomDropdown = ({ ...props }) => (
  <Dropdown {...props} >
    <Link to='/profile'><Dropdown.Item >View Profile</Dropdown.Item></Link>
    
    <Link to='/'><Dropdown.Item onClick={()=>{setCurrentName('');setCurrentEmail('') }}>Signout</Dropdown.Item></Link>    
   
  </Dropdown>
);


const isMobile = useMediaQuery({
  query: '(max-width: 600px)'
})
const isDesktop = useMediaQuery({
  query: '(min-width: 600px)'
})
const isTab = useMediaQuery({
  query: '(max-width:1200px)'
})
// const navLinks = document.querySelectorAll('.nav-item')
// const menuToggle = document.getElementById('navbarSupportedContent')
// const bsCollapse = new useBootstrapPrefix.Collapse(menuToggle)
// navLinks.forEach((l) => {
//     l.addEventListener('click', () => { bsCollapse.toggle() })
// })
  return (
    <header>
{/* <div class="collapse" id="navbarToggleExternalContent">
  <div class="bg-dark p-4">
    <h5 class="text-white h4">Collapsed content</h5>
    <span class="text-muted">Toggleable via the navbar brand.</span>
  </div>
</div>
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav> */}
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <div class="p-4" style={{background:'black'}}>
  <ul className='navbar-nav ms-auto  my-auto p-0' style={{opacity:'0'}}>
            <li className='nav-item' style={{marginTop:'30px',color:'white',}}>Home</li>
            <li className='nav-item'>About</li>
            <li className='nav-item'>Events</li>
          
            <li className='nav-item'>Contact</li>
            <li className='nav-item'>Brochure</li>
            <li className='nav-item'>Schedule</li>
            <br/>
         
           
          </ul>
  </div>
</div>
      <nav className="d-block navnew navbar navbar-expand-lg w-100w" ref={refer} style={{zIndex:'99'}}>
        <div class="containernew row ">
         
          <h3 className="logoweb me-auto col" style={{fontSize:isMobile ?'22px':isTab ? '20px': '30px' }}><Link to="/">Technova-2k22</Link></h3>
        
            {/* <button class="ms-auto navbar-toggler w-auto" align="right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> */}
            <button class="ms-auto navbar-toggler w-auto" align="right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar navbar-toggler-icon"  ref={referburger}></span>
          </button>
          <div class="ms-auto collapse navbar-collapse w-auto" id="navbarSupportedContent">
          <ul className='navbar-nav ms-auto  my-auto p-0'>
            <li className='nav-item'><Link to="/"  activeClassName="active"  exact>Home</Link></li>
            <li className='nav-item'><a href="#about" className={location.hash=='#about'?'active':''}>About</a></li>
            <li className='nav-item'><Link to="/AllEvent"   activeClassName="active" exact>Events</Link></li>
          
            <li className='nav-item'><Link to="/contact" activeClassName="active" exact>Contact</Link></li>
            <li className='nav-item'><a activeClassName="active" href="/images/brochure.pdf" target="_blank" exact>Brochure</a></li>
            <li className='nav-item'><a activeClassName="active" href="/images/schedule.pdf" target="_blank" exact>Schedule</a></li>
         
            {

              (currentName === '') ?
                <li><Link to="/signup" ><button class="btn8  text-light">Sign In</button></Link></li>
       
                :
                <CustomDropdown title={currentName} trigger={['click', 'hover']} />


            }
            
          </ul>
          </div>
        </div>
      </nav>

    </header>
  )
}

export default Navbar1