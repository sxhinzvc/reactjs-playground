import * as React from "react";
import * as ReactDOM from "react-dom";
import Button from "./Button";
import CounterDisplay from "./CounterDisplay";

export default function App() {
  const [counter, setCounter] = React.useState(16);
  const incrementCounter = () => setCounter(counter+1);

  return (
    <div>
      <Button handle={incrementCounter}/>
      <CounterDisplay value={counter}/> 
    </div>
  );
}
