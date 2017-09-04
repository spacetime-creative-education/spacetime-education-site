import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { SocialIcon } from 'react-social-icons';

class Menubar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_open: false,
      slab_class: "",
    };
    this.isMenuOpen = this.isMenuOpen.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  isMenuOpen(state){
    if (state.isOpen){
      this.setState({is_open: true, slab_class: "slab animate-slab"});
    } else {
      this.setState({is_open: false, slab_class: "slab"});
    }
    return state.isOpen;
  }

  closeMenu(){
    this.setState({is_open: false});
  }

  render () {
    return (
      <Menu isOpen={this.state.is_open} onStateChange={this.isMenuOpen} width={this.props.width} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <div className="table-content">
          <div className="navigate">
            <div className="content-row">
              <div className="content-item"><h2><a onClick={this.closeMenu} className="content-link" href="#home">Home</a></h2></div>
            <div className="content-item"><h2><a onClick={this.closeMenu} className="content-link" href="#how">Learn</a></h2></div>
            </div>
            <div className="content-row">
              <div className="content-item"><h2><a onClick={this.closeMenu} className="content-link" href="#where">Where</a></h2></div>
            <div className="content-item"><h2><a onClick={this.closeMenu} className="content-link" href="#when">When</a></h2></div>
            </div>
            <div className="content-row">
              <div className="content-item"><h2><a onClick={this.closeMenu} className="content-link" href="#pricing">Pricing</a></h2></div>
            <div className="content-item"><h2><a onClick={this.closeMenu} className="content-link" href="#contact">Contact</a></h2></div>
            </div>
          </div>
          <div className="socialize">
            <div className= { this.state.slab_class } ></div>
            <div className="social-icons">
              <SocialIcon className="filtered" url="https://twitter.com/SpacetimeEdu"></SocialIcon>
              <SocialIcon className="filtered" url="https://www.facebook.com/SpacetimeEdu/"></SocialIcon>
              <SocialIcon className="filtered" url="https://www.youtube.com/channel/UCEzmkFCycBMDJq9xH58ApHQ?view_as=subscriber"></SocialIcon>
              <SocialIcon className="filtered" url="https://www.instagram.com/SpacetimeEdu/"></SocialIcon>
              <SocialIcon className="filtered" url="https://medium.com/spacetime-education"></SocialIcon>
            </div>
            <div className="visiting-card">
              <div className="visiting-card-items"></div>
              <div className="visiting-card-items">
                <div className="visiting-card-right-item">hello@spacetime.education</div>
                <div className="visiting-card-right-item">+91-9790-744-316</div>
              </div>
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
