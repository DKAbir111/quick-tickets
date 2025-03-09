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
        gridTemplateColumns: { md: "repeat(8,1fr)", xs: "repeat(3,1fr)" },
        alignItems: "center",
        padding: 2,
        borderRadius: 1,
        backgroundColor: "white",
        boxShadow: "none",

        gap: { md: 2, xs: 2 }
      }}
    >


      {/* 1st column */}
      <Box sx={{
        gridColumn: 'span 2',
        display: 'flex',
        alignItems: 'center',
        gap: { md: 3, xs: 1 },
        order: 1,


      }}>

        {/* plane */}
        <Box
          component="img"
          src={logo}
          alt=""
          sx={{
            height: { xs: "32px", md: "57px" },
            width: { xs: "32px", md: "57px" },
            borderRadius: "50%",
          }}
        />


        {/* Airline & Flight Details */}
        <Box>
          <Typography fontWeight="500" color="#333333" sx={{ fontSize: { md: '17px', xs: '12px' } }}>Biman Bangladesh</Typography>
          <Typography color="#E34825" sx={{ fontSize: { sx: '9px', md: '12px' } }} fontSize={13}>
            AS 458
          </Typography>
        </Box>
      </Box>



      {/* Column 2 */}
      <Box sx={{
        display: "flex",
        alignItems: "center",
        gridColumn: "span 3",
        justifyContent: "space-evenly",
        order: { md: 2, xs: 3 },


      }}>
        <Box>
          <Typography fontWeight="500" color="#333333" sx={{ fontSize: { xs: '20px', md: '24px' } }}>DAC</Typography>
          <Typography component="span" sx={{ fontSize: { md: '13px', xs: '10px' } }} color="gray" display="flex" gap={'2px'}>
            <Typography sx={{ fontSize: { md: '13px', xs: '10px' } }} color="#E34825"  >  19:45,</Typography> Dhaka
          </Typography>
        </Box>

        <Box sx={{ textAlign: "center", display: 'flex', flexDirection: 'column' }}>
          <Typography sx={{ fontSize: { md: '13px', xs: '10px' } }} color="#A3A1A1">
            18h : 35min
          </Typography>

          <img src={line} alt="Line image" width={174} />

          <Typography sx={{ fontSize: { md: '13px', xs: '10px' } }} color="#A3A1A1">
            1 stop via BOM
          </Typography>
        </Box>

        <Box>
          <Typography fontWeight="500" sx={{ fontSize: { xs: '20px', md: '24px' } }}>DXB</Typography>
          <Typography component="span" sx={{ fontSize: { md: '13px', xs: '10px' } }} color="gray" display='flex' gap={'2px'}>
            <Typography color="#E34825" sx={{ fontSize: { md: '13px', xs: '10px' } }}>    19:45,</Typography> Dubai
          </Typography>
        </Box>
      </Box>

      {/* Other Details-Column-3 */}
      <Box sx={{
        gridColumn: 'span 1',
        display: 'flex',
        flexDirection: 'column',
        gap: { md: 1, xs: '3px' },
        order: { md: 3, xs: 2 },
        // mb: '6px'
        // py: 1
      }}>
        <Box display="flex" alignItems="center">
          <ErrorOutlineIcon color="error" fontSize="small" />
          <Typography color="#E34825" sx={{ fontSize: { md: '13px', xs: '9px' } }} marginLeft={0.5}>
            Non Refundable
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <LuggageIcon fontSize="small" />
          <Typography sx={{ fontSize: { md: '13px', xs: '9px' } }} marginLeft={0.5}>
            25 KG Details
          </Typography>
        </Box>
      </Box>

      {/* Price & Booking- Column-4 */}
      <Box sx={{
        gridColumn: 'span 1',
        display: { md: 'flex', xs: 'none' },
        flexDirection: 'column',
        order: 4,
        mt: '4px'



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



      {/* Button */}
      <Box textAlign="center" sx={{
        display: { md: 'block', xs: 'none' },
        order: 5
      }}>
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


      {/* Taka for Mobile */}
      <Box sx={{ display: { md: 'none', xs: 'block' }, order: 6, gridColumn: 'span 3', borderTop: '1px dashed #E1E1E1' }}>
        <Typography fontSize={20} fontWeight="500" color="#282E2C" textAlign={'center'} pt={1}>
          ৳ 45,500
        </Typography>
      </Box>
    </Box>
  );
};

export default FlightCard;
