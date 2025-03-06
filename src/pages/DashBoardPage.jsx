import React from "react";
import Container from "@mui/material/Container";
import Topbar from "../components/Dashboard/Topbar";
import TicketType from "../components/Dashboard/TicketType";
import TripType from "../components/Dashboard/TripType";
import RecentSearch from "../components/Dashboard/RecentSearch";
import Discount from "../components/Dashboard/Discount";
import TopBarMobile from "../components/Dashboard/TopBarMobile";

export default function DashBoardPage() {
  return (
    <Container sx={{ py: { md: 3, xs: 0 }, backgroundColor: '#ececec' }}>
      <TopBarMobile />
      <Topbar />
      <TicketType />
      <TripType />
      <RecentSearch />
      <Discount />
    </Container>
  );
}
