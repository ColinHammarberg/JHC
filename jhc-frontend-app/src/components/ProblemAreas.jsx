import React, { useContext } from 'react';
import './styles/ProblemArea.scss';
import { IconButton } from '@mui/material';
import { JhcContext } from '../context/JhcContext';

export const ProblemAreas = (props) => {
  const { item } = props;
  const { selectedProblemType, setSelectedProblemType } = useContext(JhcContext);

  function handleOnClickUtalization() {
    if (selectedProblemType.includes(item.key)) {
      setSelectedProblemType(selectedProblemType.filter((key) => key !== item.key));
    } else {
      setSelectedProblemType([...selectedProblemType, item.key]);
      props.onClick(item);
    }
  }

  const isActive = selectedProblemType.includes(item.key);

  return (
    <div className="problem-area">
      <div className="content">
        <IconButton onClick={handleOnClickUtalization} className={isActive && 'active'}>
          {item.icon}
        </IconButton>
        <div className="title">{item.title}</div>
      </div>
    </div>
  );
};