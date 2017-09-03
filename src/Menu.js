import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { SocialIcon } from 'react-social-icons';

class Menubar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <Menu width={this.props.width} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <div className="table-content">
          <div className="navigate">
            <div className="content-row">
              <div className="content-item"><h2><a className="content-link" href="/">Home</a></h2></div>
              <div className="content-item"><h2><a className="content-link" href="/">Learn</a></h2></div>
            </div>
            <div className="content-row">
              <div className="content-item"><h2><a className="content-link" href="/">Courses</a></h2></div>
              <div className="content-item"><h2><a className="content-link" href="/">Contact</a></h2></div>
            </div>
            <div className="content-row">
              <div className="content-item"><h2><a className="content-link" href="/">Subscribe</a></h2></div>
            <div className="content-item"><h2><a className="content-link hidden" href="/">Contact</a></h2></div>
            </div>
          </div>
          <div className="socialize">
            <div className="social-icons">
              <SocialIcon url="https://twitter.com/SpacetimeEdu"></SocialIcon>
              <SocialIcon url="https://www.facebook.com/SpacetimeEdu/"></SocialIcon>
              <SocialIcon url="https://www.youtube.com/channel/UCEzmkFCycBMDJq9xH58ApHQ?view_as=subscriber"></SocialIcon>
            </div>
          </div>
        </div>
      </Menu>
    );
  }
}

Menubar.defaultProps = {
  width: "75%"
}

export default Menubar;
