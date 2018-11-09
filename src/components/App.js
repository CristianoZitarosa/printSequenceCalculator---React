import React, { Component } from 'react';
import '../style/app.css';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Help from './Help';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
library.add(faTimesCircle);

class App extends Component {
  render() {
    return (
      <div>

        <header>
          <h1>Print Sequence Calculator</h1>
        </header>
        <Route exact path='/' render={() => (
          <div id="container">
            <form id="form">
              <input type="number" id="page" min="1" step="1" placeholder="Number of pages"/>
              <input type="submit" id="submit" value="Submit" disabled="disabled"/>
              <input type="button" id="reset" value="Reset" disabled/>
              <Link to="/help">
                <input type="button" id="helpButton" value=">> Help <<"/>
              </Link>
              <div>
                <input type="checkbox" id="select" value="select" disabled/>
                <label htmlFor="select">Select an interval</label>
              </div>
              <div id="parameters">
                <input type="number" id="minPage" min="1" step="1" disabled placeholder="First page"/>
                <input type="number" id="maxPage" min="1" step="1" disabled placeholder="Last page"/>
              </div>
            </form>
            <div id="result"></div>
            </div>
        )}/>

        <Route path='/help' render={() => (
          <div id="helpPage">
            <Help/>
          </div>)
        }/>

      </div>

    );
  }
}

export default App;
