import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';
import { useLocalStorageState } from '../components/queries/LocalStorage';

export const JhcContext = createContext();

const JhcContextProvider = ({ children }) => {
  const [selectedProblemsStorage, setSelectedProblemsStorage] = useLocalStorageState('selectedProblemsStorage', []);
  const [selectedProblems, setSelectedProblems] = useState([]);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [formFieldValues, setFormFieldValues] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    companyName: '',
  });
  const [fieldErrors, setFieldErrors] = useState({
    firstName: formFieldValues.firstName,
    lastName: formFieldValues.lastName,
    emailAddress: formFieldValues.emailAddress,
    companyName: formFieldValues.companyName,
  });

  function handleOnClickServices(item) {
    const selectedIndex = selectedProblems.indexOf(item.key);
    if (selectedIndex > -1) {
      const updatedProblems = [...selectedProblems];
      updatedProblems.splice(selectedIndex, 1);
      setSelectedProblemsStorage(updatedProblems);
      setSelectedProblems(updatedProblems);
    } else {
      setSelectedProblemsStorage([...selectedProblems, item.key]);
      setSelectedProblems([...selectedProblems, item.key]);
    }
  }

  function handleOnChange(event, fieldName) {
    const updatedFieldValues = { ...formFieldValues, [fieldName]: event.target.value };
    setFormFieldValues(updatedFieldValues);
    const updatedFieldErrors = { ...fieldErrors };
    if (!event.target.value.trim()) {
      updatedFieldErrors[fieldName] = true;
    } else {
      updatedFieldErrors[fieldName] = false;
    }
    setFieldErrors(updatedFieldErrors);
  }

  return (
    <JhcContext.Provider
      value={{
        selectedProblemsStorage,
        setSelectedProblemsStorage,
        selectedProblems,
        setSelectedProblems,
        handleOnClickServices,
        handleOnChange,
        formFieldValues,
        setFieldErrors,
        fieldErrors,
        setIsConfirmed,
        isConfirmed
      }}
    >
      {children}
    </JhcContext.Provider>
  );
};

JhcContextProvider.propTypes = {
  children: PropTypes.instanceOf(Array),
};

export default JhcContextProvider;
