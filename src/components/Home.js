import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import useMediaQuery from "./hooks/useMediaQuery";
// import useMediaQuery from "use-mediaquery";
import { useMediaQuery } from 'react-responsive'
// import { isMobile,isDesktop } from './misc/MediaQuery';

const Home = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 600px)'
  })
  const isDesktop = useMediaQuery({
    query: '(min-width: 600px)'
  })
  return (
	<>
     {/* <div id ="begin" ></div> */}
    <Carousel>
      
      <Carousel.Item interval={1500}>
      { isMobile ? 
         <img
         className="d-block w-100"
     src={`/images/m2.jpg`}
     style={{width:"100%",height:"65vh"}}
         alt="First Slide"
       />
        :
        <img
          className="d-block w-100"
		  src={`/images/101.jpeg`}
		  style={{width:"100%",height:"100vh"}}
          alt="First slide"
        />}
       { 
       isDesktop &&
        <Carousel.Caption style={{right:'auto',left:'5%',bottom:'1%'}}>
		<h1 style={{color: "white",textAlign: "left",marginBottom:"10%",zIndex:"99",fontWeight:"bold",fontSize:"80px"}}>Technova-2022</h1>
          
        </Carousel.Caption>}
      </Carousel.Item>
      <Carousel.Item interval={900}>
       { isMobile ? 
         <img
         className="d-block w-100"
     src={`/images/202.jpeg`}
     style={{width:"100%",height:"65vh"}}
         alt="Second slide"
       />
        :
        <img
          className="d-block w-100"
		  src={`/images/102.jpeg`}
		  style={{width:"100%",height:"100vh"}}
          alt="Second slide"
        />}
        {
          isDesktop &&
          <Carousel.Caption style={{right:'auto',left:'5%',bottom:'1%'}}>
          <h1 style={{color: "white",textAlign: "left",marginBottom:"10%",zIndex:"99",fontWeight:"bold",fontSize:"80px"}}>Technova-2022</h1>
          
        </Carousel.Caption>}
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      { isMobile ? 
         <img
         className="d-block w-100"
     src={`/images/201.jpeg`}
     style={{width:"100%",height:"65vh"}}
         alt="Third slide"
       />
        :
        <img
          className="d-block w-100"
		  src={`/images/103.jpeg`}
		  style={{width:"100%",height:"100vh"}}
          alt="Third slide"
        />}
       {isDesktop &&
        <Carousel.Caption style={{right:'auto',left:'5%',bottom:'1%'}}>
		<h1 style={{color: "white",textAlign: "left",marginBottom:"10%",zIndex:"99",fontWeight:"bold",fontSize:"80px"}}>Technova-2022</h1>

        </Carousel.Caption>}
     
      </Carousel.Item>
    </Carousel>
    

	</>
  )
}

export default Home