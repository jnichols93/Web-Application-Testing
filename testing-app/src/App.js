import React from 'react';
import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import './App.css';


import Display from "./components/Display";
import Dashboard from "./components/Dashboard";


function App() {

  //this is the state
  const [balls, setBalls ] = useState(0);
  const [strikes, setStrikes] = useState(0)

  //functions for buttons
  const updateStrikes = () => {
    if (strikes === 2) {
      setBalls(0);
      setStrikes(0);
    } else {
      setStrikes(strikes + 1);
    }
  }

  const updateBalls = () => {

    if (balls === 3) {
      setBalls(0);
      setStrikes(0);
    } else {
      setBalls(balls + 1);
    }
  }

  const onHit = () => {
    setBalls(0);
    setStrikes(0);
  }

  const foulIsFoul = () => {
    if (strikes <= 1) {
      setStrikes(strikes + 1);
    } else {
      setStrikes(strikes);
    }
  }


  return (
    <div className="App">
      <h1>Baseball game, yo!</h1>
      <Display 
        strikes={strikes}
        balls={balls}
      />
      <Dashboard 
        updateStrikes={updateStrikes}
        updateBalls={updateBalls}
        foulIsFoul={foulIsFoul}
        strikes={strikes}
        onHit={onHit}
      />
    </div>
  );
}

export default App;

export const problem = (a, b, c) => {
  return (a + b) / c;
}
