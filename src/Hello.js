import React, { Component } from 'react';
import cf from 'conversational-form';

class Hello extends Component {
		constructor(props) {
			super(props);
			this.cf = null; // <-- Conversational Form ref
		}

    componentDidMount(){
    // customize your questions here
    this.refs.name.setAttribute('cf-questions', "What is your name?");
    this.refs.email.setAttribute('cf-questions', "What is your email?");
    this.refs.description.setAttribute('cf-questions', "Describe your requirement");
    this.cf = cf.startTheConversation({
      formEl: this.refs.form,
      context: document.getElementById("cf-context"), // <-- bind this to an element instead of html body
      flowStepCallback: (dto, success, error) => {
        success();
      },
      submitCallback: () => {
        // action when form submitted
        console.log("Form submitted...");
      }
    });
  }

  render() {
    return (
      <div>
        <div id="cf-context" > {/* <-- the cf form will be bound to this element */}
          <form id="form" className="form" ref="form">
            <input type="text" ref="name" placeholder="Name" defaultValue={this.props.name}/>
            <input type="email" ref="email" placeholder="Email" defaultValue={this.props.email}/>
            <select ref="description" type="radio" id="links"> {/* <-- using selection for options */}
              <option value="request_1">Request 1</option>
              <option value="request_2">Request 2</option>
            </select>
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Hello;
