import React from "react";
import Container from "@mui/material/Container";
import Topbar from "../components/Dashboard/Topbar";
import TicketType from "../components/Dashboard/TicketType";
import TripType from "../components/Dashboard/TripType";
import RecentSearch from "../components/Dashboard/RecentSearch";
import Discount from "../components/Dashboard/Discount";
import TopBarMobile from "../components/Dashboard/TopBarMobile";
import { Box } from "@mui/material";
import SearchContextProvider from "../components/context/SearchContextProvider";

export default function DashBoardPage() {
  return (
<SearchContextProvider>
<Container sx={{ py: { md: 3, xs: 0 }, px: 0, backgroundColor: '#ececec' }}>
      <TopBarMobile />
      <Box sx={{ px: 2 }}>

        <Topbar />
        <TicketType />
        <TripType />
        <RecentSearch />
        <Discount />
      </Box>
    </Container>
</SearchContextProvider>
  );
}
