import React, { Component } from 'react'

export default class Butoon extends Component {
    handleClick = (e) => {
        console.log('button clicked')
    };
  render() {
    return (
      <button onclick = {this.handleClick}>Click me</button>
    )
  }
}
