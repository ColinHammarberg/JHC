import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles/BookMeetingFormDialog.scss';
import JhcContextProvider, { JhcContext } from '../context/JhcContext';

let resolve;
let containerElement;

const BookMeetingFormDialog = ({ render, isConfirmed }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { fieldErrors, setIsConfirmed } = React.useContext(JhcContext);

  const handleCancel = () => {
    setIsOpen(false);
    BookMeetingFormDialog.destroy({ isConfirmed: false });
  };

  const handleConfirm = async () => {
    await setIsConfirmed(true);
    const fieldsNotEmpty = Object.values(fieldErrors).every(error => error !== '');
    console.log('fieldsNotEmpty', fieldsNotEmpty);
    if (fieldsNotEmpty) {
      setIsOpen(false);
      BookMeetingFormDialog.destroy({ isConfirmed: false });
    } else {
      setIsOpen(true);
      BookMeetingFormDialog.destroy({ isConfirmed: true });
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
