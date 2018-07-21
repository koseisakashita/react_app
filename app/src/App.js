import React from 'react';
import PropTypes from 'prop-types';

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
  const profiles = [
    {name: 'suzuki', age:25},
    {name: 'tanaka', age:43},
    {name: 'yamamoto', age: 27}
  ]
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index}/>
      })}
    </div>
  )
}

const User = (props) => {
  return (<div>I am {props.name}: {props.age} years old.</div>)
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
