// var React = require('react');
// var ReactDOM = require('react-dom');
// require('./index.css');

import React from "react"
import ReactDOM from "react-dom"
import css from "./index.css"


class App extends React.Component {
  render() {
    return (
      <div>Hello World!</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));