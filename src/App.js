import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Vote from './components/Vote';
//import News from './components/News';
import Result from "./components/Result";
import Navbar from './components/CustomNavbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className={"app-top"}>
            <Navbar />
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/vote" component={Vote} />
          {/*<Route path="/news" component={News} />*/}
          <Route path="/result" component={Result} />
        </div>
      </Router>
    );
  }
}

export default App;
