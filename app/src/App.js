import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onClick={() => {alert(535353)}}/>
      </React.Fragment>
    );
  }
}

export default App;
