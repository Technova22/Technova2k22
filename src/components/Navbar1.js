import React from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../store'
import { Dropdown } from 'rsuite';
import '../Navbar1.css'
import 'rsuite/dist/rsuite.min.css';
const Navbar1 = () => {
    const currentName = useStore((state) => state.currentName);
const { setCurrentName } = useStore();


const CustomDropdown = ({ ...props }) => (
  <Dropdown {...props} >
    <Link to='/profile'><Dropdown.Item >View Profile</Dropdown.Item></Link>
   
    <Dropdown.Item onClick={()=>{setCurrentName('') }}>Signout</Dropdown.Item>
    
   
  </Dropdown>
);
  return (
    <div>
        <nav class="navnew">
        <div class="containernew">
            <h3 class="logo"><Link href="/">Technova22</Link></h3>
            <ul>
            <li>
                <Link to="/" class="current">Home</Link></li>
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
    </div>
  )
}

export default Navbar1