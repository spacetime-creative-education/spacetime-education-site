import React, { Component } from 'react';
import logo from './assets/logo.png';
import './App.css';
import StMetaTags from './StMetaTags.js';
import Headroom from 'react-headroom';
import LazyLoad from 'react-lazyload';
import YouTube from 'react-youtube';
import P5Wrapper from 'react-p5-wrapper';
import header_starfield from './header_starfield.js';
import footer_starfield from './footer_starfield.js';
import Card from './Card.js';
import { ParallaxController, Parallax } from 'react-scroll-parallax';
import Menubar from './Menu.js';
import StickyHeader from './StickyHeader.js';
import MyMap from './MyMap.js';
import Hello from './Hello.js';
import MediaQuery from 'react-responsive';

ParallaxController.init();

// Parallax: https://jscottsmith.github.io/react-scroll-parallax-examples/examples/parallax-example/
// Idea now is to combine flexbox with parallax scroll component
class App extends Component {
  render() {

    const opts = {
      height: '400',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <div id="outer-container" class="outer-container">
        <StMetaTags></StMetaTags>
        <StickyHeader onScroll={this.handleScroll}></StickyHeader>
        <div className="container" id="page-wrap">
            {/*<Menubar>Menu</Menubar>*/}
            <div className="row row-1">
              <div className="box box-1 hidden"></div>
              <div className="box section-1">
                <Parallax className="box section-1-hello" offsetXMax="50px" offsetXMin="0px">
                  <h1 className="hello-text">Hello,</h1>
                </Parallax>
                <Parallax className="box section-1-welcome" offsetXMax="0px" offsetXMin="50px">
                  <h3 className="welcome-text"><i>Welcome to Spacetime Education.</i></h3>
                </Parallax>
              </div>
              <div className="box box-1 hidden"></div>
            </div>
            <div className="row row-2">
              <div className="box box-2 "></div>
            <div className="box box-1 hidden"></div>
          <div className="box box-2 hidden"></div>
            </div>
            <div className="row row-3">
              <div className="box box-3 hidden"></div>
              <div className="box yellow">
                <MediaQuery minWidth={768}>
                  <MyMap width={500} height={500} forcePseudoFullscreen={true}
isPseudoFullscreen={false}></MyMap>
                </MediaQuery>
                <MediaQuery maxWidth={767}>
                  <MyMap width={300} height={400} forcePseudoFullscreen={true}
isPseudoFullscreen={false}></MyMap>
                </MediaQuery>
                </div>
              <div className="box box-3 hidden"></div>
            </div>
            {/*<div className="row bus"><h1 data-shadow="Happy Coding!">Happy Coding!</h1></div>*/}
            <div className="row row-4">
              <div className="box box-4 hidden"></div>
              <div className="box box-4 hidden"></div>
              <div className="box box-4 hidden"><YouTube
                  videoId={"IVy9XZXpcfw"}                  // defaults -> null
                  opts={opts}                              // defaults -> {}
                />
              </div>
            </div>
            <div className="row row-5">
              <div className="box box-5 hidden"></div>
              <div className="box box-5 ">

              </div>
              <div className="box box-5 hidden"></div>
            </div>
            <div className="row row-6">
              <div className="box box-6 hidden"></div>
            <div className="box box-6 "><Hello></Hello></div>
              <div className="box box-6 hidden"></div>
            </div>

            {/*<div className="row"><P5Wrapper sketch={footer_starfield}></P5Wrapper></div>*/}
          </div>

        </div>
    );
  }
}

export default App;
