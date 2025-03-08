import React, { useState } from 'react';
import { Box, Paper, Typography, Stack, Divider, Input } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { BiSolidPlaneAlt } from "react-icons/bi";
import CancelIcon from '@mui/icons-material/Cancel';
import { MdAddCircle } from 'react-icons/md';
import axios from 'axios';

export default function NewRoute() {
    const [flights, setFlights] = useState([{ id: crypto.randomUUID() }]);
    console.log(flights)
    const addFlight = () => {
        setFlights([...flights, { id: crypto.randomUUID() }]);
    };

    // Function to remove a flight by ID
    const removeFlight = (id) => {
        setFlights(flights.filter(flight => flight.id !== id));
    };

    //main functionality
     //search-1
  const [firstSearch, setFirstSearch] = useState(false)
  const handleFirstSearchOpen = () => {
    setFirstSearch(!firstSearch);
    setSecondSearch(false);
  }
  //value
  const [firstSearchResult, setFirstSearchResult] = useState({
    address: "Dhaka, Bangladesh",
    name: "Hazrat Sha Jalal Intl Airport",
    code: "DAC"
  })

  const handleFirstSearchValueChange = async (event) => {
    const value = event.target.value.toLowerCase();
    // console.log(value)
    const response = await axios.post(
      "https://flyfar-int-v2-user-panel.de.r.appspot.com/api/v1/admin/airports/search-suggestion",
      { keyword: value }
    );
    setFirstSearchResult({
      address: response.data.data[0].result.address || "Dhaka, Bangladesh",
      name: response.data.data[0].result.name || "Hazrat Sha Jalal Intl Airport",
      code: response.data.data[0].result.code || "DAC"
    });

  };



  //search-2
  const [secondSearch, setSecondSearch] = useState(false)
  const handleSecondSearchOpen = () => {
    setSecondSearch(!secondSearch);
    setFirstSearch(false);
  }

  //vaue
  // const [secondSearchValue, setSecondSearchValue] = useState('')
  const handleSecondSearchValueChange = async (event) => {
    const value = event.target.value.toLowerCase();
    // console.log(value)
    const response = await axios.post(
      "https://flyfar-int-v2-user-panel.de.r.appspot.com/api/v1/admin/airports/search-suggestion",
      { keyword: value }
    );
    setFirstSearchResult({
      address: response.data.data[0].result.address || "Dhaka, Bangladesh",
      name: response.data.data[0].result.name || "Hazrat Sha Jalal Intl Airport",
      code: response.data.data[0].result.code || "DAC"
    });
  };


  //departure value
  const [departureValue, setDepartureValue] = useState({
    address: "Dhaka, Bangladesh",
    name: "Hazrat Sha Jalal Intl Airport",
    code: "DAC"
  })

  const handleDepartureValue=(address,name,code)=>{
    setDepartureValue({
  address:address,
  name:name,
  code:code
    })
    setFirstSearch(false)
  }


  
  //arrival value
  const [arrivalValue, setArrivalValue] = useState({
    address: "Dhaka, Bangladesh",
    name: "Hazrat Sha Jalal Intl Airport",
    code: "DAC"
  })

  const handleArrivalValue=(address,name,code)=>{
    setArrivalValue({
  address:address,
  name:name,
  code:code
    })
    setSecondSearch(false)
  }


    return (
        <>
            {flights.map((flight, index) => (
                <React.Fragment key={flight.id}>
                    {/* Divider */}
                    <Divider textAlign="left"
                        sx={{
                            gridColumn: 'span 8',
                            my: 1,
                            display: 'flex',
                            alignItems: 'center',
                            borderColor: '#E34825',
                        }}>
                        <BiSolidPlaneAlt fontSize={20} color='#E34825' /> Flight {index + 2}
                    </Divider>

                    {/* First Column */}
                    <Box
                        sx={{
                            gridColumn: { md: "span 6", xs: "span 2" },
                            display: "flex",
                            flexDirection: "column",
                            gridRow: 'span 2',
                            gap: 1,
                        }}
                    >
                        <Paper sx={{ padding: 2, textAlign: "center", display: 'flex', alignItems: 'center', gap: 1, boxShadow: 'none' ,position: 'relative'}}>
                            <FlightTakeoffIcon />
                            <Typography onClick={handleFirstSearchOpen} sx={{ fontWeight: 500,cursor: 'pointer' }}>DXB, Dubai Intl Airport</Typography>

{/* pop up 1 */}
                            {
                                        firstSearch && <>
                          
                                          <Box sx={{ position: 'absolute', left: '0px', top: '63px', bgcolor: 'white', zIndex: '30', px: 2, pb: 2, pt: 1, width: '100%', boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}>
                                            <Input onChange={handleFirstSearchValueChange} placeholder="Placeholder" sx={{ width: '100%' }} />
                                            <Paper 
                                            onClick={()=>handleDepartureValue(firstSearchResult.address,firstSearchResult.name, firstSearchResult.code)}
                                            sx={{ display: 'flex', justifyContent: 'space-between', boxShadow: 'none', alignItems: 'center', mt: 1, cursor:'pointer',p:1, ":hover":{bgcolor:'#FFF1ED'} }}>
                                              <Box sx={{ display: 'flex ', flexDirection: 'column', alignItems: 'start', gap: '4px' }}>
                                                <Typography sx={{ fontWeight: 'bold' }}>{firstSearchResult.address}</Typography>
                                                <Typography sx={{ fontWeight: '500', fontSize: '14px', color: '#595959' }}>{firstSearchResult.name}</Typography>
                                              </Box>
                                              <Typography sx={{ fontWeight: 'bold', color: '#E34825' }}>{firstSearchResult.code}</Typography>
                                            </Paper>
                                          </Box>
                                        </>
                                      }
                        </Paper>


{/* second row */}
                        <Paper sx={{ padding: 2, textAlign: "center", display: 'flex', alignItems: 'center', gap: 1, boxShadow: 'none',position:'relative' }}>
                            <FlightLandIcon />
                            <Typography onClick={handleSecondSearchOpen} sx={{ fontWeight: 500,cursor:'pointer' }}>DAC, Hazrat Sha Jalal Intl Airport</Typography>
                             {/* Search 2 */}
                                        {
                                          secondSearch && <>
                            
                                            <Box sx={{ position: 'absolute', left: '0px', top: '63px', bgcolor: 'white', zIndex: '30', px: 2, pb: 2, pt: 1, width: '100%', boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}>
                                              <Input onChange={handleSecondSearchValueChange} placeholder="Placeholder" sx={{ width: '100%' }} />
                                              <Paper onClick={()=>handleArrivalValue(firstSearchResult.address,firstSearchResult.name,firstSearchResult.code)} 
                                              sx={{ display: 'flex', justifyContent: 'space-between', boxShadow: 'none', alignItems: 'center', mt: 1 ,cursor:'pointer',p:1, ":hover":{bgcolor:'#FFF1ED'}}}>
                                                <Box sx={{ display: 'flex ', flexDirection: 'column', alignItems: 'start', gap: '4px' }}>
                                                  <Typography sx={{ fontWeight: 'bold' }}>{firstSearchResult.address}</Typography>
                                                  <Typography sx={{ fontWeight: '500', fontSize: '14px', color: '#595959' }}>{firstSearchResult.name}</Typography>
                                                </Box>
                                                <Typography sx={{ fontWeight: 'bold', color: '#E34825' }}>{firstSearchResult.code}</Typography>
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
                            gridColumn: { md: "span 2", xs: "span 1" },
                            cursor: 'pointer'
                        }}
                    >
                        <Paper sx={{ padding: 1, textAlign: "center", gap: 2, display: 'flex', boxShadow: 'none' }}>
                            <CalendarMonthIcon style={{ width: '24px' }} />
                            <Stack alignItems="center">
                                <Typography variant="caption" sx={{ fontWeight: 500, fontSize: '14px' }}>
                                    March
                                </Typography>
                                <Typography variant="h3">8</Typography>
                                <Typography variant="caption" sx={{ fontWeight: 500, fontSize: '14px' }}>
                                    Saturday
                                </Typography>
                            </Stack>
                        </Paper>
                    </Box>

                    {/* Remove Flight Button */}
                    <Box sx={{
                        gridRow: "span 2",
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#E34825',
                        cursor: 'pointer'
                    }}
                        onClick={() => removeFlight(flight.id)}
                    >
                        <CancelIcon />
                    </Box>
                </React.Fragment>
            ))}

            {/* Divider */}
            <Divider sx={{ gridColumn: 'span 8', my: 2 }} />

            {/* Add Flight Button */}
            <Typography sx={{
                gridColumn: 'span 8',
                textAlign: 'center',
                cursor: 'pointer',
                color: '#E34825',
                fontWeight: 'bold',
                '&:hover': { textDecoration: 'underline' },
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                justifyContent: 'Center'
            }} onClick={addFlight}>
                Add More Flight <MdAddCircle fontSize={25} />
            </Typography>
        </>
    );
}
