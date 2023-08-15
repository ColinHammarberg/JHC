import React, { useContext } from 'react';
import { Avatar } from './Avatar';
import './styles/Services.scss';
import { ProblemAreas } from './ProblemAreas';
import { OrganizationProblems } from '../constants/Constants';
import { JhcContext } from '../context/JhcContext';
import Image from '../images/Jonas-4.png';
import Header from './Header';
import BookMeetingFormDialog from './BookMeetingFormDialog';

export const Services = () => {
    const { selectedProblemType, setSelectedProblemType } = useContext(JhcContext);

    async function handleOnBookMeeting() {
        const { isConfirmed } = await BookMeetingFormDialog.show();
        if (!isConfirmed) {
            return;
        } else {
            return;
        }
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
                <div className="redirect-btn" onClick={handleOnBookMeeting}>
                    Click to&nbsp;<span>continue</span>
                </div>
            </div>
        </div>
    )
}