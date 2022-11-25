import React from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../store'
import { Dropdown } from 'rsuite';
import '../Navbar1.css'
import 'rsuite/dist/rsuite.min.css';
const Navbar1 = () => {
    const currentName = useStore((state) => state.currentName);
const { setCurrentName ,setCurrentEmail} = useStore();


const CustomDropdown = ({ ...props }) => (
  <Dropdown {...props} >
    <Link to='/profile'><Dropdown.Item >View Profile</Dropdown.Item></Link>
    
    <Link to='/'><Dropdown.Item onClick={()=>{setCurrentName('');setCurrentEmail('') }}>Signout</Dropdown.Item></Link>    
   
  </Dropdown>
);
  return (
    <header>
 
        <nav class="navnew">
        <div class="containernew">
            <h3 class="logo"><Link href="/">Technova22</Link></h3>
            <ul>
            <li><Link to="/" class="current">Home</Link></li>
              <li><a href="#about">ABout</a></li>
              <li><Link to="/AllEvent">Events</Link></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><Link to="/contact">Contact</Link></li>
                        {
                            
                            (currentName ==='') ?
                          <li><Link to="/signup" ><button class="btn4">Sign Up</button></Link></li>     
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