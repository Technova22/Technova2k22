import React, { useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useStore } from '../store'
import { Dropdown } from 'rsuite';
import $ from 'jquery'; 
import '../Navbar.css'
import 'rsuite/dist/rsuite.min.css';
const Navbar1 = () => {
    const currentName = useStore((state) => state.currentName);
const { setCurrentName ,setCurrentEmail} = useStore();
const location = useLocation();
console.log(location)
const refer = useRef(null);
window.addEventListener('scroll', fixNav)
function fixNav() {
    if(window.scrollY >  150) {
        refer.current.classList.add('active1');
    } else {
        refer.current.classList.remove('active1');
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



  return (
    <header>
 
        <nav className="navnew" ref={refer}>
        <div class="containernew">
            <h3 class="logo"><Link href="/">Technova22</Link></h3>
            <ul className='navbar-nav2'>
            <li><NavLink to="/"  activeClassName="active" exact >Home</NavLink></li>
              <li><a href="#about"  className={location.hash=='#about'?'active':''}>ABout</a></li>
              <li><NavLink to="/AllEvent" activeClassName="active" exact >Events</NavLink></li>
              <li><a href="#gallery" className={location.hash=='#gallery'?'active':''}>Gallery</a></li>
              <li><NavLink to="/contact" activeClassName="active" exact>Contact</NavLink></li>
                        {
                            
                            (currentName ==='') ?
                          <li><Link to="/signup" ><button class="btn8">Sign Up</button></Link></li>     
                       :
                       <CustomDropdown  title={currentName} trigger={['click', 'hover']} />
                        
                       
                          }
            </ul>
        </div>
    </nav>

    </header>
  )
}

export default Navbar1