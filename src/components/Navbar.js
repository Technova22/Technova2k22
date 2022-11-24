import React,{useRef} from 'react'
import {Link } from 'react-router-dom'
import { useStore } from '../store'
import { Dropdown } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import Home from './Home';
import About from './About';
// import About from './About';
const Navbar = () => {
  const refer = useRef(null);
    // const nav = document.querySelector('.nav1')
    // const nav1 = ref.current;
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY >  150) {
        refer.current.classList.add('active1');
    } else {
        refer.current.classList.remove('active1');
    }
}
const currentName = useStore((state) => state.currentName);
const { setCurrentName ,setCurrentEmail} = useStore();


const CustomDropdown = ({ ...props }) => (
  <Dropdown {...props} >
    <Link to='/profile'><Dropdown.Item >View Profile</Dropdown.Item></Link>
    
    <Dropdown.Item onClick={()=>{setCurrentName('') ;setCurrentEmail('')}}>Signout</Dropdown.Item>
    
   
  </Dropdown>
);
  return (
   <>
     <header>
            <nav class="nav1" ref={refer}>
                <div class="container">
                    <h3 class="logo"><Link href="/">Technova22</Link></h3>
                    <ul className='ulnavbar'>
                        <li><Link to="/" class="current">Home</Link></li>
                        <li><a href="#about">ABout</a></li>
                        <li><Link to="./eventDetails.html">Events</Link></li>
                        <li><Link to="#">Gallery</Link></li>
                        <li><Link to="#">Contact</Link></li>
                        {
                            
                          (currentName =='') ?
                        <li><Link to="/signup" ><button class="btn4">Sign Up</button></Link></li>     
                     :
                       <CustomDropdown title={currentName} trigger={['click', 'hover']} /> 
 
                    
                      
                     
                        }
                    </ul>
                </div>
            </nav>
        </header>
      
   </>
  )
}

export default Navbar
