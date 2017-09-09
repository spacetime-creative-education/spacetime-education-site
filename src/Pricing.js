import React, {Component} from 'react';
import Promotion from './assets/promotion.svg';


class PricingTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="pricing-table">

        <div className="pricing-content">

          <div className="price">Rs. 15,000</div>
          <hr></hr>
          <span style={{"padding-bottom": 1+"rem"}}>
            <div className="feature discount"><img src={Promotion} width="24px" height="24px"></img><p>Students can avail 20% discount</p></div>
          </span>
          <div className="feature">12 Weeks course</div>
          <div className="feature">2hrs/week class to learn concepts</div>
          <div className="feature">2hrs/week worksession to code and gain experential knowledge</div>
          <div className="feature">4hrs/week worth of weekly assignments, and project-work</div>
          <div className="feature">Learn pro tools like <a href="https://git-scm.com/video/what-is-git">Git</a> for version control, <a href="https://docs.pytest.org/en/latest/">Py.test</a> for unit testing and about code coverage</div>
          <div className="feature"></div>
          <a href="#" className="download-syllabus-link"><div className="download-syllabus">Download syllabus
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
          <path d="M38 18h-8v-12h-12v12h-8l14 14 14-14zm-28 18v4h28v-4h-28z"/>
          <path d="M0 0h48v48h-48z" fill="none"/>
      </svg> */}
      </div></a>
        </div>
        <div className='wave -one'></div>
        {/* <div className="discount"></div> */}
        {/* <div className='wave -two'></div> */}
        {/* <div className='wave -three'></div> */}
      </div>
    )
  }
}

export default PricingTable;
