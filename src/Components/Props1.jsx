import React from "react";
import Props2 from "./Props2";

function Props1() {
  const message = "Hello from Props1 Component to Props2 Component!";

  return (
    <div>
      <h2>Props1 Component</h2>
      <Props2 message={message} />
    </div>
  );
}

export default Props1;