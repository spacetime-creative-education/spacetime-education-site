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
        <div className="about-desc"><p>Spacetime Education is a newborn teacherpreneurship. It wants education to be fun again, not see it as just a tool for jobhunting, but a platform to play and explore the immense creative treasures in us.
        There is explosive creativity happening around the world. Things are changing rapidly and for the first time in human history we are on the brink of a future that is going to move into a warp drive and no one know whats on the other side. Tech Startups and Innovative businesses are going to pop up everywhere. We want to take part in this change. We want to serve people to get better equipped to shape humanity's future. Its all so exciting!</p></div>
      </div>
    )
  }
}

export default AboutUs;
