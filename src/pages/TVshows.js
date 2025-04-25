import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Header from "../components/header/Header";
import Billboard from "../components/billboard/Billboard";
import Row from "../components/row/Row";
import Footer from "../components/footer_homepage/Footer_Homepage";
import MoreInfoModal from "../components/more_info_modal/More_Info_Modal";

const api_url = 'http://localhost:8080/';

export default function TVshows() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [topShows, setTopShows] = useState([]);
    const [animation, setAnimation] = useState([]);
    const [drama, setDrama] = useState([]);

    useEffect(() => {
        const profile_id = localStorage.getItem('profile_id');

        const fetchTopShows = async () => {
            try {
                const res = await fetch(`${api_url}home/${profile_id}/top/show`);
                const data = await res.json();
                console.log("top shows:", data)
                setTopShows(data);
            } catch (err) {
                console.error("Error fetching top TV shows:", err);
            }
        };

        const fetchAnimation = async () => {
            try {
                const res = await fetch(`${api_url}home/${profile_id}/genre/Animation`);
                const data = await res.json();
                console.log("🎨 Animation Shows:", data); 
                setAnimation(data);
            } catch (err) {
                console.error("Error fetching animation TV shows:", err);
            }
        };

        const fetchDrama = async () => {
            try {
                const res = await fetch(`${api_url}home/${profile_id}/genre/Drama`);
                const data = await res.json();
                console.log("🎭 Drama Shows:", data); 
                setDrama(data);
            } catch (err) {
                console.error("Error fetching drama TV shows:", err);
            }
        };

        fetchTopShows();
        fetchAnimation();
        fetchDrama();
    }, []);

    const handleProgramClick = (program) => {
        setSelectedProgram(program);
        setModalOpen(true);
    };

    return (
        <Box sx={{ backgroundColor: "#000", minHeight: "100vh" }}>
            <Header activePage="TV Shows" />
            <Billboard type="show" />

            {/* Filtered rows */}
            <Row title="Top TV Show Picks For You" filter="tv" onProgramClick={handleProgramClick} />
            <Row title="New TV Shows On Netflix" filter="tv" onProgramClick={handleProgramClick} />
            <Row title="Top 10 TV Shows in Israel This Week" filter="tv" data={topShows} onProgramClick={handleProgramClick} />
            <Row title="Your Reviews" filter="tv" onProgramClick={handleProgramClick} />
            <Row title="Popular Shows" filter="tv" onProgramClick={handleProgramClick} />
            <Row title="Animation" data={animation} onProgramClick={handleProgramClick} />
            <Row title="Drama" data={drama} onProgramClick={handleProgramClick} />
            <Row title="Watchlist" filter="tv" onProgramClick={handleProgramClick} />

            <Footer />

            {/* Modal */}
            <MoreInfoModal
                open={modalOpen}
                program={selectedProgram}
                onClose={() => setModalOpen(false)}
            />
        </Box>
    );
}
