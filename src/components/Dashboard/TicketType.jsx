import { Box, Button } from "@mui/material";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import ArticleIcon from '@mui/icons-material/Article';
export default function TicketType() {
  return (
    <Box sx={{display:'flex', alignItems:'center', gap:1, mt:6}}>

      <Button variant="contained" sx={{height:'44px',textTransform: 'none', backgroundColor:'#e34825',gap:1}}><AirplanemodeActiveIcon />Plane Air Ticket</Button>

      <Button variant="contained" sx={{height:'44px',textTransform: 'none', backgroundColor:'#e34825',gap:1}}><ApartmentIcon />Hotel</Button>

      <Button variant="contained" sx={{height:'44px',textTransform: 'none', backgroundColor:'#e34825',gap:1}}><ContentPasteSearchIcon />Holidays</Button>
      <Button variant="contained" sx={{height:'44px',textTransform: 'none', backgroundColor:'#e34825',gap:1}}><ArticleIcon/>PNR Share</Button>
      <Button variant="contained" sx={{height:'44px',textTransform: 'none', backgroundColor:'#e34825',gap:1}}><ArticleIcon />Group Fare</Button>
      <Button variant="contained" sx={{height:'44px',textTransform: 'none', backgroundColor:'#e34825',gap:1}}><ArticleIcon/>Visa</Button>
    </Box>
  )
}
