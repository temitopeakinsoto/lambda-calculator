import React from "react";

const NumberButton = (props) => {

  const {individualNumberOnCalculator} = props;
  return (
    <button>      
      {individualNumberOnCalculator}
    </button>
  );
};

export default NumberButton;
