import React, { Component } from 'react';
import './App.css';
import ScoreInput from './Components/ScoreInput';
import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
            <Header />
            <div className="padding">
                <p>User: Stas Christiansen</p>
            </div>
            <ScoreInput />
        </p>
      </div>
    );
  }
}

export default App;
