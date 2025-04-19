// pages/HomePage.jsx
import React from "react";
import Header from "../components/header/Header"
import Billboard from "../components/billboard/Billboard";
import Footer from "../components/footer_homepage/Footer_Homepage";
import Row from "../components/row/Row";
import { Box } from "@mui/material";

export default function HomePage() {


  return (
    <Box sx={{ position: "relative", backgroundColor: "#000", minHeight: "100vh" }}>
      <Header />
      <Billboard />
      <Row title="Top Picks for You" disableTopMargin/>
      <Row title="New on Netflix" />
      <Row title="Top 10 in Israel this Week" />
      <Row title="Your Reviews" />
      <Row title="Popular Shows" />
      <Row title="Animation" />
      <Row title="Sci-Fi" />
      <Row title="Watchlist" />
      <Footer />
    </Box>
  );
}
