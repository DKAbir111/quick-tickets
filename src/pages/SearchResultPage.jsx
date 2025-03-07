import React from 'react'
import TopBarMobile from '../components/Dashboard/TopBarMobile'
import SearchHeader from '../components/SearchResult/SearchHeader'
import Topbar from '../components/Dashboard/Topbar'
import { Box } from '@mui/material'
import FlightFilterBar from '../components/SearchResult/FlightFilterBar'
import SearchResult from '../components/SearchResult/SearchResult'
import ExtraInfo from '../components/SearchResult/ExtraInfo'
import SearchHeaderMobile from '../components/SearchResult/SearchHeaderMobile'

export default function SearchResultPage() {
    return (
        <Box sx={{ width: '100%', minHeight: '100vh', backgroundColor: '#ececec', display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
            <TopBarMobile />
            <SearchHeaderMobile />
            <Topbar />
            <SearchHeader />
            <Box component="section" sx={{ maxWidth: '1180px', width: '100%', px: { xs: 2, md: 0 } }}>
                <ExtraInfo />
                <FlightFilterBar />
                <SearchResult />
            </Box>

        </Box>
    )
}
