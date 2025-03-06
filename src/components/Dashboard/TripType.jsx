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
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import '../../App.css'
//date
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"; 
import { format } from 'date-fns';
import zIndex from '@mui/material/styles/zIndex';
export default function TripType() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

//date
const [isCalendarOpen, setIsCalendarOpen] = useState(false);
 const [selectedDate, setSelectedDate] = useState(new Date());
 const monthName = selectedDate ? format(selectedDate, 'MMMM') : '';
 const dayName = selectedDate ? format(selectedDate, 'eeee') : '';
 const dayOfMonth = selectedDate ? selectedDate.getDate() : '';
 const toggleCalendar = () => {
  setIsCalendarOpen((prev) => !prev);
};

//date-return
  const [isCalendarReturnOpen, setIsCalendarReturnOpen] = useState(false);
  const [selectedDateReturn, setSelectedDateReturn] = useState(new Date());
  const monthNameReturn = selectedDateReturn? format(selectedDateReturn, 'MMMM') : '';
  const dayNameReturn = selectedDateReturn? format(selectedDateReturn, 'eeee') : '';
  const dayOfMonthReturn = selectedDateReturn? selectedDateReturn.getDate() : '';
  const toggleCalendarReturn = () => {
    setIsCalendarReturnOpen((prev) =>!prev);
  };
  
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


  //trip types
  const [tripType,setTripType]=useState('oneway')


  const changeTripType=(type)=>{
if(type==='oneway'){
  setTripType('oneway')
}
if(type==='roundway'){
  setTripType('roundway')
}
  if(type==='multiway'){
    setTripType('multiway')
  }
  }
  return (
    <Box sx={{ my: 4 }}>
      {/* button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <Button onClick={()=>changeTripType('oneway')} variant={`${tripType==="oneway"?"contained":"text"}`} sx={{ textTransform: 'none', backgroundColor: tripType==="oneway"? '#202124':'',color:tripType==="oneway"? '':'#202124',boxShadow: 'none', fontWeight: 500 }}>One Way</Button>

        <Button onClick={()=>changeTripType('roundway')} variant={`${tripType==="roundway"?"contained":"text"}`} sx={{ textTransform: 'none', backgroundColor: tripType==="roundway"? '#202124':'',color:tripType==="roundway"? '':'#202124', fontWeight: 500 }}>Round Way</Button>


        <Button onClick={()=>changeTripType('multiway')}  variant={`${tripType==="multiway"?"contained":"text"}`} sx={{ textTransform: 'none', backgroundColor: tripType==="multiway"? '#202124':'',color:tripType==="multiway"? '':'#202124', fontWeight: 500 }}>Multi City </Button>
      </div>


      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(9, 1fr)",
          gridTemplateRows: "repeat(2, 55px)",
          gap: '7px',
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
            width:'419px'
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
        width: '161px',
        zIndex:10
      }}
    >
      <Paper
        sx={{ padding: 1, textAlign: "center", gap: 2, display: 'flex', boxShadow: 'none' }}
        onClick={toggleCalendar} 
      >
        <CalendarMonthIcon style={{ width: '24px' }} />
        <Stack alignItems="center">
          <Typography variant="caption" sx={{ fontWeight: 500, fontSize: '14px' }}>
            {monthName}
          </Typography>
          <Typography variant="h3">{dayOfMonth}</Typography>
          <Typography variant="caption" sx={{ fontWeight: 500, fontSize: '14px' }}>
            {dayName}
          </Typography>
        </Stack>
      </Paper>
      
{/* date picker */}
      {isCalendarOpen && (
      
         <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          inline
        />
    
      )}
    </Box>

        {/* Third Column */}
        <Box
          sx={{
            gridRow: "span 2",
            width:'161px',
            zIndex:10
          
          }}
        >
          {
           tripType==='roundway'? <>
           <Paper onClick={toggleCalendarReturn}  sx={{ padding: 1, textAlign: "center",gap:2, display: 'flex', boxShadow: 'none' }}>
            <CalendarMonthIcon style={{width:'24px'}}/>
            <Stack alignItems="center">
              <Typography variant="caption" sx={{ fontWeight: 500, fontSize: '14px' }}>{monthNameReturn}</Typography>
              <Typography variant="h3">{dayOfMonthReturn}</Typography>
              <Typography variant="caption" sx={{ fontWeight: 500, fontSize: '14px' }}>{dayNameReturn}</Typography>
          
            </Stack>
          
          </Paper>
           </>:
           <>
         <Paper sx={{ padding: 1,textAlign:'center', height: '128px', boxShadow: 'none', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
            <AssignmentReturnIcon  style={{fontSize:'40px'}} />
            <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>Click to Return Flight</Typography>
          </Paper>
           </>
          }
          {/* date picker */}
      {isCalendarReturnOpen && (
      
      <DatePicker
       selected={selectedDate}
       onChange={(date) => setSelectedDateReturn(date)}
       inline
     />
 
   )}
        </Box>

        {/* Fourth Column  */}
        <Box
          sx={{
            gridColumn: "span 2",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width:'281px'
          }}
        >
          <Paper sx={{ padding: 2, textAlign: "start", height: '100%', boxShadow: 'none' }}>
            <Typography sx={{ fontWeight: 500 }}>Economy</Typography>

          </Paper>
          <Paper sx={{ padding: 2, textAlign: "start", height: '100%', boxShadow: 'none' }}>
            <Typography sx={{ fontWeight: 500 }}>1 Passenger</Typography>
          </Paper>
        </Box>

        {/* Fifth Column */}
        <Box
          sx={{
            gridRow: "span 2",
            width:'134px'
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
