import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Header from "../components/header/Header";
import Billboard from "../components/billboard/Billboard";
import Row from "../components/row/Row";
import Footer from "../components/footer_homepage/Footer_Homepage";
import MoreInfoModal from "../components/more_info_modal/More_Info_Modal";

const api_url = 'http://localhost:8080/';

export default function Movies() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [topMovies, setTopMovies] = useState([]);
    const [animation, setAnimation] = useState([]);
    const [drama, setdrama] = useState([]);

    useEffect(() => {
        const profile_id = localStorage.getItem('profile_id');

        const fetchTopMovies = async () => {
            try {
                const res = await fetch(`${api_url}home/${profile_id}/top/movie`);
                const data = await res.json();
                setTopMovies(data);
            } catch (err) {
                console.error("Error fetching top movies:", err);
            }
        };

        const fetchAnimation = async () => {
            try {
                const res = await fetch(`${api_url}home/${profile_id}/genre/Animation?type=movie`);
                const data = await res.json();
                setAnimation(data);
            } catch (err) {
                console.error("Error fetching animation movies:", err);
            }
        };

        const fetchdrama = async () => {
            try {
                const res = await fetch(`${api_url}home/${profile_id}/genre/drama`);
                const data = await res.json();
                setdrama(data);
            } catch (err) {
                console.error("Error fetching drama movies:", err);
            }
        };

        fetchTopMovies();
        fetchAnimation();
        fetchdrama();
    }, []);

    const handleProgramClick = (program) => {
        setSelectedProgram(program);
        setModalOpen(true);
    };

    return (
        <Box sx={{ backgroundColor: "#000", minHeight: "100vh" }}>
            <Header activePage="Movies" />
            <Billboard type="movie" />

            {/* Filtered rows */}
            <Row title="Top Movies Picks For You" filter="movie" onProgramClick={handleProgramClick} />
            <Row title="New Movies On Netflix" filter="movie" onProgramClick={handleProgramClick} />
            <Row title="Top 10 Movies in Israel This Week" filter="movie" data={topMovies} onProgramClick={handleProgramClick} />
            <Row title="Your Reviews" filter="movie" onProgramClick={handleProgramClick} />
            <Row title="Popular Movies" filter="movie" onProgramClick={handleProgramClick} />
            <Row title="Animation" data={animation} onProgramClick={handleProgramClick} />
            <Row title="drama" data={drama} onProgramClick={handleProgramClick} />
            <Row title="Watchlist" filter="movie" onProgramClick={handleProgramClick} />

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
