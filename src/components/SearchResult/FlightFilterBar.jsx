import React from "react";
import { Box, Typography, Chip, IconButton, Paper } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const FlightFilterBar = () => {
    const filters = ["Refundable", "Non Stop", "45 KG"];

    return (
        <Paper
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 2,
                borderRadius: "5px",
                boxShadow: "none",
                width: '100%',
                height: '37px',
                mt: 2
            }}
        >
            {/* Left Section: Flights Found + Filters */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography sx={{ fontWeight: '500', fontSize: "14px" }}>
                    320 Flights Found
                </Typography>
                {filters.map((filter, index) => (
                    <Chip
                        key={index}
                        label={filter}
                        onDelete={() => console.log(`${filter} removed`)}
                        sx={{
                            backgroundColor: "#E348251A",
                            color: "#F1592A",
                            fontWeight: 500,
                            height: '24px',
                            fontSize: '11px',
                            display: { md: 'flex', xs: 'none' },
                            "& .MuiChip-deleteIcon": {
                                color: '#F1592A'
                            }
                        }}
                    />
                ))}
            </Box>

            {/* Right Section: Filter Button */}
            <IconButton>
                <FilterAltIcon sx={{ color: "#E34825" }} />
                <Typography sx={{ fontSize: "14px", fontWeight: 500, ml: 0.5 }}>
                    Filters
                </Typography>
            </IconButton>
        </Paper>
    );
};

export default FlightFilterBar;
