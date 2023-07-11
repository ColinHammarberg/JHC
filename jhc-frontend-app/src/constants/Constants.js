import React from 'react';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BusinessIcon from '@mui/icons-material/Business';

export const OrganizationProblems = [
    {
        key: 1,
        icon: <RecordVoiceOverIcon />,
        title: 'GO-TO-MARKET'
    },
    {
        key: 2,
        icon: <AccessibilityNewIcon />,
        title: 'GO-TO-MARKET'
    },
    {
        key: 3,
        icon: <ApartmentIcon />,
        title: 'GO-TO-MARKET'
    },
    {
        key: 4,
        icon: <BusinessIcon />,
        title: 'GO-TO-MARKET'
    },
]

export const menuItems = [
    {
        key: 1,
        navigation: 'customercases',
        title: "Use-cases",
        className: 'usecases'
    },
    {
        key: 2,
        navigation: 'utalization',
        title: 'Request Help',
        className: 'help'
    },
    {
        key: 3,
        navigation: 'actions',
        title: 'Book Jonas',
        className: 'actions'
    },
    {
        key: 4,
        navigation: 'about',
        title: 'About Jonas',
        className: 'about'
    },
    {
        key: 5,
        navigation: '',
        title: 'Books',
        className: 'books'
    },
]