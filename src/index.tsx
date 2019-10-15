import * as React from "react";
import * as ReactDOM from "react-dom";
import FormContainer from "./components/FormContainer";
import { Button } from "./components/FunctionalComponent";
import Element from "./components/test";

ReactDOM.render(
  <React.Fragment>
    <FormContainer/>
    <Button/>
    Element
  </React.Fragment>,
  document.getElementById('root')
);
