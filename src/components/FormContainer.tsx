import * as React from "react";

export default class FormContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      title: "",
    }
  }

  render() {
    return (
      <form id="article-form">
      </form>
    );
  }

}
