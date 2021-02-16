import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
class App extends Component {

  state = {
    location: 'Crazy Rd. 123',
    response: ''
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      const params = {"message":this.state.location};
      const response = await axios.post("https://systec-puzzle.herokuapp.com/lightbeam", params);
      this.setState({response: response.data});
    } catch (error) {
      this.setState({response: "Error en el servidor"});
    }
  };

  render() {
    return (
      <div className="App container vh-100">
        <div className="row justify-content-center h-100">
          <div className="col-md-4 align-self-center">
            <form onSubmit={this.handleSubmit} className="card card-body">
              <h1>
                <strong>Send Location:</strong>
              </h1>
              <div className="form-group input-group">
                <input
                  className="form-control"
                  type="text"
                  value={this.state.location}
                  onChange={e => this.setState({ location: e.target.value })}
                />
              </div>
              <button className="btn btn-primary btn-block" type="submit">Submit</button>
            </form>
            <p className="mt-4">{this.state.response}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
