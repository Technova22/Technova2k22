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
import Navbar1 from './components/Navbar1';
import Timer from './components/Timer';
import Contactus from './components/Contactus';
import Allevents from './components/AllEvent';
import Gallery from './components/Gallery';
// import Test from './components/Test';

const App = () => {
  return (
  <>
    <Router>
      
       <Switch>
        <Route exact path='/AllEvent'>
          <Navbar1/>
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
            <Navbar1/>
            <Contactus/>
          </Route>
          <Route exact path="/profile">
          <Navbar1/>
                       <Profile/>
          </Route>
          <Route exact path="/EventDetail/:ide">
          <Navbar1/>
          <EventDetail
            
          />
          </Route>
          <Route exact path = "/TeamReg/:ide">
          <Navbar1/>
         <TeamReg/>
         {/* <Test/> */}
          </Route>
       </Switch>
        
       </Router>
       </>
  )
}

export default App
