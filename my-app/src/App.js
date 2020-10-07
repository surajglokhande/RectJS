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

/* function Component */
/*
function App2() {
  return <Headline />
}

function Headline() {
  let msg = "Hello, World React Program"
  return <h1>{msg}</h1>
}*/

/* Class Component */
/* 
function App1() {
  return(
    <div>
      <Hello />
    </div>
  );
}
*/


export default App
