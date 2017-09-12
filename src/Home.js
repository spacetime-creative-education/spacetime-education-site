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
import { SocialIcon } from 'react-social-icons';


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
                  <h3 className="welcome-text"><i>Are you a noob wanting to enter the adventurous world of programming? we have the right course for you.</i></h3>
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
                  <h3 className="welcome-text"><i>Introducing a <span style={{'text-decoration':'line-through'}}>Revolutionary</span> Nah... Not so much. Introducing a fun-filled classroom course on learning to code in python! This course aims at bringing out good coding practices, and to get one ready to become a full-stack developer, or get into Machine Learning.</i></h3>
                </Parallax>
                <div className="box">
                {/* <div className="box section-youtube">
                  <YouTube
                    videoId={"YgtL4S7Hrwo"}                  // defaults -> null
                    opts={opts}                              // defaults -> {}
                  /> */}
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
                    <MyMap width={"250"} height={250} forcePseudoFullscreen={true} isPseudoFullscreen={false}></MyMap>
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

            <ScrollableAnchor id={'about'}>
            <LazyLoad height={1000} offset={200}>
            <div className="row row-6">
              <div className="box box-6"></div>
              <div className="box section-6">
                {/* <div className="footer-col"> */}
                  <div className="footer-row"><AboutUs></AboutUs></div>
                  <div className="footer-row">
                    <div className="subscribe">
                      <div id="mc_embed_signup">
                        <form action="//education.us16.list-manage.com/subscribe/post?u=65f46eacbe6dbada2c090fe3f&amp;id=3544e756ae" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                            <div id="mc_embed_signup_scroll">
                        	     <label for="mce-EMAIL" className="footer-subscribe-title">Subscribe to our mailing list</label>
                             <input type="email" name="EMAIL" className="email footer-email" id="mce-EMAIL" placeholder="email address" required />
                           <div style={{"position": "relative", "left": "-5000px"}} aria-hidden="true"><input type="text" name="b_65f46eacbe6dbada2c090fe3f_3544e756ae" tabindex="-1" value="" /></div>
                           <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/></div>
                            </div>
                        </form>
                      </div>
                    </div>
                    <div className="footer-follow-text">Follow us</div>
                    <div className="social-icons">
                      <SocialIcon className="filtered" url="https://twitter.com/SpacetimeEdu"></SocialIcon>
                      <SocialIcon className="filtered" url="https://www.facebook.com/SpacetimeEdu/"></SocialIcon>
                      <SocialIcon className="filtered" url="https://www.youtube.com/channel/UCEzmkFCycBMDJq9xH58ApHQ?view_as=subscriber"></SocialIcon>
                      <SocialIcon className="filtered" url="https://www.instagram.com/SpacetimeEdu/"></SocialIcon>
                      <SocialIcon className="filtered" url="https://medium.com/spacetime-education"></SocialIcon>
                    </div>
                  </div>
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
