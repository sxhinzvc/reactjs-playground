import * as React from "react";
import * as ReactDOM from "react-dom";

export function Button() {
  const [counter, setCounter] = React.useState(7);
  return <button onClick={() => console.log(Math.random())}>{counter}</button>;
}
