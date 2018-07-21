import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }
  increment = () =>{
    this.setState({count: this.state.count + 1})
  }
  decrement = () =>{
    if (this.state.count > 0){
      this.setState({count: this.state.count - 1})
    }
    return console.log(this.state.count)
  }
  render(){
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
      </React.Fragment>
    )
  }
}


export default App;
