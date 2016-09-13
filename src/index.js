import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB5BoW4FBpRPdOfyYjPej5WkrHO9v8qtjQ",
    authDomain: "testproj-96156.firebaseapp.com",
    databaseURL: "https://testproj-96156.firebaseio.com",
    storageBucket: "testproj-96156.appspot.com"
  };
  firebase.initializeApp(config);




ReactDOM.render(
  <App />,
  document.getElementById('root')
);
