import React, { useState } from "react";
import Logo from "./components/DisplayComponents/Logo";
import { numbers } from "../src/data";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Display from "./components/DisplayComponents/Display";
import "./App.css";

function App() {
 
  const [display, setDisplay] = useState(0);

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display displayItem={display} />        
        <div className="buttons">
          <div>
            <Specials />
            <Numbers />
          </div>
          <Operators />
        </div>
      </div>
    </div>
  );
}

export default App;
