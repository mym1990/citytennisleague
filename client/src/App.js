import React, { Component } from 'react';
import './App.css';
import ScoreInput from './Components/ScoreInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
            <div className="padding">
                User: Stas Christiansen
            </div>
            <ScoreInput />
        </p>
      </div>
    );
  }
}

export default App;
