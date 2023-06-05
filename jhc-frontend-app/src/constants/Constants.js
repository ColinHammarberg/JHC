import React from 'react';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BusinessIcon from '@mui/icons-material/Business';
import Microsoft from '../images/Microsoft.png';
import Fellowmind from '../images/Fellowmind.png';
import Vattenfall from '../images/Vattenfall.png';
import Spce from '../images/SPCE.png';

export const OrganizationProblems = [
    {
        key: 1,
        source: Microsoft,
        icon: <RecordVoiceOverIcon />,
    },
    {
        key: 2,
        source: Fellowmind,
        icon: <AccessibilityNewIcon />,
    },
    {
        key: 3,
        source: Vattenfall,
        icon: <ApartmentIcon />,
    },
    {
        key: 4,
        source: Spce,
        icon: <BusinessIcon />,
    },
]