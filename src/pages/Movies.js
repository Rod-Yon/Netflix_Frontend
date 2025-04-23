import React from "react";
import { Box } from "@mui/material";
import Header from "../components/header/Header";
import Billboard from "../components/billboard/Billboard";
import Row from "../components/row/Row";
import Footer from "../components/footer_homepage/Footer_Homepage";

export default function Movies() {
    return (
        <Box sx={{ backgroundColor: "#000", minHeight: "100vh" }}>
            <Header activePage="Movies" /> {/* ✅ Highlight in nav */}
            <Billboard type="movie" />

            {/* Rows, filtered by movie type */}
            <Row title="Top Movies Picks For You" filter="movie" />
            <Row title="New Movies On Netflix" filter="movie" />
            <Row title="Top 10 Movies in Israel This Week" filter="movie" />
            <Row title="Your Reviews" filter="movie" />
            <Row title="Popular Movies" filter="movie" />
            <Row title="Animation" />
            <Row title="Sci-Fi" />
            <Row title="Watchlist" />

            <Footer />
        </Box>
    );
}