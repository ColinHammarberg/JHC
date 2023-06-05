import React, { useState } from 'react';
import { Avatar } from './Avatar';
import './styles/Utalization.scss';
import { JhcButton } from './Buttons';
import { useNavigate } from 'react-router-dom';
import { ProblemAreas } from './ProblemAreas';
import { OrganizationProblems } from '../constants/Constants';

export const Utalization = () => {
    const navigate = useNavigate();
    const [selectedUtalization, setSelectedUtalization] = useState([]);
    function handleOnClickUtalization(type) {
        setSelectedUtalization([type]);
        console.log('selectedUtalization', selectedUtalization);
    }
    function handleOnClickRedirect() {
        navigate('/meetings');
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
                            <ProblemAreas onClick={handleOnClickUtalization} item={item} />
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