import React from 'react';
import './styles/ProblemArea.scss';
import { IconButton } from '@mui/material';
import { JhcContext } from '../context/JhcContext';

export const ProblemAreas = (props) => {
    const { item } = props;
    const { handleOnClickUtalization, selectedProblems } = React.useContext(JhcContext);
    function handleOnClick() {
      handleOnClickUtalization(item)
    }

    const isActive = selectedProblems.includes(item.key);
    console.log('selectedProblems', selectedProblems);
    
    return (
        <div className="problem-area">
          <div className="content">
              <IconButton onClick={handleOnClick} className={`${isActive && 'active'}`}>
                  {item.icon}
              </IconButton>
              <div className="title">
                {item.title}
              </div>
            </div>
        </div>
    )
}