import * as React from "react";
import * as ReactDOM from "react-dom";

export default function Button(props) {
  const handleClick = () => props.handle(props.increment);
  return <button onClick={handleClick}>+{props.increment}</button>;
}
