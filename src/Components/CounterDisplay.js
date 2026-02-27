import React, { useContext } from "react";
import { CounterContext } from "../App";

function CounterDisplay() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default CounterDisplay;