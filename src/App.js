import React from "react";
import { CounterContext } from "./CounterContext";
// import WithDependency from "./Components/WithDependency";
// import WithoutDependency from "./Components/WithoutDependency";
import WithoutHooks from "./Components/WithoutHooks";
// import Props1 from "./Components/Props1";

function App() {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
    <div>
      <h1>React hooks</h1>
      <WithoutHooks/>
      
    </div>
    </CounterContext.Provider>
  );
}

export default App;