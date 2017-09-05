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
import ScrollableAnchor from 'react-scrollable-anchor'

ParallaxController.init();

// Parallax: https://jscottsmith.github.io/react-scroll-parallax-examples/examples/parallax-example/
// Idea now is to combine flexbox with parallax scroll component
class App extends Component {
  render() {

    const opts = {
      height: '100%',
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
            <ScrollableAnchor id={'home'}>
            <div className="row row-1">
              <div className="box box-1 hidden"></div>
              <div className="box section-1">
                <Parallax className="box section-1-hello" offsetXMax="50px" offsetXMin="0px">
                  <h1 className="hello-text">Hello,</h1>
                </Parallax>
                <Parallax className="box section-1-welcome" offsetXMax="0px" offsetXMin="50px">
                  <h3 className="welcome-text"><i>Welcome to Spacetime Education. A fun place to learn<br/><a id="pythonorg" href="https://www.python.org/">Python Programming</a><br/>in Chennai.</i></h3>
                </Parallax>
              </div>
              <div className="box box-1 hidden"></div>
            </div>
            </ScrollableAnchor>

            <ScrollableAnchor id={'how'}>
            <div className="row row-2">
              <div className="box section-youtube "><YouTube
                  videoId={"YgtL4S7Hrwo"}                  // defaults -> null
                  opts={opts}                              // defaults -> {}
                /></div>
              <div className="box section-how">
                <Parallax className="box section-how-title" offsetXMax="50px" offsetXMin="0px">
                  <h1 className="hello-text">Fun with Python Programming for beginners</h1>
                </Parallax>
                <Parallax className="box section-how-desc" offsetXMax="0px" offsetXMin="50px">
                  <h3 className="welcome-text"><i>Introducing a <span style={{'text-decoration':'line-through'}}>Revolutionary</span>Ummm... Let's try this again. Introducing a fun take on learning to code in python! Enjoy the process, explore your creative potential</i></h3>
                </Parallax>
              </div>
              <div className="box box-2 hidden"></div>
            </div>
            </ScrollableAnchor>

            <ScrollableAnchor id={'where'}>
            <div className="row row-3">
              <div className="box section-3">
                <Parallax className="box section-3-where" offsetXMax="50px" offsetXMin="0px" offsetYMax="50px" offsetYMin="0px">
                  <h1 className="hello-text">Where?</h1>
                </Parallax>
                <Parallax className="box section-3-address" offsetXMax="0px" offsetXMin="50px" offsetYMax="0px" offsetYMin="50px">
                  <h3 className="welcome-text"><i>Right near the left kidney of chennai. Yup, kidneys are important too.</i></h3>
                <h5>Spacetime Education,<br />Valluvar salai,<br />opp. Arasa Maram,<br />Ramapuram,<br />Chennai - 600089.</h5>
                </Parallax></div>
              <div className="box yellow">
                <MediaQuery minWidth={768}>
                  <MyMap width={500} height={500} forcePseudoFullscreen={true}
isPseudoFullscreen={false}></MyMap>
                </MediaQuery>
                <MediaQuery maxWidth={767}>
                  <MyMap width={"400"} height={400} forcePseudoFullscreen={true}
isPseudoFullscreen={false}></MyMap>
                </MediaQuery>
                </div>
              <div className="box box-3 hidden"></div>
            </div>
            </ScrollableAnchor>

            {/*<div className="row bus"><h1 data-shadow="Happy Coding!">Happy Coding!</h1></div>*/}

            <ScrollableAnchor id={'when'}>
            <div className="row row-4">
              <div className="box box-4 hidden"></div>
              <div className="box box-4 hidden"></div>
              <div className="box box-4 hidden"></div>
            </div>
            </ScrollableAnchor>

            <ScrollableAnchor id={'pricing'}>
            <div className="row row-5">
              <div className="box box-5 hidden"></div>
              <div className="box box-5 ">

              </div>
              <div className="box box-5 hidden"></div>
            </div>
            </ScrollableAnchor>

            <ScrollableAnchor id={'contact'}>
            <div className="row row-6">
              <div className="box box-6 hidden"></div>
              <div className="box box-6 "><Hello></Hello></div>
              <div className="box box-6 hidden"></div>
            </div>
            </ScrollableAnchor>

            {/*<div className="row"><P5Wrapper sketch={footer_starfield}></P5Wrapper></div>*/}
          </div>

        </div>
    );
  }
}

export default App;
