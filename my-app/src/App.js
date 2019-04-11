import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Cards from './components/Cards';

class App extends Component {
  render() {
    return (
      <div>
      <nav>
        <NavBar/>
      </nav>
      <header>
      <Banner/>
      <Cards/>
      </header>
      </div>
    );
  }
}

export default App;
