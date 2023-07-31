import React, { useContext } from 'react';
import { Avatar } from './Avatar';
import './styles/Services.scss';
import { useNavigate } from 'react-router-dom';
import { ProblemAreas } from './ProblemAreas';
import { OrganizationProblems } from '../constants/Constants';
import { JhcContext } from '../context/JhcContext';
import Image from '../images/Jonas-4.png';
import Header from './Header';

export const Services = () => {
    const navigate = useNavigate();
    const { selectedProblemType, setSelectedProblemType } = useContext(JhcContext);

    function handleOnClickRedirect() {
        navigate(`${process.env.REACT_APP_BASEURL}/actions`);
    }

    return (
        <div className="problem-utilization">
            <div className="content">
                <Header />
                <div className="avatar">
                    <Avatar image={Image} />
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
                <div className="redirect-btn" onClick={handleOnClickRedirect}>
                    Continue
                </div>
            </div>
        </div>
    )
}