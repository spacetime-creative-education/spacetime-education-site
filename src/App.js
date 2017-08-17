import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Headroom from 'react-headroom';
import LazyLoad from 'react-lazyload';
import YouTube from 'react-youtube';
import MyMap from './MyMap.js';


class App extends Component {
  render() {
    return (
      <div>
        <LazyLoad height={200}>
          <MyMap />
        </LazyLoad>
        <LazyLoad height={200}>
          <YouTube />
        </LazyLoad>
      </div>
    );
  }
}

export default App;
