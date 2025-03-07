import { Button, FormControl, FormControlLabel, FormLabel, Input, MenuItem, Radio, RadioGroup, Select, Stack, TextField, Typography } from '@mui/material'
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
  const monthNameReturn = selectedDateReturn ? format(selectedDateReturn, 'MMMM') : '';
  const dayNameReturn = selectedDateReturn ? format(selectedDateReturn, 'eeee') : '';
  const dayOfMonthReturn = selectedDateReturn ? selectedDateReturn.getDate() : '';
  const toggleCalendarReturn = () => {
    setIsCalendarReturnOpen((prev) => !prev);
  };


  //data fetch
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
  const [tripType, setTripType] = useState('oneway')


  const changeTripType = (type) => {
    if (type === 'oneway') {
      setTripType('oneway')
    }
    if (type === 'roundway') {
      setTripType('roundway')
    }
    if (type === 'multiway') {
      setTripType('multiway')
    }
  }

  //bussiness class
  const [classOpen, setClassOpen] = useState(false)
  const handleOpenClass = () => {
    setClassOpen(!classOpen)
  }


  const [newClass, setNewClass] = useState('')
  const handleClassChange = (e) => {
    e.preventDefault()
    setNewClass(e.target.value)
    console.log(newClass)
    setClassOpen(false)
  }

  //passenger
  const [passengerOpen, setPasengerOpen] = useState(false)

  const handleOpenPassenger = () => {
    setPasengerOpen(!passengerOpen)
  }

  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [infant, setInfant] = useState(0);

  // Calculate total passengers dynamically
  const total = adult + children + infant;

  const handleAdultChange = (num) => {
    setAdult((prev) => Math.max(0, prev + num));
  };

  const handleChildrenChange = (num) => {
    setChildren((prev) => Math.max(0, prev + num));
  };

  const handleInfantChange = (num) => {
    setInfant((prev) => Math.max(0, prev + num));
  };


  //search-1
  const [firstSearch, setFirstSearch] = useState(false)
  const handleFirstSearchOpen = () => {
    setFirstSearch(!firstSearch);
    setSecondSearch(false);
  }

  //search-2
  const [secondSearch, setSecondSearch] = useState(false)
  const handleSecondSearchOpen = () => {
    setSecondSearch(!secondSearch);
    setFirstSearch(false);
  }



  return (
    <Box sx={{ my: 4 }}>
      {/* button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <Button onClick={() => changeTripType('oneway')} variant={`${tripType === "oneway" ? "contained" : "text"}`} sx={{ textTransform: 'none', backgroundColor: tripType === "oneway" ? '#202124' : '', color: tripType === "oneway" ? '' : '#202124', boxShadow: 'none', fontWeight: 500 }}>One Way</Button>

        <Button onClick={() => changeTripType('roundway')} variant={`${tripType === "roundway" ? "contained" : "text"}`} sx={{ textTransform: 'none', backgroundColor: tripType === "roundway" ? '#202124' : '', color: tripType === "roundway" ? '' : '#202124', fontWeight: 500 }}>Round Way</Button>


        <Button onClick={() => changeTripType('multiway')} variant={`${tripType === "multiway" ? "contained" : "text"}`} sx={{ textTransform: 'none', backgroundColor: tripType === "multiway" ? '#202124' : '', color: tripType === "multiway" ? '' : '#202124', fontWeight: 500 }}>Multi City </Button>
      </div>


      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "repeat(9, 1fr)", xs: "repeat(2, 1fr)" },
          gridTemplateRows: { md: "repeat(2, 55px)", xs: "repeat(8, 55px)" },
          gap: 1,
          py: 5,
        }}
      >
        {/* First Column */}
        <Box
          sx={{
            gridColumn: { md: "span 4", xs: "span 2" },
            display: "flex",
            flexDirection: "column",
            gridRow: 'span 2',
            gap: 1,
            width: { md: '419px', xs: '100%' }
          }}
        >
          <Paper sx={{ position: 'relative', padding: 2, textAlign: "center", display: 'flex', alignItems: 'center', gap: 1, boxShadow: 'none' }}>
            <FlightTakeoffIcon /> <Typography onClick={handleFirstSearchOpen} sx={{ cursor: 'pointer', fontWeight: 500 }}>DAC, Hazrat Sha Jalal Intl Airport</Typography>
            {/* Search */}
            {
              firstSearch && <>

                <Box sx={{ position: 'absolute', left: '0px', top: '63px', bgcolor: 'white', zIndex: '10', px: 2, pb: 2, pt: 1, width: '100%', boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}>
                  <Input placeholder="Placeholder" sx={{ width: '100%' }} />
                  <Paper sx={{ display: 'flex', justifyContent: 'space-between', boxShadow: 'none', alignItems: 'center', mt: 1 }}>
                    <Box sx={{ display: 'flex ', flexDirection: 'column', alignItems: 'start', gap: '4px' }}>
                      <Typography sx={{ fontWeight: 'bold' }}>Dhaka, Bangladesh</Typography>
                      <Typography sx={{ fontWeight: '500', fontSize: '14px', color: '#595959' }}>Hazrat Sha Jalal Intl Airport</Typography>
                    </Box>
                    <Typography sx={{ fontWeight: 'bold', color: '#E34825' }}>DAC</Typography>
                  </Paper>
                </Box>
              </>
            }

          </Paper>

          <Paper sx={{ position: 'relative', padding: 2, textAlign: "center", display: 'flex', alignItems: 'center', gap: 1, boxShadow: 'none' }}>
            <FlightLandIcon /> <Typography onClick={handleSecondSearchOpen} sx={{ cursor: 'pointer', fontWeight: 500 }}>DAC, Hazrat Sha Jalal Intl Airport</Typography>
            {/* Search 2 */}
            {
              secondSearch && <>

                <Box sx={{ position: 'absolute', left: '0px', top: '63px', bgcolor: 'white', zIndex: '10', px: 2, pb: 2, pt: 1, width: '100%', boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}>
                  <Input placeholder="Placeholder" sx={{ width: '100%' }} />
                  <Paper sx={{ display: 'flex', justifyContent: 'space-between', boxShadow: 'none', alignItems: 'center', mt: 1 }}>
                    <Box sx={{ display: 'flex ', flexDirection: 'column', alignItems: 'start', gap: '4px' }}>
                      <Typography sx={{ fontWeight: 'bold' }}>Dhaka, Bangladesh</Typography>
                      <Typography sx={{ fontWeight: '500', fontSize: '14px', color: '#595959' }}>Hazrat Sha Jalal Intl Airport</Typography>
                    </Box>
                    <Typography sx={{ fontWeight: 'bold', color: '#E34825' }}>DAC</Typography>
                  </Paper>
                </Box>
              </>
            }
          </Paper>
        </Box>

        {/* Second Column */}
        <Box
          sx={{
            gridRow: "span 2",
            width: { md: '161px', xs: '100%' },
            zIndex: 10,
            cursor: 'pointer'
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
            width: { md: '161px', xs: '100%' },
            zIndex: 10,
            cursor: 'pointer'

          }}
        >
          {
            tripType === 'roundway' ? <>
              <Paper onClick={toggleCalendarReturn} sx={{ padding: 1, textAlign: "center", gap: 2, display: 'flex', boxShadow: 'none' }}>
                <CalendarMonthIcon style={{ width: '24px' }} />
                <Stack alignItems="center">
                  <Typography variant="caption" sx={{ fontWeight: 500, fontSize: '14px' }}>{monthNameReturn}</Typography>
                  <Typography variant="h3">{dayOfMonthReturn}</Typography>
                  <Typography variant="caption" sx={{ fontWeight: 500, fontSize: '14px' }}>{dayNameReturn}</Typography>

                </Stack>

              </Paper>
            </> :
              <>
                <Paper onClick={() => {
                  changeTripType('roundway')
                  toggleCalendarReturn()
                }} sx={{ padding: 1, textAlign: 'center', height: '118px', boxShadow: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <AssignmentReturnIcon style={{ fontSize: '40px' }} />
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
            gridRow: 'span 2',
            gap: 1,
            width: { md: '281px', xs: '100%' }
          }}
        >

          {/* <Typography sx={{ fontWeight: 500 }}>Economy</Typography> */}
          <Paper sx={{ padding: 2, textAlign: "start", height: '100%', boxShadow: 'none', position: 'relative' }}>
            <Typography onClick={handleOpenClass} sx={{ fontWeight: 500, cursor: 'pointer' }}>{newClass ? newClass : "Economy"}</Typography>

            {
              classOpen && <>

                <Box sx={{ backgroundColor: 'white', p: 2, position: 'absolute', zIndex: 20, width: '281px', left: '0px', top: '65px' }}>
                  <FormControl>

                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                      onChange={handleClassChange}
                    >
                      <FormControlLabel value="Ecomony" control={<Radio />} label="Ecomony" />
                      <FormControlLabel value="Business" control={<Radio />} label="Business" />
                      <FormControlLabel value="Premium First" control={<Radio />} label="Premium First" />
                      <FormControlLabel value="Premium Economy" control={<Radio />} label="Premium Economy" />
                      <FormControlLabel value="Premium Business" control={<Radio />} label="Premium Business" />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </>
            }
          </Paper>


          {/* number of passenger */}

          <Paper sx={{ padding: 2, textAlign: "start", height: '100%', boxShadow: 'none', position: 'relative' }}>
            <Typography onClick={handleOpenPassenger} sx={{ fontWeight: 500, cursor: 'pointer' }}>{total} Passenger</Typography>
            {
              passengerOpen && <>
                <Box sx={{ backgroundColor: 'white', p: 2, position: 'absolute', zIndex: 30, width: '281px', left: '0px', top: '64px', borderRadius: '5px' }}>

                  {/* 1st */}
                  <Paper sx={{ boxShadow: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>Adult (12+ years)
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                      <Paper onClick={() => handleAdultChange(-1)} sx={{ borderRadius: '50%', height: '20px', width: '20px', backgroundColor: '#E34825', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '18px', cursor: 'pointer' }}>-</Paper> <Typography sx={{ fontWeight: '600' }}>{adult} </Typography>
                      <Paper onClick={() => handleAdultChange(1)} sx={{ borderRadius: '50%', height: '20px', width: '20px', backgroundColor: '#E34825', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '18px', cursor: 'pointer' }}>+</Paper>


                    </Box>

                  </Paper>


                  {/* 2nd */}
                  <Paper sx={{ boxShadow: 'none', display: 'flex', my: 1.5, alignItems: 'center', justifyContent: 'space-between' }}>Children(2-11 years)
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                      <Paper onClick={() => handleChildrenChange(-1)} sx={{ borderRadius: '50%', height: '20px', width: '20px', backgroundColor: '#E34825', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '18px', cursor: 'pointer' }}>-</Paper> <Typography sx={{ fontWeight: '600' }}>{children}</Typography>
                      <Paper onClick={() => handleChildrenChange(1)} sx={{ borderRadius: '50%', height: '20px', width: '20px', backgroundColor: '#E34825', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '18px', cursor: 'pointer' }}>+</Paper>


                    </Box>

                  </Paper>
                  {/* 
                3rd */}
                  <Paper sx={{ boxShadow: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>Infant (Unser 2 years)
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                      <Paper onClick={() => handleInfantChange(-1)} sx={{ borderRadius: '50%', height: '20px', width: '20px', backgroundColor: '#E34825', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '18px', cursor: 'pointer' }}>-</Paper> <Typography sx={{ fontWeight: '600' }}>{infant} </Typography>
                      <Paper onClick={() => handleInfantChange(1)} sx={{ borderRadius: '50%', height: '20px', width: '20px', backgroundColor: '#E34825', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '18px', cursor: 'pointer' }}>+</Paper>


                    </Box>

                  </Paper>

                  <Button onClick={handleOpenPassenger} variant='contained' sx={{ mt: 1, backgroundColor: '#E34825' }}>Done</Button>
                </Box>
              </>
            }


          </Paper>
        </Box>

        <Box
          sx={{
            gridRow: "span 2",
            gridColumn: { xs: "span 2 ", md: 'span 1' },
            width: { md: '134px', xs: "100%" }
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
