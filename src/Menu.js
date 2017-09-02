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
        <div className="table-content">
          <div className="content-row">
            <div className="content-item"><h2><a className="content-link" href="/">Home</a></h2></div>
            <div className="content-item"><h2><a className="content-link" href="/">Learn</a></h2></div>
          </div>
          <div className="content-row">
            <div className="content-item"><h2><a className="content-link" href="/">Courses</a></h2></div>
            <div className="content-item"><h2><a className="content-link" href="/">Contact</a></h2></div>
          </div>
        </div>
        <div className="triangle"></div>
      </Menu>
    );
  }
}

Menubar.defaultProps = {
  width: "75%"
}

export default Menubar;
