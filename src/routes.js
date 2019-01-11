import React from 'react'
import { Switch, Route } from "react-router-dom";
import LandingPage from './components/landingPage/LandingPage';
import FitnessHealth from './components/blogPosts/FitnessHealth';
import DIYStyle from './components/blogPosts/DIYStyle';
import FoodTreats from './components/blogPosts/FoodTreats';
import LifeThoughts from './components/blogPosts/LifeThoughts';

export default (
    <Switch>
        <Route path="/" exact component={LandingPage}/>
        <Route path="/FitnessHealth" component={FitnessHealth}/>
        <Route path="/DIYStyle" component={DIYStyle}/>
        <Route path="/FoodTreats" component={FoodTreats}/>
        <Route path="LifeThoughts" component={LifeThoughts}/>
    </Switch>
)