import React, {Component} from 'react';
import Hello from './Hello.js';

class Apply extends Component {
  constructor(props){
    super(props);
    this.state = {readyToApply: false}; // true when apply button is clicked
    this.onApplyClicked = this.onApplyClicked.bind(this);
  }

  onApplyClicked() {
    this.setState({readyToApply: true});
  }

  render() {
    let content;
    if (this.state.readyToApply){
      content = <Hello></Hello>
    } else {
      content =
      <div>
        <div className="deal"><h1>Here is the deal</h1></div>
        <div className="steps-col">
          <div className="steps-row">
            <div className="steps-row"><h3>When you are ready, click on Apply</h3></div>
          <div className="steps-row"><h3>Answer our pet bot Miphy the questionaire she has for you. We will use the answers you provide to evaluate your application and know more about you</h3></div>
          </div>
          <div className="steps-row">
            <div className="steps-row"><h3>We will then say Hello to you through the email address you provide Miphy</h3></div>
          <div className="steps-row"><h3>After which You can schedule a demo class with us</h3></div>
          </div>
          <div className="steps-row">
            <div className="steps-row"><h3>If you like it, we will help you get on board</h3></div>
            <div className="steps-row"><h3>If this isn't your cup of tea, no biggie. Give us a High5, we will share what other creators have in store. There is lot of Python on the web and its awesome!</h3></div>
          </div>
          <div className="steps-row">
            <a className="apply-btn" onClick={this.onApplyClicked}><div className="apply-bg">Apply</div></a>
          </div>
        </div>

      </div>;
    }

    return (
      <div>
        {content}
      </div>
    )
  }
}

export default Apply;
