import * as React from "react";
import * as ReactDOM from "react-dom";
import FormContainer from "./components/FormContainer";
import { Button } from "./components/FunctionalComponent";
import Element from "./components/test";

ReactDOM.render(
  <>
    <FormContainer/>
    <Button/>
    Element
  </>,
  document.getElementById('root')
);
