import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

export const JhcContext = createContext();

const JhcContextProvider = ({ children }) => {
  const [selectedProblemType, setSelectedProblemType] = useState([]);
  console.log('selectedProblemType', selectedProblemType);

  function handleOnClickProblemType(problemType) {
    setSelectedProblemType([problemType, ...selectedProblemType])
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