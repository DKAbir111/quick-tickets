import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { IoIosAirplane } from "react-icons/io";

const card = (
  <>
    <Box sx={{padding:'10px'}}>

      <Typography variant="CAPTION" component="div" sx={{ display: 'flex', fontWeight: 'bold', justifyContent: 'space-between',fontSize:'13px' }}>
        <div style={{ display: 'flex' }}>
          DAC <ArrowRightAltIcon /> JFK
        </div>
        <IoIosAirplane style={{ color: '#E34825', fontSize: '25px' }} />
      </Typography>
      <Typography sx={{ color: 'text.secondary',fontSize:'13px' }}>29 Mar 23 & 31 Mar 23</Typography>

      <Typography variant='caption' sx={{ color: '#e34825',fontSize:'11px' }}>1 ADT, 2 CHD, 1 INF</Typography>
    </Box>

  </>
);

export default function RecentSearchCard() {
  return (
    <Box >
      <Card variant="outlined" sx={{ boxShadow: 'none', borderRadius: '7px', width:'185px',height:'80px' }}>{card}</Card>
    </Box>
  );
}
