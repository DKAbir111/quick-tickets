import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { IoIosAirplane } from "react-icons/io";
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
     
      <Typography variant="CAPTION" component="div" sx={{display:'flex', fontWeight:'bold', justifyContent:'space-between'}}>
 <div style={{display:'flex'}}>
 DAC <ArrowRightAltIcon/> JFK
 </div>
    <IoIosAirplane style={{color:'#e23626', fontSize:'25px'}}/>
      </Typography>
      <Typography sx={{ color: 'text.secondary', my: 1.5 }}>29 Mar 23 & 31 Mar 23</Typography>
      
      <Typography variant='caption' sx={{color:'#e34825'}}>1 ADT, 2 CHD, 1 INF</Typography>
    </CardContent>

  </React.Fragment>
);

export default function RecentSearchCard() {
  return (
    <Box >
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
