import React, {Component} from 'react';
import Hello from './Hello.js';
import { Parallax } from 'react-scroll-parallax';


class Apply extends Component {
  constructor(props){
    super(props);
    this.state = {
      readyToApply: false,
      formCompleted: false
    }; // true when apply button is clicked
    this.onApplyClicked = this.onApplyClicked.bind(this);
    // this.formCompleted = this.formCompleted.bind(this);
  }

  onApplyClicked() {
    this.setState({readyToApply: true});
  }

  /* Form complete callback - NOT required as formspree wants redirection, otherwise can be cool */
  // formCompleted(){
  //   this.setState({formCompleted: true});
  //   console.log("Form Completed");
  // }

  render() {
    let content;
    if (this.state.readyToApply){
      content = <Hello onFormComplete={this.formCompleted}></Hello>
    } else {
      content =
      <div>
        <Parallax className="deal" offsetXMax="0px" offsetXMin="50px" offsetXMax="0px">
          <h1 className="hello-text">Here is the deal</h1>
        </Parallax>

        <Parallax offsetXMax="0px" offsetXMin="0px" offsetXMax="0px">
        <div className="steps-col">
          {/* <div className="steps-row"> */}
          <div className="steps-row">
            <div className="steps-text-1"><h3 className="section__title">01</h3></div>
            <span className="divider"></span>
          <div className="steps-text-2"><h3 className="welcome-text step-item"><i>Click on the Apply button below</i></h3></div>
          </div>

          <div className="steps-row">
            <div className="steps-text-1"><h3 className="section__title">02</h3></div>
            <span className="divider"></span>
          <div className="steps-text-2"><h3 className="welcome-text step-item"><i>Answer all the questions our petbot has for you</i></h3></div>
          </div>

          {/* </div> */}
          {/* <div className="steps-row"> */}
          <div className="steps-row">
            <div className="steps-text-1"><h3 className="section__title">03</h3></div>
            <span className="divider"></span>
          <div className="steps-text-2"><h3 className="welcome-text step-item"><i>We will evaluate your application and notify you on the email address you provide</i></h3></div>
          </div>

          <div className="steps-row">
            <div className="steps-text-1"><h3 className="section__title">04</h3></div>
            <span className="divider"></span>
            <div className="steps-text-2"><h3 className="welcome-text step-item"><i>You can then schedule a demo class</i></h3></div>
          </div>

          {/* </div> */}
          {/* <div className="steps-row"> */}

          <div className="steps-row">
            <div className="steps-text-1"><h3 className="section__title">05</h3></div>
            <span className="divider"></span>
          <div className="steps-text-2"><h3 className="welcome-text step-item"><i>If you like the class, give us a high five, we will set things up and you get on board</i></h3></div>
          </div>

          <div className="steps-row">
            <div className="steps-text-1"><h3 className="section__title">06</h3></div>
            <span className="divider"></span>
            <div className="steps-text-2"><h3 className="welcome-text step-item"><i>If this isn't your cup of tea, no biggie, give us a high five, we will share what other creators have in store. There is a lot of Python on the web and its awesome!</i></h3></div>
          </div>
          {/* </div> */}
          {/* <div className="steps-row"> */}
          <div className="steps-row center-btn">
            <a className="btn" href="#apply" onClick={this.onApplyClicked}><span>Apply</span></a>
          </div>
          {/* </div> */}
        </div>
        </Parallax>
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
