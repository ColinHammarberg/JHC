import React from 'react';
import { Box, TextField } from '@mui/material';
import { useLocalStorageState } from './queries/LocalStorage';
import { OrganizationProblems } from '../constants/Constants';

const BookMeetingForm = () => {
    const [selectedProblemsStorage] = useLocalStorageState('selectedProblemsStorage', []);
    const selectedProblemTitles = OrganizationProblems.filter(problem => selectedProblemsStorage.includes(problem.key))
    .map(problem => problem.title);

    return (
        <Box className="form">
            <Box className="name-fields">
                <Box className="content">
                    <TextField label="first name"/>
                </Box>
                <Box className="content">
                    <TextField label="last name" />
                </Box>
            </Box>
            <Box className="work-email-field">
                <TextField label="email address" />
            </Box>
            <Box className="comapny-field">
                <TextField label="company name"/>
            </Box>
            <Box className="description">
                <div className="title">{selectedProblemTitles.length > 1 ? 'Chosen areas' : 'Chosen area'}</div>
                {selectedProblemTitles.map((item) => {
                    return (
                        <div className="selected-problem-item">{item}</div>
                    )
                })}
            </Box>
        </Box>
    )
};

export default BookMeetingForm;
