import React, { PureComponent } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Box, Button, Dialog, DialogContent } from '@mui/material';
import './styles/BookMeetingFormDialog.scss';
import BookMeetingForm from './BookMeetingForm';
import JhcContextProvider from '../context/JhcContext';

let resolve;
let containerElement;

class BookMeetingFormDialog extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
    this.handleCancel = this.handleCancel.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleHistoryStateChanged = this.handleHistoryStateChanged.bind(this);
  }

  componentDidMount() {
    window.addEventListener('popstate', this.handleHistoryStateChanged);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount ConfirmDialog');
    window.removeEventListener('popstate', this.handleHistoryStateChanged);
    resolve = null;
    containerElement = null;
  }

  static destroy(retVal = false) {
    if (containerElement) {
      ReactDOM.unmountComponentAtNode(containerElement);
      document.body.removeChild(containerElement);
    }
    if (resolve) resolve(retVal);
  }

  static show() {
    containerElement = document.createElement('div');
    document.body.appendChild(containerElement);
    render(<BookMeetingFormDialog />, containerElement);
    return new Promise((res) => {
      resolve = res;
    });
  }

  handleCancel() {
    if (this.props.onClickCancel) {
      this.props.onClickCancel();
    } else {
      this.setState({ isOpen: false }, () => {
        BookMeetingFormDialog.destroy({ isConfirmed: false });
      });
    }
  }

  handleHistoryStateChanged() {
    this.setState({ isOpen: false }, () => {
      BookMeetingFormDialog.destroy();
    });
  }

  handleConfirm() {
      this.setState({ isOpen: false }, () => {
        BookMeetingFormDialog.destroy({ isConfirmed: true });
      });
  }

  render() {
    if (!this.state.isOpen) {
      return null;
    }
    return (
        <Dialog
            className="responsive-dialog"
            open
            disableBackdropClick={true}
            disableEscapeKeyDown={true}
        >
        <DialogContent className="dialog-content styled-scrollbar">
          <JhcContextProvider>
            <BookMeetingForm />
            <Box className="action-btn">
              <Button onClick={this.handleConfirm} className="btn confirm">Request</Button>
              <Button onClick={this.handleCancel} className="btn cancel">Discard</Button>
            </Box>
          </JhcContextProvider>
        </DialogContent>
      </Dialog>
    );
  }
}

BookMeetingFormDialog.propTypes = {};

export default BookMeetingFormDialog;
