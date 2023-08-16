import React from 'react';
import { Box, TextField } from '@mui/material';
import { useLocalStorageState } from './queries/LocalStorage';
import { OrganizationProblems } from '../constants/Constants';
import { JhcContext } from '../context/JhcContext';

const BookMeetingForm = (props) => {
    const [selectedProblemsStorage] = useLocalStorageState('selectedProblemsStorage', []);
    const { handleOnChange, formFieldValues, fieldErrors, isConfirmed } = React.useContext(JhcContext);
    const selectedProblemTitles = OrganizationProblems.filter(problem => selectedProblemsStorage.includes(problem.key))
    .map(problem => problem.title);
    return (
        <Box className="form">
            <Box className="name-fields">
                <Box className="content">
                    <TextField
                        onChange={(event) => handleOnChange(event, 'firstName')} 
                        label="first name"
                        value={formFieldValues.firstName}
                        error={isConfirmed && fieldErrors.firstName === ''}
                        helperText={isConfirmed && fieldErrors.firstName == '' ? 'This field is required' : ''}
                        required
                    />
                </Box>
                <Box className="content">
                    <TextField
                        onChange={(event) => handleOnChange(event, 'lastName')} 
                        label="last name" 
                        value={formFieldValues.lastName}
                        error={isConfirmed && fieldErrors.lastName === ''}
                        helperText={isConfirmed && fieldErrors.lastName === '' ? 'This field is required' : ''}
                        required
                    />
                </Box>
            </Box>
            <Box className="work-email-field">
                <TextField
                    onChange={(event) => handleOnChange(event, 'emailAddress')} 
                    label="email address"
                    value={formFieldValues.emailAddress}
                    error={isConfirmed && fieldErrors.emailAddress === ''}
                    helperText={isConfirmed && fieldErrors.emailAddress ? 'This field is required' : ''}
                    required
                />
            </Box>
            <Box className="comapny-field">
                <TextField
                    onChange={(event) => handleOnChange(event, 'companyName')} 
                    label="company name"
                    value={formFieldValues.companyName}
                    error={isConfirmed && fieldErrors.companyName === ''}
                    helperText={isConfirmed && fieldErrors.companyName ? 'This field is required' : ''}
                    required
                />
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
