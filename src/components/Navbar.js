import React from 'react'
import {Link } from 'react-router-dom'
import { useStore } from '../store'
import { Dropdown } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
const Navbar = () => {
    const nav = document.querySelector('.nav1')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active1');
    } else {
        nav.classList.remove('active1');
    }
}
const currentName = useStore((state) => state.currentName);
const { setCurrentName } = useStore();


const CustomDropdown = ({ ...props }) => (
  <Dropdown {...props} >
    <Dropdown.Item >View Profile</Dropdown.Item>
    <Dropdown.Item>Registered Events</Dropdown.Item>
    <Dropdown.Item onClick={()=>{setCurrentName('') }}>Signout</Dropdown.Item>
    
   
  </Dropdown>
);
  return (
   <>
     <header>
            <nav class="nav1">
                <div class="container">
                    <h3 class="logo"><Link href="/index.html">Technova22</Link></h3>
                    <ul className='ulnavbar'>
                        <li><Link to="/" class="current">Home</Link></li>
                        <li><Link to="#about">About</Link></li>
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
