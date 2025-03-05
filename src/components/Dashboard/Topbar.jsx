import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { TbCoinTakaFilled } from "react-icons/tb";
import { BsExclamation } from "react-icons/bs";
import Marquee from "react-fast-marquee";
export default function Topbar() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://flyfar-int-v2-user-panel.de.r.appspot.com/api/v1/admin/airports/search-suggestion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ keyword: 'dxb' }),
    })
      .then((response) => response.json())  
      .then((result) => {
        setData(result);  
        setLoading(false);  
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false); 
      });
  }, []);

  console.log(data)
  return (
    <Box sx={{display:'flex', justifyContent:'space-between',alignItems:'center', gap:1}}>
      <div style={{ backgroundColor: 'white', padding: '9px' }}>
      <SearchIcon fontSize="medium" />
      </div>
      
      <Box sx={{ flexGrow: 1, backgroundColor: 'white', height:'48px', position:'relative', display:'flex', alignItems:'center'}}>
 
       
      <div style={{position:'absolute', zIndex:"10", width:'40px', backgroundColor:'white'}}>
      <div style={{backgroundColor:'#e34825',height:'25px', width:'25px',display:'flex', borderRadius:'50%',color:'white', alignItems:'center', justifyContent:'center', fontSize:'20px', marginLeft:'8px'}}>
      <BsExclamation /> 
      </div>
      </div>

{/* content */}
<Marquee>

  Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore distinctio vitae facere voluptates iure repudiandae est commodi culpa, qui modi!
</Marquee>


      <div style={{ position:'absolute', right:'0px',zIndex:"10",backgroundColor:'white'}}>
       
     <div>
     <Button variant="contained" sx={{backgroundColor:'#e34825', gap:1, borderRadius:'50px',marginRight:'8px'}}> <TbCoinTakaFilled /> Check Balance</Button>
     </div>
     </div>
      </Box>
    </Box>
  )
}
