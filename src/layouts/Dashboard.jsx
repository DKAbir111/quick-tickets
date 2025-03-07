import React from 'react'
import Sidebar from '../components/Sidebar'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <Box sx={{ display: 'flex', maxWidth: "1920px", backgroundColor: '#ececec' }}>
      <Sidebar />
      <Outlet />
    </Box>
  )
}
