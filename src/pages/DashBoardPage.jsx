import React from "react";
import Container from "@mui/material/Container";
import Topbar from "../components/Dashboard/Topbar";
import TicketType from "../components/Dashboard/TicketType";
import TripType from "../components/Dashboard/TripType";
import RecentSearch from "../components/Dashboard/RecentSearch";
import Discount from "../components/Dashboard/Discount";

export default function DashBoardPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Topbar />
      <TicketType />
      <TripType />
      <RecentSearch />
      <Discount />
    </Container>
  );
}
