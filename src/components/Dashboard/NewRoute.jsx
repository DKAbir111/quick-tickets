import React, { useState } from 'react';
import { Box, Paper, Typography, Stack, Divider } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { BiSolidPlaneAlt } from "react-icons/bi";
import CancelIcon from '@mui/icons-material/Cancel';
import { MdAddCircle } from 'react-icons/md';

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
                        <Paper sx={{ padding: 2, textAlign: "center", display: 'flex', alignItems: 'center', gap: 1, boxShadow: 'none' }}>
                            <FlightTakeoffIcon />
                            <Typography sx={{ fontWeight: 500 }}>DXB, Dubai Intl Airport</Typography>
                        </Paper>

                        <Paper sx={{ padding: 2, textAlign: "center", display: 'flex', alignItems: 'center', gap: 1, boxShadow: 'none' }}>
                            <FlightLandIcon />
                            <Typography sx={{ fontWeight: 500 }}>DAC, Hazrat Sha Jalal Intl Airport</Typography>
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
