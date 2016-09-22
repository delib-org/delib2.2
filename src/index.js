
import * as firebase from 'firebase';

import React from 'react';
import ReactDOM from 'react-dom'
import  { Router, Route, IndexRoute }  from 'react-router'

// import './index.css';
import App from './App';
import Something from './Something';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB5BoW4FBpRPdOfyYjPej5WkrHO9v8qtjQ",
    authDomain: "testproj-96156.firebaseapp.com",
    databaseURL: "https://testproj-96156.firebaseio.com",
    storageBucket: "testproj-96156.appspot.com"
  };
  firebase.initializeApp(config);

    ReactDOM.render((
        <Router >
          <Route path="/" component={App}>
            <Route path="something" handler={Something}> </Route>
          </Route>
        </Router>
    ), document.getElementById('root'));


// <IndexRoute> component={Featured}> </IndexRoute>