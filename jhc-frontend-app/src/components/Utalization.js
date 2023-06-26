import React, { useContext } from 'react';
import { Avatar } from './Avatar';
import './styles/Utalization.scss';
import { JhcButton } from './Buttons';
import { useNavigate } from 'react-router-dom';
import { ProblemAreas } from './ProblemAreas';
import { OrganizationProblems } from '../constants/Constants';
import { JhcContext } from '../context/JhcContext';

export const Utalization = () => {
    const navigate = useNavigate();
    const { selectedProblemType, setSelectedProblemType } = useContext(JhcContext);

    function handleOnClickRedirect() {
        navigate(`${process.env.REACT_APP_BASEURL}/actions`);
    }

    return (
        <div className="problem-utilization">
            <div className="content">
                <div className="avatar">
                    <Avatar />
                </div>
                <div className="description">
                    What would you like to have help with?
                </div>
                <div className="showcase">
                    {OrganizationProblems.map((item) => {
                        return (
                            <ProblemAreas item={item} selectedProblemType={selectedProblemType} setSelectedProblemType={setSelectedProblemType} />
                        )
                    })}
                </div>
                <div className="redirect-btn">
                    <JhcButton onClick={handleOnClickRedirect} label="Continue" />
                </div>
            </div>
        </div>
    )
}