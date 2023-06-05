import React, { useState } from 'react';
import './styles/ProblemArea.scss';
import { IconButton } from '@mui/material';

export const ProblemAreas = (props) => {
    const { item } = props;
    const [selectedProblems, setSelectedProblems] = useState([]);
    function handleOnClickUtalization() {
        const selectedIndex = selectedProblems.indexOf(item.key);
        if (selectedIndex > -1) {
          // Item is already selected, remove it from the selectedProblems array
          setSelectedProblems(selectedProblems.filter((key) => key !== item.key));
        } else {
          // Item is not selected, add it to the selectedProblems array
          setSelectedProblems([...selectedProblems, item.key]);
        }
    
        if (props.onClick) {
          props.onClick(item.key);
        }
    }
    const isActive = selectedProblems.includes(item.key);
    return (
        <div className="problem-area">
            <IconButton onClick={handleOnClickUtalization} className={`${isActive && 'active'}`}>
                {item.icon}
            </IconButton>
        </div>
    )
}