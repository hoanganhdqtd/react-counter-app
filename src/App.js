// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  let color = counter > 0 ? "green" : counter < 0 ? "red" : "black";

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div class="container">
      <h1>Counter</h1>
      <span id="value" style={{ color }}>
        {counter}
      </span>
      <div class="btn-group">
        <button class="btn btn-decrease" onClick={decrease}>
          Decrease
        </button>
        <button class="btn btn-reset" onClick={reset}>
          Reset
        </button>
        <button class="btn btn-increase" onClick={increase}>
          Increase
        </button>
      </div>
    </div>
  );
}

export default App;
