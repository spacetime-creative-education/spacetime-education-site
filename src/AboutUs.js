import React, {Component} from 'react';

class AboutUs extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="aboutus">
        <div className="about-heading"><h2>About Us</h2></div>
        <div className="about-desc"><p>Spacetime Education comes into existence out of the desire to bring more creativity into education than just adding more knowledge. There is explosive creativity happening around the world. Things are changing rapidly and for the first time in history we are on the brink of a future that is going to move on warp drive speeds. Tech Startups and Innovative businesses are going to pop up everywhere. We want to take part in this change. We want to serve people to get better equipped to shape humanity's future. Its all so exciting!</p></div>
      </div>
    )
  }
}

export default AboutUs;
