import { Box, Button } from "@mui/material";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import ArticleIcon from '@mui/icons-material/Article';

export default function TicketType() {
  const buttonStyles = {
    height: "44px",
    textTransform: "none",
    backgroundColor: "#e34825",
    gap: 1,
    fontWeight: 500,
    boxShadow: "none",
    "&:hover": { backgroundColor: "#c5371a" },
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 6, flexWrap: 'wrap' }}>
      <Button variant="contained" sx={buttonStyles}>
        <AirplanemodeActiveIcon /> Air Ticket
      </Button>

      <Button variant="contained" sx={buttonStyles}>
        <ApartmentIcon /> Hotel
      </Button>

      <Button variant="contained" sx={buttonStyles}>
        <ContentPasteSearchIcon /> Holidays
      </Button>

      <Button variant="contained" sx={buttonStyles}>
        <ArticleIcon /> PNR Share
      </Button>

      <Button variant="contained" sx={buttonStyles}>
        <ArticleIcon /> Group Fare
      </Button>

      <Button variant="contained" sx={buttonStyles}>
        <ArticleIcon /> Visa
      </Button>
    </Box>
  );
}
