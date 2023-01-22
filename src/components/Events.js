import React from 'react'
import { Link} from 'react-router-dom'
// import { useStore } from '../store'
import { featured } from '../DataSub.js'
import { AnimationOnScroll } from 'react-animation-on-scroll';
const Events = () => {
  // console.log(featured)
  // const history = useHistory();
  // const currentName = useStore((state) => state.currentName);
  return (
    <>
     <section class="work" id="work">
        
        <div>
        <h2 class="heading" style={{margin:'5% 0'}}><i class="fas fa-laptop-code"></i> EVENTS <span></span></h2>
    </div>
      

            
<div class="page-content">

   { featured.map((item)=>{
    return (
      // <AnimationOnScroll animateIn="animate__fadeInRight">
      <div class="card1">
      <div class="content" >
        <h2 class="heade" style={{color:"white"}}>{item.eventName}</h2>
        <p class="description" style={{color:"white"}}>{item.eventDescription.slice(0,100)}</p>
          
          <Link to={`/EventDetail/${item.id}`}><button class="btnsign" id={item.id}>Register</button></Link>
         
      </div>
      </div>
      // </AnimationOnScroll>
    )
   })}
   
</div>
 


        <div class="viewall">
          <Link to="/AllEvent" class="btn10" ><span>View All</span>
          
            <i class="fas fa-arrow-right" style={{
              padding:'3px'
            }
            }></i>
            </Link>
        </div>
        
        </section>
 
    </>
  )
}

export default Events
