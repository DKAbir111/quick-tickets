import React from "react";
import Container from "@mui/material/Container";
import Topbar from "../components/Dashboard/Topbar";
import TicketType from "../components/Dashboard/TicketType";
import TripType from "../components/Dashboard/TripType";
import RecentSearch from "../components/Dashboard/RecentSearch";
import discountImage from '../assets/discount.png'
export default function DashBoardPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Topbar />
      <TicketType />
      <TripType />
      <RecentSearch />
      <img src={discountImage} alt="" />
    </Container>
  );
}
