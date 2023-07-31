import React from 'react';
import './styles/ProblemArea.scss';
import { JhcContext } from '../context/JhcContext';
import BoxButton from './BoxButton';

export const ProblemAreas = (props) => {
    const { item } = props;
    const { handleOnClickServices, selectedProblems } = React.useContext(JhcContext);
    function handleOnClick() {
      handleOnClickServices(item)
    }

    const isActive = selectedProblems.includes(item.key);
    console.log('selectedProblems', selectedProblems);
    
    return (
        <div className="problem-area">
          <div className="content">
            <BoxButton onClick={handleOnClick} className={`${isActive && 'active'}`} variant={item.icon} />
              <div className="title">
                {item.title}
              </div>
            </div>
        </div>
    )
}