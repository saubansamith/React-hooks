import React from "react";

let count = 0;

function WithoutHooks() {

  const increase = () => {
    count++;
    console.log("Count is:", count);
  };

  return (
    <div>
      <h2>Without Hooks</h2>
      <h3>Count: {count}</h3>
      <button onClick={increase}>
        Increase
      </button>
    </div>
  );
}

export default WithoutHooks;
