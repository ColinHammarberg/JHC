import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

export const JhcContext = createContext();

const JhcContextProvider = ({ children }) => {
  const [selectedProblemType, setSelectedProblemType] = useState([]);

  function handleOnClickProblemType(problemType) {
    if (!selectedProblemType.includes(problemType.key)) {
      setSelectedProblemType([problemType, ...selectedProblemType])
    } else {
      return;
    }
  }

  return (
    <JhcContext.Provider
      value={{
        selectedProblemType,
        setSelectedProblemType,
        handleOnClickProblemType
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