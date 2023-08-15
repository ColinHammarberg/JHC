import React, { PureComponent } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Dialog, DialogContent } from '@mui/material';
import './styles/BookMeetingFormDialog.scss';
import BookMeetingForm from './BookMeetingForm';

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
    resolve(retVal);
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
        BookMeetingFormDialog.destroy();
      });
    }
  }

  handleHistoryStateChanged() {
    this.setState({ isOpen: false }, () => {
      BookMeetingFormDialog.destroy();
    });
  }

  handleConfirm() {
    if (this.props.onClickOk) {
      this.props.onClickOk();
    } else {
      this.setState({ isOpen: false }, () => {
        BookMeetingFormDialog.destroy(true);
      });
    }
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
          <BookMeetingForm />
        </DialogContent>
      </Dialog>
    );
  }
}

BookMeetingFormDialog.propTypes = {};

export default BookMeetingFormDialog;
