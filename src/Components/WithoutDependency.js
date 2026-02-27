import React, { useState, useEffect } from "react";

function WithoutDependency() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered");
  }); // runs on every render

  return (
    <div>
      <h2>Without Dependency Array</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count)}>
        Increase
      </button>
    </div>
  );
}

export default WithoutDependency;