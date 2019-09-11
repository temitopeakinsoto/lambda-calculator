import React from "react";

const Display = (props) => {
  const {displayItem}= props;
  return <div className="display">
            { displayItem }
          </div>;
};

export default Display;