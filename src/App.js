import React from 'react'
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import SignUp from './components/SignUp';
import About from './components/About';
import Events from './components/Events';
import Footer from './components/Footer';
import EventDetail from './components/EventDetail';
import TeamReg from './components/TeamReg';
import Profile from './components/Profile';
// import Test from './components/Test';

import Timer from './components/Timer';
import Contactus from './components/Contactus';
import Allevents from './components/AllEvent';
import Gallery from './components/Gallery';
import "animate.css/animate.min.css";


// import Test from './components/Test';

const App = () => {
  return (
  <>
    <Router>
     
       <Switch>
      
        <Route exact path='/AllEvent'>
          <Navbar/>
            <Allevents/>
        </Route>
          <Route exact path="/">
          <Navbar/>
            <Home />
            <Timer/>
            <About/>
            <Events/>
            <Gallery/>
            <Footer/>
            </Route> 
          <Route exact path="/signup">
            <Navbar />
            <SignUp/>
          </Route> 
          <Route exact path='/contact'>
            <Navbar/>
            <Contactus/>
            {/* <Footer/> */}
          </Route>
          <Route exact path="/profile">
          <Navbar/>
                       <Profile/>
          </Route>
    
          <Route exact path="/EventDetail/:ide">
          <Navbar/>
          <EventDetail
            
          />
          </Route>
          <Route exact path = "/TeamReg/:ide">
          <Navbar/>
         <TeamReg/>
         {/* <Test/> */}
          </Route>
         
       </Switch>
       
       </Router>

       </>
  )
}

export default App
