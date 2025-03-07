import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { Typography, IconButton } from "@mui/material";
import { SwapHoriz, CalendarMonth, Person, ExpandMore, AccessTime, Height } from "@mui/icons-material";
import PlaceIcon from '@mui/icons-material/Place';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AddIcon from '@mui/icons-material/Add';
export default function SearchHeader() {
    return (
        <Box sx={{ bgcolor: "#E34825", py: 2, px: 2, color: "white", width: '100%', display: { md: 'block', xs: 'none' } }}>
            <Box sx={{ maxWidth: '1180px', mx: 'auto' }}>
                {/* Top Section */}
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box sx={{ display: "flex", gap: 14 }}>

                        <Typography variant="body1" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            Round Trip <ExpandMore fontSize="small" />
                        </Typography>

                        <Typography variant="body1" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <Person fontSize="small" /> 01 <ExpandMore fontSize="small" />
                        </Typography>

                        <Typography variant="body1" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            Economy <ExpandMore fontSize="small" />
                        </Typography>
                    </Box>

                    <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <AccessTime fontSize="small" /> Time Remaining 22:50
                    </Typography>
                </Box>

                {/* Search Input Section */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr auto 1fr 1.2fr",
                        gap: 2,
                        alignItems: "center",
                        mt: 2,
                    }}
                >
                    {/* Departure Airport */}
                    <Box sx={inputStyle}><PlaceIcon /> DAC, Dhaka, BD</Box>

                    {/* Swap Button */}
                    <IconButton sx={swapButtonStyle}>
                        <SwapHoriz />
                    </IconButton>

                    {/* Arrival Airport */}
                    <Box sx={inputStyle}><PlaceIcon /> DXB, Dubai, AE</Box>

                    {/* Date Picker */}
                    <Box sx={{ ...inputStyle, justifyContent: 'space-between' }} >
                        <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                            <CalendarMonth fontSize="small" sx={{ mr: 1 }} /> WED, 16 AUG
                        </Box>
                        <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                            <KeyboardArrowLeftIcon />
                            <KeyboardArrowRightIcon />
                        </Box>
                    </Box>
                </Box>

                {/* Filter Button */}
                <Box sx={{ mt: 3, textAlign: "left" }}>
                    <Typography sx={{ mb: 1 }}>Applied Filter</Typography>
                    <Box sx={filterButtonStyle}>Please Add From Filter <AddIcon /></Box>
                </Box>
            </Box>
        </Box>
    );
};

// Styling
const inputStyle = {
    display: "flex",
    alignItems: "center",
    border: "1px solid white",
    borderRadius: "8px",
    px: 3,
    fontSize: "16px",
    color: "white",
    width: "100%",
    gap: '4px',
    height: '57px'
};

const swapButtonStyle = {
    border: "1px solid white",
    borderRadius: "50%",
    padding: "8px",
    color: "white",
};

const filterButtonStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    border: "1px solid white",
    borderRadius: "20px",
    padding: "8px 16px",
    fontSize: "14px",
    cursor: "pointer",
    color: "white",
};
