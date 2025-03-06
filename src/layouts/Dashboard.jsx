import React from 'react'
import Sidebar from '../components/Sidebar'
import DashBoardPage from '../pages/DashBoardPage'
import { Box } from '@mui/material'

export default function Dashboard() {
  return (
    <Box sx={{ display: 'flex', maxWidth: "1920px", backgroundColor: '#ececec' }}>
      <Sidebar />
      <DashBoardPage />
    </Box>
  )
}
