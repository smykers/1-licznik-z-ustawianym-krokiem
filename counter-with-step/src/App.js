import React, { Component } from 'react';
import './App.css';
import Counter from './Counter.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          1-licznik-z-ustawianym-krokiem
        </header>
        <Counter initValue="108"/>
      </div>
    );
  }
}

export default App;
