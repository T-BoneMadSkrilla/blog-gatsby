import React, { Component } from 'react';
import routes from './routes';
import {BrowserRouter as Router} from 'react-router-dom';
import Nav from './components/nav/Nav';
import './App.css';


class App extends Component {
  render() {
    return (
     <Router>
       <div>
       <Nav/>
       {routes}
       </div>
     </Router>
    );
  }
}

export default App;
