import React, { Component } from 'react';
import './App.css';
import Home from './components/home/home.js';
import Footer from './components/footer/footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Home />

    <Footer />
      </div>
    );
  }
}

export default App;
