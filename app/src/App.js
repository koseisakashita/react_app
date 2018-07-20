import React from 'react';

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onClick={() => {alert(535353)}}/>
//       </React.Fragment>
//     );
//   }
// }

const App = () => {
  return (
    <div>
      <Cat/>
      <Cat/>
      <Cat/>
    </div>
  )
}

const Cat = () => {
  return <p>Meow!</p>
}

export default App;
