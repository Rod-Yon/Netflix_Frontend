import React from "react";
import { Box } from "@mui/material";
import Header from "../components/header/Header";
import Billboard from "../components/billboard/Billboard";
import Row from "../components/row/Row";
import Footer from "../components/footer_homepage/Footer_Homepage";

export default function TVshows() {
    return (
        <Box sx={{ backgroundColor: "#000", minHeight: "100vh" }}>
            <Header activePage="TV Shows" /> {/* ✅ Highlight in nav */}
            <Billboard type="TV shows" />

            {/* Rows, filtered by movie type */}
            <Row title="Top TVshows Picks For You" filter="TVshow" />
            <Row title="New TVshows On Netflix" filter="TVshow" />
            <Row title="Top 10 TVshows in Israel This Week" filter="TVshow" />
            <Row title="Your Reviews" filter="TVshow" />
            <Row title="Popular Movies" filter="TVshow" />
            <Row title="Animation" />
            <Row title="Sci-Fi" />
            <Row title="Watchlist" />

            <Footer />
        </Box>
    );
}