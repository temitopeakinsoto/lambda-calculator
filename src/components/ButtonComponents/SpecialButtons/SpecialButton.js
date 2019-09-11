import React from "react";

const SpecialButton = (props) => {
  const { specialBtn } = props;
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      { specialBtn }
    </>
  );
};

export default SpecialButton;
