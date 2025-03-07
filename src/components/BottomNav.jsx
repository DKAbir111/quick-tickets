import React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper, Box } from '@mui/material';
import { PiDatabaseLight } from "react-icons/pi";
import { MdManageHistory } from "react-icons/md";
import { IoGridSharp, IoSearch } from "react-icons/io5";
import { LiaHomeSolid } from "react-icons/lia";

export default function BottomNav() {
    return (
        <Paper sx={{ display: { xs: 'block', md: 'none' }, position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation sx={{ height: '88px', position: 'relative' }}>
                <BottomNavigationAction label="Home" icon={<LiaHomeSolid fontSize={25} />} />
                <BottomNavigationAction label="Favorites" icon={<PiDatabaseLight fontSize={25} />} />
                <Box
                    sx={{
                        position: 'absolute',
                        bgcolor: '#E34825',
                        color: 'white',
                        height: '52px',
                        width: '52px',
                        borderRadius: '50%',
                        top: '-30%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: 3,
                    }}
                >
                    <IoSearch fontSize={25} />
                </Box>

                <BottomNavigationAction label="Manage" icon={<MdManageHistory fontSize={25} />} />
                <BottomNavigationAction label="Grid" icon={<IoGridSharp fontSize={25} />} />
            </BottomNavigation>
        </Paper>
    );
}
