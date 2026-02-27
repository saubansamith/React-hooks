import React from "react";
import Props3 from "./Props3";

function Props2(props) {
  return (
    <div>
      <h3>Props2 Component</h3>
      <Props3 message={props.message} />
    </div>
  );
}

export default Props2;