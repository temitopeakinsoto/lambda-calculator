import React from "react";
import OperatorButton from './OperatorButton';
import { operators } from '../../../data';

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  const { operatorObjectArray } = props;
  // STEP 2 - add the imported data to state
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {
        operators.map((operatorObjectItem) => (
          <OperatorButton buttonSymbol = {operatorObjectItem.char} />
        ))
      } 
    </div>
  );
};

export default Operators;
