import { Box, Container } from '@mui/material'
import React from 'react'
import TopBarMobile from '../components/Dashboard/TopBarMobile'
import Topbar from '../components/Dashboard/Topbar'

export default function SearchResult() {
    return (
        <Container sx={{ py: { md: 3, xs: 0 }, px: 0, backgroundColor: '#ececec' }}>
            <TopBarMobile />
            <Box sx={{ px: 2 }}>

                <Topbar />

            </Box>
        </Container>
    )
}
