import { Button, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
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
    axios.post('https://flyfar-int-v2-user-panel.de.r.appspot.com/api/v1/admin/airports/search-suggestion', {
      keyword: 'dxb'
    })
      .then(res => {
        setData(res.data)
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  console.log(data)
  console.log(loading)
  return (
    <Box sx={{ my: 4 }}>
      {/* button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <Button variant="contained" sx={{ textTransform: 'none', backgroundColor: '#202124', boxShadow: 'none', fontWeight: 500 }}>One Way</Button>
        <Button variant="text" sx={{ textTransform: 'none', color: '#202124', fontWeight: 500 }}>Round Way</Button>
        <Button variant="text" sx={{ textTransform: 'none', color: '#202124', fontWeight: 500 }}>Multi City </Button>
      </div>


      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(9, 1fr)",
          gridTemplateRows: "repeat(2, 55px)",
          gap: 1,
          py: 5,
        }}
      >
        {/* First Column */}
        <Box
          sx={{
            gridColumn: "span 4",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Paper sx={{ padding: 2, textAlign: "center", display: 'flex', alignItems: 'center', gap: 1, boxShadow: 'none' }}>
            <FlightTakeoffIcon /> <Typography sx={{ fontWeight: 500 }}>DAC, Hazrat Sha Jalal Intl Airport</Typography>
          </Paper>
          <Paper sx={{ padding: 2, textAlign: "center", display: 'flex', alignItems: 'center', gap: 1, boxShadow: 'none' }}>
            <FlightLandIcon /> <Typography sx={{ fontWeight: 500 }}>DAC, Hazrat Sha Jalal Intl Airport</Typography>
          </Paper>
        </Box>

        {/* Second Column */}
        <Box
          sx={{
            gridRow: "span 2",
          }}
        >
          <Paper sx={{ padding: 1, textAlign: "center", display: 'flex', boxShadow: 'none' }}>
            <CalendarMonthIcon />
            <Stack alignItems="center">
              <Typography variant="caption" sx={{ fontWeight: 500, fontSize: '14px' }}>{monthName}</Typography>
              <Typography variant="h3">{dayOfMonth}</Typography>
              <Typography variant="caption" sx={{ fontWeight: 500, fontSize: '14px' }}>{dayName}</Typography>
            </Stack>
          </Paper>
        </Box>

        {/* Third Column */}
        <Box
          sx={{
            gridRow: "span 2",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Paper sx={{ padding: 1, textAlign: "start", height: '128px', boxShadow: 'none' }}>
            <CalendarMonthIcon />
            <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>Click to Return Flight</Typography>
          </Paper>
        </Box>

        {/* Fourth Column  */}
        <Box
          sx={{
            gridColumn: "span 2",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Paper sx={{ padding: 2, textAlign: "center", height: '100%', boxShadow: 'none' }}>
            <Typography sx={{ fontWeight: 500 }}>Economy</Typography>

          </Paper>
          <Paper sx={{ padding: 2, textAlign: "center", height: '100%', boxShadow: 'none' }}>
            <Typography sx={{ fontWeight: 500 }}>1 Passenger</Typography>
          </Paper>
        </Box>

        {/* Fifth Column */}
        <Box
          sx={{
            gridRow: "span 2",
          }}
        >
          <Paper sx={{ padding: 2, display: 'flex', backgroundColor: '#2a2e2d', color: 'white', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <SearchIcon sx={{ fontSize: '45px' }} />
            <Typography sx={{ fontWeight: 500, fontSize: '17px' }}>Search</Typography>
          </Paper>
        </Box>
      </Box>


      <SearchType />
    </Box >
  )
}
