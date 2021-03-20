import React from "react";
import { ReactComponent as Logo } from "./logo.svg";
import "./App.scss";

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <Logo className="logo" />
      </header>
    </div>
  );
}

export default App;
