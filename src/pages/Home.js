// pages/HomePage.jsx
import React from "react";
import Header from "../components/header/Header"
import Billboard from "../components/billboard/Billboard";
import Footer from "../components/footer_homepage/Footer_Homepage"
import { Box } from "@mui/material";

export default function HomePage() {
  

  return (
    <Box sx={{ position: "relative" }}>
      <Header />
      <Billboard />
      <Footer />
    </Box>
  );
}
