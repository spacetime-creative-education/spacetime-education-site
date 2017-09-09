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
import Apply from './Apply.js';
import MediaQuery from 'react-responsive';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import PricingTable from './Pricing.js';
import AboutUs from './AboutUs.js';
import CopyrightSection from './CopyrightSection.js';


ParallaxController.init();
configureAnchors({offset: -60});

// Parallax: https://jscottsmith.github.io/react-scroll-parallax-examples/examples/parallax-example/
// Idea now is to combine flexbox with parallax scroll component
class Home extends Component {
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
            <LazyLoad height={10+"rem"} offset={200}>
            <div className="row row-1">
              <div className="box box-1"></div>
              <div className="box section-1">
                <Parallax className="box section-1-hello" offsetXMax="50px" offsetXMin="0px">
                  <h1 className="hello-text">Hello,</h1>
                </Parallax>
                <Parallax className="box section-1-welcome" offsetXMax="0px" offsetXMin="50px">
                  <h3 className="welcome-text"><i>Welcome to Spacetime Education. A fun place to learn<br/><a id="pythonorg" href="https://www.python.org/">Python Programming</a><br/>in Chennai.</i></h3>
                </Parallax>
                <Parallax className="box section-1-noob" offsetXMax="50px" offsetXMin="0px">
                  <h3 className="welcome-text"><i>Are you are a noob wanting to enter the adventurous world of programming? we have the right course for you.</i></h3>
                </Parallax>
              </div>
              <div className="box box-1 "></div>
            </div>
            </LazyLoad>
            </ScrollableAnchor>

            <ScrollableAnchor id={'how'}>
            <LazyLoad height={1000+"px"} offset={200}>
            <div className="row row-2">
              <div className="box box-2 hidden"></div>
              <div className="box section-how">
                <Parallax className="box section-how-title" offsetXMax="50px" offsetXMin="0px">
                  <h1 className="hello-text">Fun with Python Programming for beginners</h1>
                </Parallax>
                <Parallax className="box section-how-desc" offsetXMax="0px" offsetXMin="50px">
                  <h3 className="welcome-text"><i>Introducing a <span style={{'text-decoration':'line-through'}}>Revolutionary</span>Ummm... Let's try this again. Introducing a fun take on learning to code in python! Enjoy the process, explore your creative potential</i></h3>
                </Parallax>
                <div className="box section-youtube">
                  <YouTube
                    videoId={"YgtL4S7Hrwo"}                  // defaults -> null
                    opts={opts}                              // defaults -> {}
                  />
                </div>
              </div>
              <div className="box box-2 hidden"></div>
            </div>
            </LazyLoad>
            </ScrollableAnchor>

            <ScrollableAnchor id={'where'}>
            <LazyLoad height={1000} offset={200}>
            <div className="row row-3">
              <div className="box box-3"></div>
              <div className="box section-3">
                <div className="section-3-textarea">
                  <Parallax className="box section-3-where" offsetXMax="50px" offsetXMin="0px" offsetYMax="50px" offsetYMin="0px">
                    <h1 className="hello-text">Where?</h1>
                  </Parallax>
                  <Parallax className="box section-3-address" offsetXMax="0px" offsetXMin="50px" offsetYMax="0px" offsetYMin="50px">
                    <h3 className="welcome-text"><i>Right near the left kidney of chennai. Yup, kidneys are important too.</i></h3>
                  <h5>Spacetime Education,<br />Valluvar salai,<br />opp. Arasa Maram,<br />Ramapuram,<br />Chennai - 600089.</h5>
                  </Parallax>
                </div>
                <div className="box maparea">
                  <MediaQuery minWidth={768}>
                    <MyMap width={500} height={500} forcePseudoFullscreen={true} isPseudoFullscreen={false}></MyMap>
                  </MediaQuery>
                  <MediaQuery maxWidth={767}>
                    <MyMap width={"400"} height={400} forcePseudoFullscreen={true} isPseudoFullscreen={false}></MyMap>
                  </MediaQuery>
                </div>
              </div>
              <div className="box box-3 "></div>
            </div>
            </LazyLoad>
            </ScrollableAnchor>

            {/*<div className="row bus"><h1 data-shadow="Happy Coding!">Happy Coding!</h1></div>*/}

            <ScrollableAnchor id={'pricing'}>
            <LazyLoad height={1000} offset={200}>
            <div className="row row-4">
              <div className="box box-4 "></div>
            <div className="box section-4">
              <Parallax className="section-4-title" offsetXMax="50px" offsetXMin="0px" offsetYMax="50px" offsetYMin="0px">
                <h1 className="hello-text">Pricing</h1>
              </Parallax>
              <div className="section-4-card"><PricingTable></PricingTable></div>
            </div>
              {/* <div className="box "><PricingTable></PricingTable></div> */}
              <div className="box box-4 "></div>
            </div>
            </LazyLoad>
            </ScrollableAnchor>

            <ScrollableAnchor id={'apply'}>
            <LazyLoad height={1000} offset={200}>
            <div className="row row-5">
              <div className="box box-5 "></div>
              <div className="box section-apply ">
                <Apply></Apply>
              </div>
              <div className="box box-5 "></div>
            </div>
            </LazyLoad>
            </ScrollableAnchor>

            <ScrollableAnchor id={'contact'}>
            <LazyLoad height={1000} offset={200}>
            <div className="row row-6">
              <div className="box box-6"></div>
              <div className="box section-6">
                {/* <div className="footer-col"> */}
                  <div className="footer-row"><AboutUs></AboutUs></div>
                  <div className="footer-row">

                  </div>
                {/* </div> */}
              </div>
              <div className="box box-6"></div>
            </div>
            </LazyLoad>
            </ScrollableAnchor>
            <CopyrightSection></CopyrightSection>
            {/*<div className="row"><P5Wrapper sketch={footer_starfield}></P5Wrapper></div>*/}
          </div>

        </div>
    );
  }
}

export default Home;
