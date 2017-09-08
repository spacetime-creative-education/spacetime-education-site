import React, {PropTypes} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

class StModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isShowingModal: false,
    }
  }

  handleClick = () => this.setState({isShowingModal: true})
  handleClose = () => this.setState({isShowingModal: false})
  render() {
    return <div onClick={this.handleClick} className={this.props.linkClass}>
      {
        this.state.isShowingModal &&
        <ModalContainer onClose={this.handleClose}>
          <ModalDialog style={{"max-width": "80%"}} onClose={this.handleClose}>
            {this.props.children}
          </ModalDialog>
        </ModalContainer>
      }
      {this.props.linkName}
    </div>;
  }
}

export default StModal;
