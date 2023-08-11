import React from 'react';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BusinessIcon from '@mui/icons-material/Business';
import Diversity3Icon from '@mui/icons-material/Diversity3';

export const OrganizationProblems = [
    {
        key: 1,
        icon: <RecordVoiceOverIcon />,
        title: 'PUBLIC SPEECH'
    },
    {
        key: 2,
        icon: <AccessibilityNewIcon />,
        title: 'EXECUTIVE COACHING'
    },
    {
        key: 3,
        icon: <ApartmentIcon />,
        title: 'LEADERSHIP DEVELOPMENT'
    },
    {
        key: 4,
        icon: <Diversity3Icon />,
        title: 'CORPORATE CULTURE'
    },
    {
        key: 5,
        icon: <BusinessIcon />,
        title: 'GO-TO-MARKET'
    },
]

export const menuItems = [
    {
        key: 1,
        navigation: 'videocases',
        title: "Inspiration",
        className: 'usecases'
    },
    {
        key: 2,
        navigation: 'services',
        title: 'Services',
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