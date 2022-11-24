import React from 'react'
import { Link,useHistory } from 'react-router-dom'
import { useStore } from '../store'

const Events = () => {
  const history = useHistory();
  const currentName = useStore((state) => state.currentName);
  return (
    <>
     <section class="work" id="work">
        
        <div>
        <h2 class="heading"><i class="fas fa-laptop-code"></i> Events <span></span></h2>
    </div>
      

            
<div class="page-content">

    
    <div class="card">
      <div class="content" >
        <h2 class="heade" style={{color:"white"}}>Mountain View</h2>
        <p class="description" style={{color:"white"}}>Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
          
          <Link to="/EventDetail/0"><button class="btnsign" id="0">Register</button></Link>
         
      </div>
    </div>
    <div class="card">
      <div class="content">
        <h2 class="heade" style={{color:"white"}}>To The Beach</h2>
        <p class="description" style={{color:"white"}}>Plan your next beach trip with these fabulous destinations</p>
        <Link to="/EventDetail/1"><button class="btnsign" id="1">Register</button></Link>
      </div>
    </div>
    <div class="card" style={{float: "right"}}>
      <div class="content">
        <h2 class="heade" style={{color:"white"}}>Desert Destinations</h2>
        <p class="description" style={{color:"white"}}>It's the desert you've always dreamed of</p>
        <Link to="/EventDetail/2"><button class="btnsign" id="2">Register</button></Link>
      </div>
    </div>
    
    <div class="card">
      <div class="content">
        <h2 class="heade" style={{color:"white"}}>Explore The Galaxy</h2>
        <p class="description" style={{color:"white"}}>Seriously, straight up, just blast off into outer space today</p>
        <Link to="/EventDetail/3"><button class="btnsign" id="3">Register</button></Link>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <h2 class="heade" style={{color:"white"}}>Explore The Galaxy</h2>
        <p class="description" style={{color:"white"}}>Seriously, straight up, just blast off into outer space today</p>
        <Link to="/EventDetail/4"><button class="btnsign" id="4">Register</button></Link>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <h2 class="heade" style={{color:"white"}}>Explore The Galaxy</h2>
        <p class="description" style={{color:"white"}}>Seriously, straight up, just blast off into outer space today</p>
        <Link to="/EventDetail/5"><button class="btnsign" id="5">Register</button></Link>
      </div>
    </div>
</div>
    {/* <div class="card">
      <div class="content">
        <h2 class="heade" style={{color:"white"}}>Explore The Galaxy</h2>
        <p class="description" style={{color:"white"}}>Seriously, straight up, just blast off into outer space today</p>
        <button class="btn10" id="6
        ">Register</button>
      </div>
    </div> */}
{/* </div> */}


        <div class="viewall" style={{marginTop:'1rem'}}>
          <a href="projects/index.html" class="btn10" ><span>View All</span>
            <i class="fas fa-arrow-right"></i>
        </a>
        </div>
        
        </section>
 
    </>
  )
}

export default Events
