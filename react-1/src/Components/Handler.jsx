import React, { Component } from 'react'

export class Handler extends Component {

    state = {
        salary : 30000
    }

    updateHandler = (value) => {
        this.setState({salary: this.state.salary + (this.state.salary * value / 100)})
    }

  render() {
    return (
      <div>
        <h1>Hike Salary</h1>
        <h2>Current Salary: {this.state.salary}</h2>
        <button onClick={this.updateHandler.bind(this, 40)}>40% Hike</button>
        <button onClick={this.updateHandler.bind(this, 50)}>50% Hike</button>
        <button onClick={this.updateHandler.bind(this, 100)}>100% Hike</button>
      </div>
    )
  }
}

export default Handler