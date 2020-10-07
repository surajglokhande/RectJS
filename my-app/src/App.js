import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './HelloWorld';

function App() {
  let msg = "Hello, World"
  let style1 = { color: 'red' }
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 style = {style1} >My first Application</h2>
        <h3 className = 'para'>{msg}</h3>
        </header>
      </div>     
  );
}

function App1() {
  return(
    <div>
      <Hello />
    </div>
  );
}

export default App1
