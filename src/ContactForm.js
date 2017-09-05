import React, {Component} from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form action="https://formspree.io/hello@spacetime.education"
            method="POST"
            ref="form"
            cf-prevent-autofocus>
          <input type="text" ref="name" name="name" placeholder="Name"/>
        {/* <input type="email" name="_replyto" /> */}
          <input type="submit" value="Send" />
      </form>
    )
  }
}

export default ContactForm;
