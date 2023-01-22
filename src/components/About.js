import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';


const About = () => {
  return (
    <>
   
     <section class="about mt-md-5 mt-4" id="about">
       <div class="col-12 col-md-5 p-4">
     <AnimationOnScroll animateIn="animate__zoomIn" >
           <img className='w-100 h-md-100 h-auto' src="images/about.jpg" alt=""/>
       </AnimationOnScroll>
       </div>

       <div class="col-12 col-md-7 p-4">
       <AnimationOnScroll animateIn="animate__fadeInRight">
           <span class="heading">ABOUT US</span><br/>
           </AnimationOnScroll>
           {/* <span class="tagline py-2"><b>Tagline</b></span> */}
           <AnimationOnScroll animateIn="animate__fadeInRight" animateOut='animate__fadeOutRight'>
           <p className='w-100 text-justify py-2'>TECHNOVA is the Annual Technical Symposium of DCRUST and is one of the largest of its kind in Haryana. Technova has grown by leaps and bounds over the years. It is held over 2 day in the month of November/December and has consistently attracted participants from all over NCR. Technova is all about technical creativity and innovation. Innovation in students is always cherished and supported. In its previous editions. Technova brought participation pool of over 600 students from the colleges under DCRUST.
<br/>
<br/>
Many technical and entrepreneurship events are held during the fest including Robotics, Coding marathons, quizzes events. These are broadly classified into various Departmental Events. Apart from this, Workshops and exhibitions are also held. To high- light the social responsibility of Engineers, social/environmental awareness initiatives are undertaken under the banner of CEEES. Project Expo is also organised in order to encourage the practical knowledge and Hobby Expo is another major attraction.</p>
</AnimationOnScroll>
       </div>

           
    
    </section> 
   
    </>
  )
}

export default About
