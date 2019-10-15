import * as React from "react";

export default class CounterDisplay extends React.Component {

  render() {
    return <div>{this.props.value}</div>
  }
}
