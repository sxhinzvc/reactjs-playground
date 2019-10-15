import * as React from "react";
import * as ReactDOM from "react-dom";

export default function Button(props) {
  return <button onClick={props.handle}>Increment</button>;
}
