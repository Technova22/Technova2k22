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

const App = () => {
  return (
  <>
    <Router>
       <Navbar/>
       <Switch>
          <Route exact path="/">
           
            <Home />
            <About/>
            <Events/>
            <Footer/>
            </Route> 
          <Route exact path="/signup"><SignUp/></Route> 
        
          <Route exact path="/EventDetail/:ide">
          <EventDetail
            
          />
          </Route>
          <Route exact path = "/TeamReg/:ide">
         <TeamReg/>
          </Route>
       </Switch>
        
       </Router>
       </>
  )
}

export default App
