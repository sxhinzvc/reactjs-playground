import * as React from "react";
import * as ReactDOM from "react-dom";

const formatName = (user) => {
  return user.firstName + ' ' + user.lastName;
};

const user = {
  firstName: 'julia',
  lastName: 'lee'
};

export default Element = <h1>Hello, {formatName(user)}!</h1>;

