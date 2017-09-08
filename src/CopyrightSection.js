import React, {Component} from 'react';
import {emojify} from 'react-emojione';
import Copyright from 'react-copyright';
import StModal from './StModal.js';
import terms from './assets/terms.json';
import privacy from './assets/privacy.json';
import Text from 'react-format-text';


class CopyrightSection extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="copyright-section">
          <div className="built-with">Built with {emojify(':heart:')} and healthy doses of {emojify(':tea:')} @ Spacetime Education</div>
          <div className="copyright-text">
            <div className="footer-row-item"><Copyright>Spacetime Education</Copyright></div>
            <div className="footer-row-item"><StModal linkName="terms" linkClass="footer-link"><h1>{terms.title}</h1><p><Text>{terms.content}</Text></p></StModal></div>
            <div className="footer-row-item"><StModal linkName="privacy policy" linkClass="footer-link"><h1>{privacy.title}</h1><p><Text>{privacy.content}</Text></p></StModal></div>
          </div>

        </div>
      </div>
    )
  }
}

export default CopyrightSection;
