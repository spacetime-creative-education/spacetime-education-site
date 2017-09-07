import React, { Component } from 'react';
import logo from './assets/logo.png';
import Menubar from './Menu.js';
import MediaQuery from 'react-responsive';

class StickyHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shorten: false // shorten the header
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount invoked');
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('touchmove', this.handleScroll); //mobile scroll
  }

  componentWillUnmount() {
    console.log('componentWillUnmount invoked');
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('touchmove', this.handleScroll);
  }

  handleScroll(event){
      console.log('Scroll detected');
      console.log(document.documentElement.scrollTop);
      if (document.documentElement.scrollTop !== 0){
        this.setState({shorten: true});
      } else {
        this.setState({shorten: false});
      }

      console.log(this.state.shorten);
      console.log((this.state.shorten ? 'shorten-header' : ''))
      //event.preventDefault();
  }

  changeHeight(){
    return " " + (this.state.shorten ? 'shorten-header' : '');
  }

  render() {
    return (
      <header className={this.changeHeight()} >
        <div className="header-bar header-row">
          <div className="header-item">
            <MediaQuery minWidth={768}>
              <Menubar width="40%"></Menubar>
            </MediaQuery>
            <MediaQuery maxWidth={767}>
              <Menubar width="75%"></Menubar>
            </MediaQuery>
          </div>
          <div className="header-item">
            <div className="column">
              <img className="logo" src={ logo } />
            <h1 id="ht" className="header-title">Spacetime Education</h1>
            </div>
          </div>
          <div className="header-item hidden"></div>
        </div>
      </header>
    );
  }
}

export default StickyHeader;
