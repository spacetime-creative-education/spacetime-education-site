/*
A card here is a floating rectangle react Component, that can be placed anywhere on the website
It has a scrolling parallax effect with respect to other cards and the background-size
It also has a shadow effect

Props:
width, height, parallax-offset
*/

import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';

class Card extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      return (
        <Parallax
          className={"card" + " " + this.props.classes.join(" ")}
          offsetYMax="-100px"
          offsetYMin="100px"
        >
          {this.props.children}
        </Parallax>
      );
    }
}

Card.defaultProps = {
  classes: [],
  tag: "div",
}

Card.propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
}

export default Card;
