import React from 'react'
import TopBarMobile from '../components/Dashboard/TopBarMobile'
import SearchHeader from '../components/SearchResult/SearchHeader'
import Topbar from '../components/Dashboard/Topbar'
import { Box, Container } from '@mui/material'
import { Fullscreen } from '@mui/icons-material'
import FlightFilterBar from '../components/SearchResult/FlightFilterBar'

export default function SearchResult() {
    return (
        <Box sx={{ width: '100%', backgroundColor: '#ececec', display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', py: 4 }}>
            <TopBarMobile />
            <Topbar />
            <SearchHeader />
            <Box component="section" sx={{ width: '1180px' }}>
                <FlightFilterBar />
            </Box>

        </Box>
    )
}
