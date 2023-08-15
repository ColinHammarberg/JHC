import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';
import { useLocalStorageState } from '../components/queries/LocalStorage';

export const JhcContext = createContext();

const JhcContextProvider = ({ children }) => {
  const [selectedProblemsStorage, setSelectedProblemsStorage] = useLocalStorageState('selectedProblemsStorage', []);
  const [selectedProblems, setSelectedProblems] = useState([]);

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

  return (
    <JhcContext.Provider
      value={{
        selectedProblemsStorage,
        setSelectedProblemsStorage,
        selectedProblems,
        setSelectedProblems,
        handleOnClickServices
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
