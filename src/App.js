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
import { ParallaxController } from 'react-scroll-parallax';
import Menubar from './Menu.js';
import StickyHeader from './StickyHeader.js'
{/*import StickyHeader from 'react-sticky-header';
import { bubble as BurgerMenu } from 'react-burger-menu';
import BurgerMenu from 'react-burger-menu';*/}


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

    const items = [
          <a key="0" href=""><i className="fa fa-fw fa-star-o" /><span>Favorites</span></a>,
          <a key="1" href=""><i className="fa fa-fw fa-bell-o" /><span>Alerts</span></a>,
          <a key="2" href=""><i className="fa fa-fw fa-envelope-o" /><span>Messages</span></a>,
          <a key="3" href=""><i className="fa fa-fw fa-comment-o" /><span>Comments</span></a>,
          <a key="4" href=""><i className="fa fa-fw fa-bar-chart-o" /><span>Analytics</span></a>,
          <a key="5" href=""><i className="fa fa-fw fa-newspaper-o" /><span>Reading List</span></a>
        ];

    return (

      <div id="outer-container" class="outer-container">
        <StMetaTags></StMetaTags>
      {/*}<header>
          <div className="header-bar header-row">
            <div className="header-item"><Menubar></Menubar></div>
            <div className="header-item">
              <div className="column">
                <img className="logo" src={ logo } />
                <h1 className="header-title">Spacetime Education</h1>
              </div>
            </div>
            <div className="header-item hidden"></div>
          </div>
        </header>
        */}
        <StickyHeader onScroll={this.handleScroll}></StickyHeader>
      {/*<BurgerMenu id="slide" pageWrapId="page-wrap" outerContainerId="outer-container">{items}</BurgerMenu>*/}

        <div className="container" id="page-wrap">
            {/*<Menubar>Menu</Menubar>*/}
            <div className="row row-1">
              <div className="box box-1 hidden"></div>
              <div className="box box-1 hidden"></div>
              <div className="box box-1 hidden"></div>
            </div>
            <div className="row row-2">
              <div className="box box-2 hidden"></div>
              <div className="box box-1 hidden"></div>
              <div className="box box-2 hidden"></div>
            </div>
            <div className="row row-3">
              <div className="box box-3 hidden"></div>
              <div className="box box-3 hidden"></div>
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
            {/*<div className="row"><P5Wrapper sketch={footer_starfield}></P5Wrapper></div>*/}
          </div>

        </div>
    );
  }
}

export default App;
