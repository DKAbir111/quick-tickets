import { Box, Button, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { TbCoinTakaFilled } from "react-icons/tb";
import { BsExclamation } from "react-icons/bs";
import Marquee from "react-fast-marquee";
import { useLocation } from 'react-router-dom';

export default function Topbar() {
  const location = useLocation()
  return (
    <Box sx={{ display: 'flex', flexWrap: { xs: 'wrap', md: 'nowrap' }, alignItems: 'center', gap: 1, maxWidth: { xs: '100%', md: '1181px' }, position: 'relative' }}>

      {/* Search Icon Box */}
      <Paper
        sx={{
          p: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: { md: 'center', xs: 'end' },
          boxShadow: 'none',
          height: { xs: '40px', md: '48px' },
          width: { md: '48px', xs: 'auto' },
          flexGrow: { xs: 1, md: 0 },
          my: location.pathname === "/search-result" ? 3 : 0
        }}
      >
        <SearchIcon fontSize="medium" />
      </Paper>


      {/* Marquee Section */}
      <Paper sx={{ height: '48px', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', px: 2, boxShadow: 'none', order: 3, width: { xs: '100%', md: '1131px' } }}>

        {/* Exclamation Icon */}
        <Box sx={{
          position: 'absolute', left: 8, zIndex: 10, display: 'flex', alignItems: 'center',
          justifyContent: 'center', width: 40, height: 40, bgcolor: 'white'
        }}>
          <Box sx={{
            bgcolor: '#e34825', height: 25, width: 25, display: 'flex', borderRadius: '50%',
            color: 'white', alignItems: 'center', justifyContent: 'center', fontSize: 20
          }}>
            <BsExclamation />
          </Box>
        </Box>

        {/* Marquee Content */}
        <Marquee style={{ color: '#333333', fontSize: '14px' }}>
          প্রিয় ট্রেড পার্টনার, আমাদের সাথে হোয়াটসঅ্যাপ এ যোগাযোগ করতে উপরে থাকা হোয়াটসঅ্যাপ বাটনটিতে ক্লিক করুন, অথবা +৮৮০ ১৭৫৫ ৫৭২ ০৯৮ এবং +৮৮০ ১৭৫৫ ৫৭২
        </Marquee>
      </Paper>

      {/* Check Balance Button */}
      <Box sx={{ position: { xs: 'relative', md: 'absolute' }, zIndex: 10, right: 4, order: '2' }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#e34825', gap: 1, borderRadius: '50px', textTransform: 'none', px: 2, boxShadow: 'none' }}
          startIcon={<TbCoinTakaFilled style={{ fontSize: '25px' }} />}
        >
          Check Balance
        </Button>
      </Box>
    </Box>
  );
}
