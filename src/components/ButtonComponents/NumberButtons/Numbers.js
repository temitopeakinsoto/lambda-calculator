import React from "react";
import NumberButton from './NumberButton';
import { numbers } from '../../../data';

export const Numbers = (props) => {
  const { listOfNumbersForCalculator } = props;
  // STEP 2 - add the imported data to state
  return (
    <div>      
       {
         numbers.map(individualNumber => (
          <NumberButton individualNumberOnCalculator = {individualNumber} />
         ))
       }
    </div>
  );
};

export default Numbers;
