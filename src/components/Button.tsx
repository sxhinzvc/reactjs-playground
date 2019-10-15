import * as React from "react";
import * as ReactDOM from "react-dom";

export default function Button() {
  const [counter, setCounter] = React.useState(5);
  const handleClick = () => setCounter(counter*2)

  return <button onClick={handleClick}>{counter}</button>;
}
