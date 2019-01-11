import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

class Nav extends Component{
    render(){
        return(
        <div>
        <nav role="navigation">
        <div id="menuToggle">
   
     <input type="checkbox" />
     <span></span>
     <span></span>
     <span></span>
    
    <ul id="menu">
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/FitnessHealth">Fitness + Health</Link>
      <br></br>
      <Link to="/DIYStyle">DIY + Style</Link>
      <br></br>
      <Link to="FoodTreats">Food + Treats</Link>
      <br></br>
      <Link to="LifeThoughts">Life + Thoughts</Link>
      <br></br>
      <Link to="/about">About</Link>
      <br></br>
      <Link to="/contact">Contact Me!</Link>
    </ul>
  </div>
</nav>
</div>
        )
    }
}

export default Nav;