import React, { Component } from 'react';
import cf from 'conversational-form';
import ContactForm from './ContactForm.js';
import validator from 'validator';

class Hello extends Component {
		constructor(props) {
			super(props);
			this.cf = null; // <-- Conversational Form ref
			this.focus = this.focus.bind(this);
		}

		focus(){
			// console.log("Inside focus");
			// console.log(this.userInput);
			if(this.cf.userInput)
				{
					this.cf.userInput.setFocusOnInput();
					// console.log("Focusing tried out");
					this.cf.formEl.scrollIntoView();
				}
		}

    componentDidMount(){
			window.validateEmail = function(dto, success, error){
				// console.log(dto);
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

		this.refs.canicall.setAttribute('cf-questions', 'Would you like us to give you a call?')

		this.refs.yestocall.setAttribute('cf-questions', 'Please give me your contact number')
		this.refs.yestocall.setAttribute('cf-conditional-canicall-val', "yes")

		this.refs.taketest.setAttribute('cf-questions', 'We would like to know more about you. Can I ask you some questions?&&I have some general questions, and puzzles with me.&&Note, you can click on your replies to edit them')

		this.refs.yestotest.setAttribute('cf-questions', "Awesome! Here goes the first question&&Ramus' mom keeps his socks in his cupboard drawer. He owns 5 pairs of black socks and 5 pairs of white.&&The room is dark and the lights doesn't work. Ramu wants to make sure he picks up a pair of same color socks for his field trip tomorrow.&&How many socks should he pick from the drawer to ensure that?");
		this.refs.yestotest.setAttribute('cf-validation', "window.isPositiveInteger");
		this.refs.yestotest.setAttribute('cf-conditional-taketest-val', "yes");

		this.refs.nototest.setAttribute('cf-questions', "You decided not to continue, Catch you later... bye bye");
		this.refs.nototest.setAttribute('cf-conditional-taketest-val', "no");

		this.refs.how_many_axes.setAttribute('cf-questions', "Cool. Here is the 2nd question.&&Its a physics question. If Sachin takes a cricket ball, and throws it with a rotation along the axis of its seam&&But then the wind adds a rotation at an angle to the seam&&In how many axes is the ball rotating");

		this.refs.fibonacci.setAttribute('cf-questions', "What is the next number in the sequence 0, 1, 1, 2, 3, 5,___");
		this.refs.fibonacci.setAttribute('cf-validation', "window.isPositiveInteger");

		this.refs.threads.setAttribute('cf-questions', "You have 2 pieces of string of different, unspecified length, and some matches.&&Each piece of string takes exactly an hour to burn, but the burn rate is not constant. This means that it could take 59 minutes to burn the first 1⁄4, and 1 minute for the rest.&&Using only the matches and the strings, how can you measure 45 minutes?");

		this.refs.g1.setAttribute('cf-questions', "What would you like to create with python?");
		this.refs.g2.setAttribute('cf-questions', "Have you done programming before? if so which programming languages have you worked with?");
		this.refs.futurepath.setAttribute('cf-questions', "Which of these programming paths would you like to take up after learning the basics of python programming?");


		this.cf = cf.startTheConversation({
      formEl: this.refs.form,
      context: document.getElementById("cf-context"), // <-- bind this to an element instead of html body
      flowStepCallback: (dto, success, error) => {
        success();
      },
			// Using submitCallback breaks formspree sending. Just tell user that they will be redirected to new page.
      submitCallback: () => {
        // action when form submitted
        // console.log("Form submitted...");
				this.cf.addRobotChatResponse("Thanks for your time. Have a nice day!");
				// console.log(this.cf);
				var formData = this.cf.getFormData();
				var formDataSerialized = this.cf.getFormData(true);
				// console.log("Formdata:", formData);
				// console.log("Formdata, serialized:", formDataSerialized);
				// if (formDataSerialized["taketest-val"][0] == "yes"){
					// window.document.getElementById('test_form').setAttribute("target", "_blank");
					window.document.getElementById('test_form').submit();
					// this.props.onFormComplete();  // Tell parent that the form is submitted successfully
				// }
      }
    });

		this.focus();

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
						{/* Phone number */}
						<fieldset id="phone-yesno" ref="canicall">
								<label for="phone-yes">Yes
									<input type="radio" name="canicall-val" id="phone-yes" value="yes"/>
								</label>

								<label for="phone-no">Maybe Later
									<input type="radio" name="canicall-val" id="phone-no" value="no"/>
								</label>
						</fieldset>

						<input
							type="text"
							id="yesph"
							name="phone-number"
							ref="yestocall"
							cf-conditional-canicall-val="yes" />

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
							name="how-many-socks"
							ref="yestotest"
							cf-conditional-taketest-val="yes" />

							<fieldset id="how_many_axes-value" ref="how_many_axes">
										<label for="how_many_axes-1">One
											<input type="radio" name="how_many_axes-val" id="how_many_axes-1" value="1"/>
										</label>

										<label for="how_many_axes-2">Two
											<input type="radio" name="how_many_axes-val" id="how_many_axes-2" value="2"/>
										</label>

										<label for="how_many_axes-3">Three
											<input type="radio" name="how_many_axes-val" id="how_many_axes-3" value="3"/>
										</label>
								</fieldset>

						<input type="text" name="fibo-sequence" ref="fibonacci"/>
						<input type="text" name="burning-threads" ref="threads"/>

						<input type="text" name="g1" ref="g1"  />
						<input type="text" name="g2" ref="g2"  />
						<fieldset id="future-path" ref="futurepath">
									<label for="fullstack">Web Development
										<input type="checkbox" name="future-path-val" id="fullstack" value="fullstack"/>
									</label>

									<label for="ml">Machine Learning
										<input type="checkbox" name="future-path-val" id="ml" value="ML"/>
									</label>

									<label for="game">Game development
										<input type="checkbox" name="future-path-val" id="game" value="gamedev"/>
									</label>

									<label for="other">Other
										<input type="checkbox" name="future-path-val" id="other" value="other"/>
									</label>
							</fieldset>
							
						{/* If user says no to take test, the form jumps to this point */}
						<input
							id="nope"
							type="text"
							ref="nototest"
							cf-conditional-taketest-val="no" />
						<input type="submit" name="btnsubmit" value="Send" />{/* button name should NOT be 'submit'*/}

				</form>
        </div>
      </div>
    );
  }
}

export default Hello;
