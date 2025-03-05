import { Box, Typography } from "@mui/material";
import RecentSearchCard from "./RecentSearchCard";

export default function RecentSearch() {
  return (
    <Box>
      <Typography sx={{fontWeight:'bold'}}>Your Recent Search</Typography>
<Box
  sx={{
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: 2,
    py: 5,
  }}
>
<RecentSearchCard/>
<RecentSearchCard/>
<RecentSearchCard/>
<RecentSearchCard/>
<RecentSearchCard/>

</Box>
    </Box>
  )
}
