import React, { Component } from 'react';
import './App.css';
class App extends Component {

  state = {
    location: 'Crazy Rd. 123',
  };

  handleSubmit = async e => {
  };

  render() {
    return (
      <div className="App">
        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.location}
            onChange={e => this.setState({ location: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default App;