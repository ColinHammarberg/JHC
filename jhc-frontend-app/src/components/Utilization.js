import React from 'react';
import { Avatar } from './Avatar';
import './styles/ProblemUtilization.scss';
import Microsoft from '../images/Microsoft.png';
import Fellowmind from '../images/Fellowmind.png';
import Vattenfall from '../images/Vattenfall.png';
import Spce from '../images/SPCE.png';
import { JhcButton } from './Buttons';
import { useNavigate } from 'react-router-dom';
import { ProblemAreas } from './ProblemAreas';

export const Utalization = () => {
    const navigate = useNavigate();
    const OrganizationProblems = [
        {
            key: 1,
            source: Microsoft
        },
        {
            key: 2,
            source: Fellowmind
        },
        {
            key: 3,
            source: Vattenfall
        },
        {
            key: 4,
            source: Spce
        },
    ]
    function handleOnClick() {
        navigate('/utalization');
    }
    return (
        <div className="problem-utilization">
            <div className="content">
                <div className="avatar">
                    <Avatar />
                </div>
                <div className="description">
                    Helping all from large companies to small start-ups succeed and reach their vision in the most engaging and tangible way.
                </div>
                <div className="showcase">
                    {OrganizationProblems.map((item) => {
                        return (
                            <ProblemAreas item={item} />
                        )
                    })}
                </div>
                <div className="redirect-btn">
                    <JhcButton onClick={handleOnClick} label="Enter Site" />
                </div>
            </div>
        </div>
    )
}