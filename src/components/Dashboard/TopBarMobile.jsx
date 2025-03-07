import { Box } from '@mui/material';
import React from 'react';
import logo from '../../assets/logo.png';
import { useLocation } from 'react-router-dom';

export default function TopBarMobile() {
    const location = useLocation()
    return (
        <Box
            sx={{
                height: '84px',
                backgroundColor: 'white',
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                width: '100%',
                mb: location.pathname === '/search-result' ? 0 : 2
            }}
        >
            <img
                src={logo}
                alt="Logo"
                style={{ maxWidth: "175px", height: "auto" }}
            />
        </Box>
    );
}
