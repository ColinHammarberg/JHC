import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles/BookMeetingFormDialog.scss';
import JhcContextProvider, { JhcContext } from '../context/JhcContext';
import { sendEmail } from '../constants/Utils';

let resolve;
let containerElement;

const BookMeetingFormDialog = ({ render, isConfirmed }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { fieldErrors, setIsConfirmed, formFieldValues } = React.useContext(JhcContext);

  async function handleEmailSending() {
    try {
        const result = await sendEmail(formFieldValues);
        console.log('Email sent successfully:', result);
        return result;
    } catch (error) {
        console.error('Error sending email:', error);
    }
  }

  const handleCancel = async () => {
    setIsOpen(false);
    BookMeetingFormDialog.destroy({ isConfirmed: false });
  };

  const handleConfirm = async () => {
    await setIsConfirmed(true);
    const fieldsNotEmpty = Object.values(fieldErrors).every(value => value !== '');
    if (fieldsNotEmpty) {
      await handleEmailSending();
      setTimeout(() => {
        setIsOpen(false);
        BookMeetingFormDialog.destroy({ isConfirmed: true });
      }, 3000)
    }
  };

  if (!isOpen) {
    return null;
  }

  return render({
    handleConfirm,
    handleCancel,
    isConfirmed
  });
};

BookMeetingFormDialog.propTypes = {};

BookMeetingFormDialog.destroy = (retVal = false) => {
  if (containerElement) {
    ReactDOM.unmountComponentAtNode(containerElement);
    document.body.removeChild(containerElement);
  }
  if (resolve) resolve(retVal);
};

BookMeetingFormDialog.show = (renderFn) => {
  containerElement = document.createElement('div');
  document.body.appendChild(containerElement);

  const renderDialog = (props) => (
    <JhcContextProvider>
      <BookMeetingFormDialog {...props} />
    </JhcContextProvider>
  );

  ReactDOM.render(renderFn(renderDialog), containerElement);

  return new Promise((res) => {
    resolve = res;
  });
};

export default BookMeetingFormDialog;
