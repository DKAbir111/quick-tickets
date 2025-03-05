import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SearchIcon from '@mui/icons-material/Search';
import SearchType from './SearchType';
export default function TripType() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentDate = new Date();
  const monthName = currentDate.toLocaleString('en-US', { month: 'long' });
  const dayName = currentDate.toLocaleString('en-US', { weekday: 'long' });
  const dayOfMonth = currentDate.getDate();
  console.log(currentDate)
  
  useEffect(() => {
    axios
      .post('https://flyfar-int-v2-user-panel.de.r.appspot.com/api/v1/admin/airports/search-suggestion', 
        { keyword: 'dxb' },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then((response) => {
        setData(response.data.data); 
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);


  return (
   <Box sx={{my:3}}>
{/* button */}
<div style={{display:'flex', alignItems:'center', gap:20}}>
<Button variant="contained" sx={{textTransform:'none', backgroundColor:'#202124'}}>One Way</Button>
<Button variant="text" sx={{textTransform:'none', color:'black'}}>Round Way</Button>
<Button variant="text" sx={{textTransform:'none', color:'black'}}>Multi City </Button>
</div>


<Box
  sx={{
    display: "grid",
    gridTemplateColumns: "repeat(9, 1fr)",
    gridTemplateRows: "repeat(2, 56px)", // Fixed height for each row
    gap: 2,
    py: 5,
  }}
>
  {/* First Column - One Row Span */}
  <Box
    sx={{
      gridColumn: "span 3",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      height: '70px', // Ensure the height is fixed
    }}
  >
    <Paper sx={{ padding: 2, textAlign: "center", display: 'flex', alignItems: 'center', gap: 1, height: '100%' }}>
      <FlightTakeoffIcon /> <Typography sx={{ fontWeight: 'bold' }}>DAC, Hazrat Sha Jalal Intl Airport</Typography>
    </Paper>
    <Paper sx={{ padding: 2, textAlign: "center", display: 'flex', alignItems: 'center', gap: 1, height: '100%' }}>
      <FlightLandIcon /> <Typography sx={{ fontWeight: 'bold' }}>DAC, Hazrat Sha Jalal Intl Airport</Typography>
    </Paper>
  </Box>

  {/* Second Column - Two Row Span */}
  <Box
    sx={{
      gridRow: "span 2", 
      display: "flex",
      flexDirection: "column",
      height: '100%', // Ensure the height is fixed
    }}
  >
    <Paper sx={{ padding: 2, textAlign: "center", display: 'flex', height: '100%' }}>
      <CalendarMonthIcon />
      <div>
        <Typography variant="caption">{monthName}</Typography>
        <Typography variant="h3">{dayOfMonth}</Typography>
        <Typography variant="caption">{dayName}</Typography>
      </div>
    </Paper>
  </Box>

  {/* Third Column - Two Row Span */}
  <Box
    sx={{
      gridRow: "span 2",
      display: "flex",
      flexDirection: "column",
      height: '100%', // Ensure the height is fixed
    }}
  >
    <Paper sx={{ padding: 2, textAlign: "center", height: '100%' }}>
      <CalendarMonthIcon />
      <Typography sx={{ fontSize: '14px' }}>Click to Return Flight</Typography>
    </Paper>
  </Box>

  {/* Fourth Column - One Row Span */}
  <Box
    sx={{
      gridColumn: "span 3",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      height: '100%', // Ensure the height is fixed
    }}
  >
    <Paper sx={{ padding: 2, textAlign: "center", height: '100%' }}>
      <Typography>Economy</Typography>
    </Paper>
    <Paper sx={{ padding: 2, textAlign: "center", height: '100%' }}>
      <Typography>1 Passenger</Typography>
    </Paper>
  </Box>

  {/* Fifth Column - Two Row Span */}
  <Box
    sx={{
      gridRow: "span 2", 
      display: "flex",
      flexDirection: "column",
      height: '100%', // Ensure the height is fixed
    }}
  >
    <Paper sx={{ padding: 2, textAlign: "center", backgroundColor: '#2a2e2d', color: 'white', height: '100%' }}>
      <SearchIcon sx={{ fontSize: '36px' }} />
      <Typography>Search</Typography>
    </Paper>
  </Box>
</Box>


<SearchType/>
</Box>
  )
}
