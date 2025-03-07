import { Box } from '@mui/material'
import React from 'react'
import ExtraInfoCard from './ExtraInfoCard'
import Marquee from 'react-fast-marquee'

export default function ExtraInfo() {
    return (
        <Box component="section" sx={{
            height: '56px',
            width: '100%',
            bgcolor: 'white',
            display: { md: 'block', xs: 'none' }
        }}>

            <Marquee pauseOnHover={true}>
                <ExtraInfoCard />
                <ExtraInfoCard />
                <ExtraInfoCard />
                <ExtraInfoCard />
                <ExtraInfoCard />
                <ExtraInfoCard />
                <ExtraInfoCard />
                <ExtraInfoCard />
                <ExtraInfoCard />
                <ExtraInfoCard />
                <ExtraInfoCard />
                <ExtraInfoCard />
            </Marquee>

        </Box>
    )
}
