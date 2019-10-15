import * as React from "react";
import * as ReactDOM from "react-dom";

export function Button() {
  const [counter, setCounter] = React.useState(7);
  return <button onClick={() => setCounter(counter+1)}>{counter}</button>;
}
