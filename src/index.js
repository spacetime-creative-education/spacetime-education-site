import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAVDZYcwzezPsW5Dfl68WIfw24dClZWi8o",
    authDomain: "spacetime-education.firebaseapp.com",
    databaseURL: "https://spacetime-education.firebaseio.com",
    projectId: "spacetime-education",
    storageBucket: "spacetime-education.appspot.com",
    messagingSenderId: "1076269969010"
  };
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
