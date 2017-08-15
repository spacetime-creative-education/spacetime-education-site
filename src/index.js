import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
   apiKey: "AIzaSyCHlEfwJT0P7tZuxRrwr3Tat13aSRuhRuo",
   authDomain: "spacetime-education-dev.firebaseapp.com",
   databaseURL: "https://spacetime-education-dev.firebaseio.com",
   projectId: "spacetime-education-dev",
   storageBucket: "",
   messagingSenderId: "103630627996"
 };

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
