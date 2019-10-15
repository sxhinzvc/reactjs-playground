import * as React from "react";
import * as ReactDOM from "react-dom";

const logRandom = () => console.log(Math.random());

export function Button() {
  const [counter, setCounter] = React.useState(7);
  return <button onClick={logRandom}>{counter}</button>;
}
