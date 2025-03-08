import React, { useState } from 'react';
import { Box, Paper, Typography, Stack, Divider, Input } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { BiSolidPlaneAlt } from "react-icons/bi";
import CancelIcon from '@mui/icons-material/Cancel';
import { MdAddCircle } from 'react-icons/md';
import axios from 'axios';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';

export default function NewRoute() {
    const [flights, setFlights] = useState([{ id: crypto.randomUUID(), departure: null, arrival: null, date: new Date() }]);

    const addFlight = () => {
        setFlights([...flights, { id: crypto.randomUUID(), departure: null, arrival: null, date: new Date() }]);
    };

    const removeFlight = (id) => {
        setFlights(flights.filter(flight => flight.id !== id));
    };

    // Function to update flight details (departure, arrival, date)
    const updateFlightData = (id, field, value) => {
        setFlights(flights.map(flight =>
            flight.id === id ? { ...flight, [field]: value } : flight
        ));
    };

    // Store the open/closed state of search dropdowns and calendar for each flight
    const [searchState, setSearchState] = useState({});

    const toggleSearch = (id, type) => {
        setSearchState(prevState => ({
            ...prevState,
            [id]: { ...prevState[id], [type]: !prevState[id]?.[type] }
        }));
    };

    const toggleCalendar = (id) => {
        setSearchState(prevState => ({
            ...prevState,
            [id]: { ...prevState[id], calendar: !prevState[id]?.calendar }
        }));
    };

    // Handle search for departure and arrival
    const [firstSearchResult, setFirstSearchResult] = useState({
        address: "Dhaka, Bangladesh",
        name: "Hazrat Sha Jalal Intl Airport",
        code: "DAC"
    });

    const handleSearchValueChange = async (event) => {
        const value = event.target.value.toLowerCase();
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

    const handleDepartureValue = (id, address, name, code) => {
        updateFlightData(id, 'departure', { address, name, code });
        toggleSearch(id, 'departure');
    };

    const handleArrivalValue = (id, address, name, code) => {
        updateFlightData(id, 'arrival', { address, name, code });
        toggleSearch(id, 'arrival');
    };

    const formattedFlights = flights.map(flight => ({
      departure: flight.departure?.code || 'DAC',  
      arrival: flight.arrival?.code || 'DAC',       
      departureDate: new Date(flight.date).toISOString().split('T')[0] 
  }));
  
  console.log(formattedFlights);
  
    return (
        <>
            {flights.map((flight, index) => (
                <React.Fragment key={flight.id}>
                    <Divider textAlign="left" sx={{ gridColumn: 'span 8', my: 1, display: 'flex', alignItems: 'center', borderColor: '#E34825' }}>
                        <BiSolidPlaneAlt fontSize={20} color='#E34825' /> Flight {index + 1}
                    </Divider>

                    {/* First Column */}
                    <Box sx={{ gridColumn: { md: "span 6", xs: "span 2" }, display: "flex", flexDirection: "column", gridRow: 'span 2', gap: 1 }}>
                        <Paper sx={{ padding: 2, textAlign: "center", display: 'flex', alignItems: 'center', gap: 1, boxShadow: 'none', position: 'relative' }}>
                            <FlightTakeoffIcon />
                            <Typography onClick={() => toggleSearch(flight.id, 'departure')} sx={{ cursor: 'pointer', fontWeight: 500 }}>
                                {flight.departure ? `${flight.departure.code}, ${flight.departure.name}` : 'DAC, Hazrat Sha Jalal Intl Airport'}
                            </Typography>

                            {searchState[flight.id]?.departure && (
                                <Box sx={{ position: 'absolute', left: '0px', top: '63px', bgcolor: 'white', zIndex: '30', px: 2, pb: 2, pt: 1, width: '100%', boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}>
                                    <Input onChange={handleSearchValueChange} placeholder="Search Airports" sx={{ width: '100%' }} />
                                    <Paper onClick={() => handleDepartureValue(flight.id, firstSearchResult.address, firstSearchResult.name, firstSearchResult.code)} sx={{ display: 'flex', justifyContent: 'space-between', boxShadow: 'none', alignItems: 'center', mt: 1, cursor: 'pointer', p: 1, ":hover": { bgcolor: '#FFF1ED' } }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '4px' }}>
                                            <Typography sx={{ fontWeight: 'bold' }}>{firstSearchResult.address}</Typography>
                                            <Typography sx={{ fontWeight: '500', fontSize: '14px', color: '#595959' }}>{firstSearchResult.name}</Typography>
                                        </Box>
                                        <Typography sx={{ fontWeight: 'bold', color: '#E34825' }}>{firstSearchResult.code}</Typography>
                                    </Paper>
                                </Box>
                            )}
                        </Paper>

                        {/* Arrival Column */}
                        <Paper sx={{ padding: 2, textAlign: "center", display: 'flex', alignItems: 'center', gap: 1, boxShadow: 'none', position: 'relative' }}>
                            <FlightLandIcon />
                            <Typography onClick={() => toggleSearch(flight.id, 'arrival')} sx={{ cursor: 'pointer', fontWeight: 500 }}>
                                {flight.arrival ? `${flight.arrival.code}, ${flight.arrival.name}` : 'DXB, Dubai Intl Airport'}
                            </Typography>

                            {searchState[flight.id]?.arrival && (
                                <Box sx={{ position: 'absolute', left: '0px', top: '63px', bgcolor: 'white', zIndex: '30', px: 2, pb: 2, pt: 1, width: '100%', boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}>
                                    <Input onChange={handleSearchValueChange} placeholder="Search Airports" sx={{ width: '100%' }} />
                                    <Paper onClick={() => handleArrivalValue(flight.id, firstSearchResult.address, firstSearchResult.name, firstSearchResult.code)} sx={{ display: 'flex', justifyContent: 'space-between', boxShadow: 'none', alignItems: 'center', mt: 1, cursor: 'pointer', p: 1, ":hover": { bgcolor: '#FFF1ED' } }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '4px' }}>
                                            <Typography sx={{ fontWeight: 'bold' }}>{firstSearchResult.address}</Typography>
                                            <Typography sx={{ fontWeight: '500', fontSize: '14px', color: '#595959' }}>{firstSearchResult.name}</Typography>
                                        </Box>
                                        <Typography sx={{ fontWeight: 'bold', color: '#E34825' }}>{firstSearchResult.code}</Typography>
                                    </Paper>
                                </Box>
                            )}
                        </Paper>
                    </Box>

                    {/* Date Column */}
                    <Box onClick={() => toggleCalendar(flight.id)} sx={{ gridRow: "span 2", gridColumn: { md: "span 2", xs: "span 1" }, cursor: 'pointer' }}>
                        <Paper sx={{ padding: 1, textAlign: "center", gap: 2, display: 'flex', boxShadow: 'none' }}>
                            <CalendarMonthIcon style={{ width: '24px' }} />
                            <Stack alignItems="center">
                                <Typography variant="caption" sx={{ fontWeight: 500, fontSize: '14px' }}>
                                    {format(flight.date, 'MMMM')}
                                </Typography>
                                <Typography variant="h3">{format(flight.date, 'd')}</Typography>
                                <Typography variant="caption" sx={{ fontWeight: 500, fontSize: '14px' }}>
                                    {format(flight.date, 'eeee')}
                                </Typography>
                            </Stack>
                        </Paper>

                        {searchState[flight.id]?.calendar && (
                            <DatePicker
                                selected={flight.date}
                                onChange={(date) => updateFlightData(flight.id, 'date', date)}
                                inline
                            />
                        )}
                    </Box>

                    {/* Remove Flight Button */}
                    <Box sx={{ gridRow: "span 2", display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#E34825', cursor: 'pointer' }} onClick={() => removeFlight(flight.id)}>
                        <CancelIcon />
                    </Box>
                </React.Fragment>
            ))}

            <Divider sx={{ gridColumn: 'span 8', my: 2 }} />

            {/* Add Flight Button */}
            <Typography sx={{ gridColumn: 'span 8', textAlign: 'center', cursor: 'pointer', color: '#E34825', fontWeight: 'bold', '&:hover': { textDecoration: 'underline' }, display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'Center' }} onClick={addFlight}>
                Add More Flight <MdAddCircle fontSize={25} />
            </Typography>
        </>
    );
}
