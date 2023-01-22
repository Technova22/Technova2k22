import { timers } from 'jquery';
import React from 'react'
import { Link, useParams,useHistory } from 'react-router-dom'
import { data } from '../Data';
import '../EventDetail.css'
import { useStore } from '../store'; 
// import imager from eventImage;
// import {Card,CardBody,CardImg,CardText,CardTitle} from 'reactstrap'
const EventDetail = () => {
    const {ide} = useParams();
    const history = useHistory();
    const {id,eventName,eventImage,eventDescription,rules,venue,time,date} = data[ide];
    // console.log(eventDescription);
    // console.log(eventImage);
    const currentName = useStore((state) => state.currentName);
const { setCurrentName } = useStore();
    // let listing = document.querySelector('.rules45');
    // // listing.innerHTML = rules;
    function checker(e,ide){
      e.preventDefault();
      if(currentName.length<=0){
        
            history.push("/signup")
      }
      else{
        history.push(`/TeamReg/${ide}`)
      }
     
    }

    // console.log(ide)
  return (
  //  <div className='body45' >
       <div class={`body45 innercontainer table-responsive`}>
        <section class="about45">
            <div class="banner45"><img src={eventImage} alt="Event image"></img></div>
            <div class="description45" id="desc">
                <h1 id="desgh">{eventName}</h1> <br/><br/>
                <p >{eventDescription}</p>
                <p style={{fontSize:'15px'}}><b>Venue:{venue}</b></p>
               
                <p style={{fontSize:'15px'}}>Date and Time:{date} - {time}</p>
    
               { 
                 
              <Link to={`/TeamReg/${ide}`}> <button class="regis fourth" onClick={(e)=>{checker(e,ide)}} >Register  Now </button>  </Link>
                }
               </div>
 
        </section>
          <br/>
          <div class = 'table-responsive' style = {{overflowX:'auto'}}><h1 class="heading45">EVENT RULES</h1></div>
         
          <div class="rules45" dangerouslySetInnerHTML={ {__html: rules} } style={{listStyleType:"disc"}}>
             
          
        
          </div>
         
        
    </div>
  //  </div>

 
  )
}

export default EventDetail