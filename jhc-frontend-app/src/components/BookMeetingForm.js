import React from 'react';
import { Box, TextField } from '@mui/material';

const BookMeetingForm = ({
    problemType,
}) => {
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
                {problemType}
            </Box>
        </Box>
    )
};

export default BookMeetingForm;
