import * as React from "react";
import * as ReactDOM from "react-dom";
import FormContainer from "./components/FormContainer";
import { Button } from "./components/FunctionalComponent";
import Element from "./components/test";

ReactDOM.render(<Button />, document.getElementById('button'));
ReactDOM.render(<FormContainer/>, document.getElementById("root"));
ReactDOM.render(Element, document.getElementById('test'));
