import React from 'react'
import { Switch, Route } from "react-router-dom";
import LandingPage from './components/landingPage/LandingPage';
import FitnessHealth from './components/blogPosts/FitnessHealth';
import DIYStyle from './components/blogPosts/DIYStyle';
import FoodTreats from './components/blogPosts/FoodTreats';
import LifeThoughts from './components/blogPosts/LifeThoughts';
import About from './components/about/About';
import Contact from './components/contact/Contact';

export default (
    <Switch>
        <Route path="/"exact component={LandingPage}/>
        <Route path="/about" component={About}/>
        <Route path="/FitnessHealth" component={FitnessHealth}/>
        <Route path="/DIYStyle" component={DIYStyle}/>
        <Route path="/FoodTreats" component={FoodTreats}/>
        <Route path="LifeThoughts" component={LifeThoughts}/>
        <Route path="/contact" component={Contact}/>
    </Switch>
);