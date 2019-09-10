import React from "react";

const NumberButton = (props) => {

  const {name} = props;
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <span>{name}</span>
    </button>
  );
};

export default NumberButton;
