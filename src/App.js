import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from "../src/home/home"
import Farmerpage from './openpage/farmerpage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/farmer" component={Farmerpage} />        
      </Router>
      
    </div>
    );
};

export default App;
