import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
// import { func, number } from 'prop-types';

import Posts from './todo/Posts';
import PostForm from './todo/PostForm';
import realstore from './todo/realstore';

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Provider store = {realstore}>
        <div className="App">
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" /> 
             <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
              </header> */}
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    )
  };
};

export default App;
