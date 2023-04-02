import React from "react";

const Warnings = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <button onClick={props.onOkay}>Okay</button>
    </div>
  );
};

export default Warnings;
