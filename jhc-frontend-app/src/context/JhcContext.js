import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

export const JhcContext = createContext();

const JhcContextProvider = ({ children }) => {
  const [selectedProblems, setSelectedProblems] = useState([]);

  function handleOnClickServices(item) {
    console.log('item', item);
    const selectedIndex = selectedProblems.indexOf(item.key);
    if (selectedIndex > -1) {
      // Item is already selected, remove it from the selectedProblems array
      const updatedProblems = [...selectedProblems];
      updatedProblems.splice(selectedIndex, 1);
      setSelectedProblems(updatedProblems);
    } else {
      // Item is not selected, add it to the selectedProblems array
      setSelectedProblems([...selectedProblems, item.key]);
    }
  }

  return (
    <JhcContext.Provider
      value={{
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