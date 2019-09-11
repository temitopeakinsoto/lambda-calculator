import React, { useState } from "react";
import Logo from "./components/DisplayComponents/Logo";
import { numbers, operators, specials } from "../src/data";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Display from "./components/DisplayComponents/Display";
import "./App.css";

function App() {
  const [numberState, setNumberState] = useState(numbers);
  // console.log('this num state', numberState);
  // console.log('this operator is', operators);
  // console.log('that special is', specials);
  
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
