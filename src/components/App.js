import React, { Component } from 'react';
import '../style/App.css';

class App extends Component {
  render() {
    return (
      <div>

        <header>
          <h1>Print Sequence Calculator</h1>
        </header>

        <div id="container">
          <form id="form">
            <input type="number" id="page" min="1" step="1" placeholder="Number of pages"/>
            <input type="submit" id="submit" value="Submit" disabled="disabled"/>
            <input type="button" id="reset" value="Reset" disabled/>
            <input type="button" id="help" value=">> Help <<"/>
            <div>
              <input type="checkbox" id="select" value="select" disabled/>
              <label htmlFor="select">Select an interval</label>
            </div>
            <div id="parameters">
              <input type="number" id="minPage" min="1" step="1" disabled placeholder="First page"/>
              <input type="number" id="maxPage" min="1" step="1" disabled placeholder="Last page"/>
            </div>
          </form>
          <div id="helpTxt"></div>
          <div id="result"></div>
        </div>

      </div>
    );
  }
}

export default App;
