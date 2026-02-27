import React, { useContext, useEffect } from "react";
import { CounterContext } from "../CounterContext";

function WithDependency() {
  const { count, setCount } = useContext(CounterContext);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]); // runs only when count changes

  return (
    <div>
      <h2>With Dependency</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default WithDependency;
