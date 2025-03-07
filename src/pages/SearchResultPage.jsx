import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import TopBarMobile from '../components/Dashboard/TopBarMobile';
import SearchHeader from '../components/SearchResult/SearchHeader';
import Topbar from '../components/Dashboard/Topbar';
import FlightFilterBar from '../components/SearchResult/FlightFilterBar';
import SearchResult from '../components/SearchResult/SearchResult';
import ExtraInfo from '../components/SearchResult/ExtraInfo';
import SearchHeaderMobile from '../components/SearchResult/SearchHeaderMobile';

export default function SearchResultPage() {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Box sx={{ width: '100%', minHeight: '100vh', backgroundColor: '#ececec', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TopBarMobile />
            <SearchHeaderMobile />
            {isMdUp && <Topbar />}
            <SearchHeader />
            <Box component="section" sx={{ maxWidth: '1180px', width: '100%', px: { xs: 2, md: 0 } }}>

                <FlightFilterBar />
                <ExtraInfo />
                <SearchResult />
            </Box>
        </Box>
    );
}
