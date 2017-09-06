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

			// window.canTakeTest = function(dto, success, error) {
			// 	if (validator.contains(dto.text.toLowerCase(), "yes")){
			// 		console.log("Yes!");
			// 		return success();
			// 	} else if (validator.contains(dto.text.toLowerCase(), "no")) {
			// 		console.log("No");
			// 		return success();
			// 	} else {
			// 		return error()
			// 	}
			// }

			window.isPositiveInteger = function(dto, success, error) {
				if (validator.isInt(dto.text, {min: 0})){
					return success();
				}
				return error();
			}
    // customize your questions here
		this.refs.firstname.setAttribute('cf-questions', "What is your name?");

    this.refs.email.setAttribute('cf-questions', "Hello {previous-answer}, Can you tell me your email id?||Hey {previous-answer}, may I know your email id?");
		this.refs.email.setAttribute('cf-validation', 'window.validateEmail');
		this.refs.email.setAttribute('cf-error', 'The email id must be valid');

		this.refs.taketest.setAttribute('cf-questions', 'We would like to know more about you. Can I ask you some questions?&&I have some general questions, math puzzles and analytical problems with me.')

		this.refs.yestotest.setAttribute('cf-questions', "Awesome! Here goes the first question&&Ramus' mom keeps his socks in his cupboard drawer. He owns 5 pairs of black socks and 5 pairs of white.&&The room is dark and there is a electricity failure. Ramu wants to make sure he picks up a pair of same colored socks.&&How many socks must he pick from the drawer?");
		this.refs.yestotest.setAttribute('cf-validation', "window.isPositiveInteger");
		this.refs.yestotest.setAttribute('cf-conditional-taketest-val', "yes");

		this.refs.nototest.setAttribute('cf-questions', "You decided not to continue, I am sad. Hmmm... Ok, bye bye");
		this.refs.nototest.setAttribute('cf-conditional-taketest-val', "no");

		this.refs.q2.setAttribute('cf-questions', "Cool. Here is the 2nd question.&&What is the next number in the sequence 0, 1, 1, 2, 3, 5,___");
		this.refs.q2.setAttribute('cf-validation', "window.isPositiveInteger");

		this.refs.q3.setAttribute('cf-questions', "Hey I have got a physics question. If Sachin takes a cricket ball, and rotates it along the axis of its seam&&But then the wind adds a rotation at an angle to the seam&&In how many axes is the ball rotating");

		this.refs.g1.setAttribute('cf-questions', "What would you like to create with python?");
		this.refs.g2.setAttribute('cf-questions', "Have you done programming before? if so which programming languages have you worked with?");


		this.cf = cf.startTheConversation({
      formEl: this.refs.form,
      context: document.getElementById("cf-context"), // <-- bind this to an element instead of html body
      flowStepCallback: (dto, success, error) => {
        success();
      },
			// Using submitCallback breaks formspree sending. Just tell user that they will be redirected to new page.
      submitCallback: () => {
        // action when form submitted
        console.log("Form submitted...");
				this.cf.addRobotChatResponse("Thanks for your time. Have a nice day!");
				console.log(this.cf);
				var formData = this.cf.getFormData();
				var formDataSerialized = this.cf.getFormData(true);
				console.log("Formdata:", formData);
				console.log("Formdata, serialized:", formDataSerialized);
				if (formDataSerialized["taketest-val"][0] == "yes"){
					window.document.getElementById('test_form').submit();
				}
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
							id="test_form"
							cf-prevent-autofocus>

						<input type="text" ref="firstname" name="name" />
						<input type="email" ref="email" name="_replyto" />

						<fieldset id="test-value" ref="taketest">
								<label for="intro-yes">Yes
									<input type="radio" name="taketest-val" id="intro-yes" value="yes"/>
								</label>

								<label for="intro-no">No thanks
									<input type="radio" name="taketest-val" id="intro-no" value="no"/>
								</label>
						</fieldset>

						<input
							type="text"
							id="gr8"
							name="cfc-step1"
							ref="yestotest"
							cf-conditional-taketest-val="yes" />

							<fieldset id="q3-value" ref="q3">
										<label for="q3-1">One
											<input type="radio" name="q3-val" id="q3-1" value="1"/>
										</label>

										<label for="q3-2">Two
											<input type="radio" name="q3-val" id="q3-2" value="2"/>
										</label>

										<label for="q3-3">Three
											<input type="radio" name="q3-val" id="q3-3" value="3"/>
										</label>
								</fieldset>

						<input type="text" name="question-2" ref="q2"/>

						<input type="text" name="g1" ref="g1"  />
						<input type="text" name="g2" ref="g2"  />
						{/* If user says no to take test, the form jumps to this point */}
						<input
							id="nope"
							type="text"
							ref="nototest"
							cf-conditional-taketest-val="no" />
						<input type="submit" name="btnsubmit" value="Send" />



				</form>
        </div>
      </div>
    );
  }
}

export default Hello;
