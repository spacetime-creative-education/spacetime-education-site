import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu';

class Menubar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <Menu width={this.props.width} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <div class="my-bm-menu-item">
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>

          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
        </div>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu>
    );
  }
}

Menubar.defaultProps = {
  width: "75%"
}


export default Menubar;
