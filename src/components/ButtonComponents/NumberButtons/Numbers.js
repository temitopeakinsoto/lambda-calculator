import React from "react";
import NumberButton from './NumberButton';
import { numbers } from '../../../data';

export const Numbers = () => {
  // STEP 2 - add the imported data to state
  return (
    <div className="buttons-numbers">      
       {
         numbers.map(individualNumber => (
          <NumberButton individualNumberOnCalculator = {individualNumber} />
         ))
       }
    </div>
  );
};

export default Numbers;
