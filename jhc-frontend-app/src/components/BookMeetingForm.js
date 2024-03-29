import React from 'react';
import { Box, TextField } from '@mui/material';
import { JhcContext } from '../context/JhcContext';
import { isValidEmail } from '../constants/Utils';

const BookMeetingForm = () => {
    const { handleOnChange, formFieldValues, fieldErrors, isConfirmed, selectedProblemTitles } = React.useContext(JhcContext);
    return (
        <Box className="form">
            <Box className="title">Enter contact details</Box>
            <Box className="fields">
                <Box className="name-fields">
                    <Box className="content">
                        <TextField
                            onChange={(event) => handleOnChange(event, 'firstName')} 
                            label="first name"
                            value={formFieldValues.firstName}
                            error={isConfirmed && fieldErrors.firstName === ''}
                            helperText={isConfirmed && fieldErrors.firstName === '' ? 'This field is required' : ''}
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
                        error={isConfirmed && fieldErrors.emailAddress === '' || isConfirmed && !isValidEmail(formFieldValues.emailAddress)}
                        helperText={isConfirmed && fieldErrors.emailAddress === '' ? 'This field is required' : ''}
                        required
                    />
                </Box>
                <Box className="comapny-field">
                    <TextField
                        onChange={(event) => handleOnChange(event, 'companyName')} 
                        label="company name"
                        value={formFieldValues.companyName}
                        error={isConfirmed && fieldErrors.companyName === ''}
                        helperText={isConfirmed && fieldErrors.companyName === '' ? 'This field is required' : ''}
                        required
                    />
                </Box>
                <Box className="requested-service-field">
                    <TextField
                        label="requested service"
                        value={selectedProblemTitles}
                        disabled
                    />
                </Box>
            </Box>
        </Box>
    )
};

export default BookMeetingForm;
