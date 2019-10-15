import * as React from "react";
import * as ReactDOM from "react-dom";
import Button from "./Button";
import CounterDisplay from "./CounterDisplay";

export default function App() {
  const [counter, setCounter] = React.useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);

  return (
    <div>
      <Button handle={incrementCounter} increment={1} />
      <Button handle={incrementCounter} increment={5} />
      <Button handle={incrementCounter} increment={10} />
      <CounterDisplay value={counter}/> 
    </div>
  );
}
