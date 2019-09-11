import React from "react";

const OperatorButton = (props) => {
  const { buttonSymbol} = props;s
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {buttonSymbol}
    </button>
  );
};

export default OperatorButton;
