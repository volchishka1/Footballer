import React from 'react';
import logo from './logo.svg';
import './App.css';
import {myString} from "@footballer/components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {myString("Maryia")}
      </header>
    </div>
  );
}

export default App;