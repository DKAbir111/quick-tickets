import React from "react";
import { Box, Typography, Button } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import LuggageIcon from "@mui/icons-material/Luggage";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import logo from '../../assets/plane.png'
import line from '../../assets/line.png'
const FlightCard = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(8,1fr)",
        alignItems: "center",
        padding: 2,
        borderRadius: 1,
        backgroundColor: "white",
        boxShadow: "none",
        gap: 2
      }}
    >


      {/* 1st column */}
      <Box sx={{
        gridColumn: 'span 2',
        display: 'flex',
        alignItems: 'center',
        gap: 3
      }}>

        {/* plane */}
        <img src={logo} alt="" style={{ height: '57px', width: '57px', borderRadius: '50%' }} />

        {/* Airline & Flight Details */}
        <Box>
          <Typography fontWeight="500" color="#333333" fontSize={'17px'}>Biman Bangladesh</Typography>
          <Typography color="#E34825" fontSize={13}>
            AS 458
          </Typography>
        </Box>
      </Box>



      {/* Column 2 */}
      <Box sx={{
        display: "flex",
        alignItems: "center",
        gridColumn: "span 3",
        justifyContent: "space-evenly"
      }}>
        <Box>
          <Typography fontWeight="500" color="#333333" fontSize={'25px'}>DAC</Typography>
          <Typography fontSize={13} color="gray" display="flex" gap={'2px'}>
            <Typography fontSize={13} color="#E34825"  >  19:45,</Typography> Dhaka
          </Typography>
        </Box>

        <Box sx={{ textAlign: "center", display: 'flex', flexDirection: 'column' }}>
          <Typography fontSize={12} color="#A3A1A1">
            18h : 35min
          </Typography>

          <img src={line} alt="Line image" width={174} />

          <Typography fontSize={12} color="#A3A1A1">
            1 stop via BOM
          </Typography>
        </Box>

        <Box>
          <Typography fontWeight="500" fontSize={25}>DXB</Typography>
          <Typography fontSize={13} color="gray" display='flex' gap={'2px'}>
            <Typography color="#E34825" fontSize={13}>    19:45,</Typography> Dubai
          </Typography>
        </Box>
      </Box>

      {/* Other Details-Column-3 */}
      <Box sx={{
        gridColumn: 'span 1',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }}>
        <Box display="flex" alignItems="center">
          <ErrorOutlineIcon color="error" fontSize="small" />
          <Typography color="#E34825" fontSize={14} marginLeft={0.5}>
            Non Refundable
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <LuggageIcon fontSize="small" />
          <Typography fontSize={14} marginLeft={0.5}>
            25 KG Details
          </Typography>
        </Box>
      </Box>

      {/* Price & Booking- Column-4 */}
      <Box sx={{
        gridColumn: 'span 1',
        display: 'flex',
        flexDirection: 'column',


      }} >
        <Box display="flex" alignItems="center">
          <InfoIcon fontSize="small" color="#5F6368" />
          <Typography fontSize={14} color="#5F6368" marginLeft={0.5}>
            Gross Cost
          </Typography>
        </Box>
        <Typography fontSize={24} fontWeight="500" color="#E34825">
          ৳ 45,500
        </Typography>
      </Box>

      <Box textAlign="center">
        <Button variant="contained" sx={{ backgroundColor: "#333333", color: "white", borderRadius: '5px' }}>
          BOOK NOW
        </Button>
        <Box display="flex" alignItems="center" justifyContent="center" marginTop={1}>
          <Typography fontSize={14} color="gray">
            Flight Details
          </Typography>
          <ExpandMoreIcon fontSize="small" />
        </Box>
      </Box>
    </Box>
  );
};

export default FlightCard;
