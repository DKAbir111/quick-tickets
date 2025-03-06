import React from 'react'
import Sidebar from '../components/Sidebar'
import DashBoardPage from '../pages/DashBoardPage'
import { Box } from '@mui/material'

export default function Dashboard() {
  return (
    <Box sx={{display:'flex',backgroundColor:'#ececec',maxWidth:"1920px"}}>
      <Sidebar/>
      <DashBoardPage/>
    </Box>
  )
}
