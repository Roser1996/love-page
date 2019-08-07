import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    }
  }

  handleClick = () => {
    this.setState({ clicked: true });
  }

  render() {
    const { clicked } = this.state;

    if (clicked) {
      return (
        <div>
          <div id="heart"></div>
          <h1>Renee</h1>
          <h1>Happy Chinese Valentines day</h1>
        </div>
      );
    }
    else {
      return (
        <div className="myBtn">
          <button type="button" onClick={this.handleClick}>
            <span>
              Suprise! Click Me!
            </span>
          </button>
        </div>
      );
    }
  }
}

export default App;
