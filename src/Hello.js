import React, { Component } from 'react';
import cf from 'conversational-form';
import ContactForm from './ContactForm.js';
import validator from 'validator';

class Hello extends Component {
		constructor(props) {
			super(props);
			this.cf = null; // <-- Conversational Form ref
		}

    componentDidMount(){
			window.validateEmail = function(dto, success, error){
				console.log(dto);
				if (validator.isEmail(dto.text)) {
					return success();
				}
				return error();
			}

			window.canTakeTest = function(dto, success, error) {
				if (validator.contains(dto.text.toLowerCase(), "yes")){
					console.log("Yes!");
					return success();
				} else if (validator.contains(dto.text.toLowerCase(), "no")) {
					console.log("No");
					return success();
				} else {
					return error()
				}
			}

    // customize your questions here
		this.refs.firstname.setAttribute('cf-questions', "What is your name?");

    this.refs.email.setAttribute('cf-questions', "Hello {previous-answer}, what is your email id?");
		this.refs.email.setAttribute('cf-validation', 'window.validateEmail');
		this.refs.email.setAttribute('cf-error', 'The email id must be valid');

		this.refs.taketest.setAttribute('cf-questions', 'Would you like to take a test? I will ask you 10 questions, and it should take you around 15 mins to complete this. The questions should test you for basic aptitude, pro')
		this.refs.taketest.setAttribute('cf-input-placeholder', "say 'yes' or 'no'")
		this.refs.taketest.setAttribute('cf-validation', 'window.canTakeTest');
		this.refs.taketest.setAttribute('cf-error', 'Please answer with words "yes" or "no"');

		this.refs.yestotest.setAttribute('cf-questions', "{test-value}! Let's goo! please write, <strong>gr8</strong> to continue, if you write something else than <strong>gr8</strong> the will you will skip elements.");
		this.refs.yestotest.setAttribute('cf-conditional-cfc-intro', "yes");

		this.refs.nototest.setAttribute('cf-questions', "You decided not to continue on the conditional adventure, Zelda is sad.");
		this.refs.nototest.setAttribute('cf-conditional-cfc-intro', "no");

		this.cf = cf.startTheConversation({
      formEl: this.refs.form,
      context: document.getElementById("cf-context"), // <-- bind this to an element instead of html body
      flowStepCallback: (dto, success, error) => {
        success();
      },
      submitCallback: () => {
        // action when form submitted
				var formData = this.cf.getFormData();
				var formDataSerialized = this.cf.getFormData(true);
				console.log("Formdata:", formData);
				console.log("Formdata, obj:", formDataSerialized);
        console.log("Form submitted...");
				this.cf.addRobotChatResponse("Thanks for your time. Have a nice day!");
      }
    });
  }

  render() {
    return (
      <div>
        <div id="cf-context" > {/* <-- the cf form will be bound to this element */}
				<form action="https://formspree.io/hello@spacetime.education"
							method="POST"
							ref="form"
							name="test_form"
							cf-prevent-autofocus>
						<input type="text" ref="firstname" name="name" />
						<input type="email" ref="email" name="_replyto" />
						{/* <input type="text" ref="taketest" /> */}
						<fieldset id="test-value" ref="taketest">
								<label for="intro-yes">Yes
									<input type="radio" name="cfc-intro" id="intro-yes" value="yes"/>
								</label>

								<label for="intro-no">No thanks
									<input type="radio" name="cfc-intro" id="intro-no" value="no"/>
								</label>
						</fieldset>
						<input
										type="text"
										id="gr8"
										name="cfc-step1"
										ref="yestotest"
										cf-conditional-cfc-intro="yes" />
						<input
										id="nope"
										type="text"
										ref="nototest"
										 />
									 <input type="submit" name="submit" value="Send" />
				</form>
        </div>
      </div>
    );
  }
}

export default Hello;
