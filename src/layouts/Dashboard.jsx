import React from 'react'
import Sidebar from '../components/Sidebar'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import BottomNav from '../components/BottomNav'

export default function Dashboard() {
  return (
    <Box sx={{ display: 'flex', maxWidth: "1920px", backgroundColor: '#ececec' }}>
      <Sidebar />
      <Outlet />
      <BottomNav />
    </Box>
  )
}
