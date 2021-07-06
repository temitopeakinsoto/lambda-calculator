import React from "react";

const OperatorButton = (props) => {
  const { buttonSymbol } = props;
  return (
    <button>      
      {buttonSymbol}
    </button>
  );
};

export default OperatorButton;
