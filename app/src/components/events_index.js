import React, { Component } from 'react';
import { connect } from 'react-redux';
import { readEvents } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom'

class EventsIndex extends Component {
  componentDidMount(){
    this.props.readEvents()
  }

  renderEvents(){
    return _.map(this.props.events, event => {
      return(
        <tr key={event.id}>
          <td>{event.id}</td>
          <td>{event.title}</td>
          <td>{event.body}</td>
        </tr>
      )
    })
  }

  render(){
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>body</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>
        <Link to="/events/new">New Event</Link>
      </React.Fragment>
    )
  }
}

export class EventsNew extends Component {
  render(){
    return <p>fefef</p>
  }
}

const mapStateToProps = state => ({events: state.events})
const mapDispatchToProps = {readEvents}
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)

// export default App;
