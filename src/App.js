import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import { ListComponent } from './Components/list';
import { ListDetailComponent } from './Components/list-detail';

import Reducers  from './Reducers/reducers';

const store = createStore(Reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Master Search App</h2>
        </div>
        <Router>
          <div>
            <Route exact path ='/' component={ListComponent}/>
            <Route path ='/list' component={ListComponent}/>
            <Route path ='/list-detail' component={ListDetailComponent}/>

            <p><Link to="/list">List</Link></p>
            <p><Link to="/list-detail">List Detail</Link></p>
          </div>
        </Router>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      </Provider>
    );
  }
}

export default App;
