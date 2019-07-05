import React, {Component} from 'react'
//const React = require('react');
//const ReactDOM = require('react-dom');
//var React = require('react');
//var ReactDOM = require('react-dom');

class Counter extends React.Component {
//export default class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: this.props.first
    }
  }

  render() {
    return (<div><p>Count Number: {this.state.count} </p>
      <button onClick={e => this.increment()}>Increment</button>
      </div>
      )
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }

}
export default Counter;