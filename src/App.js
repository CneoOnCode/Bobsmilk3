import "./App.css";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

// ...
function App() {
  // ...
  return (
    <div className="App">
      <header className="App-header">
        <h1>Launching On May 21st 2022</h1>
        <Countdown date={Date.now() + 5356800000}>
          <h1>ITS RELEASED</h1>
        </Countdown>
      </header>
    </div>
  );
}

export default App;
