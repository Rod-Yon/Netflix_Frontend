import React, { useEffect, useState } from 'react';
import Header from "../components/header/Header";
import Billboard from "../components/billboard/Billboard";
import Footer from "../components/footer_homepage/Footer_Homepage";
import Row from "../components/row/Row";
import MoreInfoModal from "../components/more_info_modal/More_Info_Modal";
import { Box } from "@mui/material";
const api_url = 'http://localhost:8080/';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);       
  const [selectedProgram, setSelectedProgram] = useState(null); 
  const [media_data, Set_Media_Data] = React.useState([]);
  const [animation, Set_Animation] = React.useState([]);
  const [drama, Set_Drama] = React.useState([]);

  const get_animation = async () => {

    try {

      const profile_id = localStorage.getItem('profile_id');

      const response = await fetch(`${api_url}home/${profile_id}/genre/Animation`);

      if (!response.ok) throw new Error('Failed to fetch animation');

      const data = await response.json();

      Set_Animation(data);

    } catch (error) {

      alert(`Error fetching animation: ${error}`);
    }

  };

  const get_drama = async () => {

    try {

      const profile_id = localStorage.getItem('profile_id');

      const response = await fetch(`${api_url}home/${profile_id}/genre/drama`);

      if (!response.ok) throw new Error('Failed to fetch drama');

      const data = await response.json();

      Set_Drama(data);

    } catch (error) {

      alert(`Error fetching drama: ${error}`);
    }

  };

  const get_most_popular = async () => {

    try {

      const profile_id = localStorage.getItem('profile_id');

      const response = await fetch(`${api_url}home/${profile_id}/top/other`);

      if (!response.ok) throw new Error('Failed to fetch most popular');

      const data = await response.json();

      Set_Media_Data(data);

    } catch (error) {

      alert(`Error fetching most popular: ${error}`);
    }
  };

  // Function to be passed to Row to handle thumbnail clicks
  const handleProgramClick = (program) => {
    setSelectedProgram(program);
    setModalOpen(true);
  };
  useEffect(() => {
    get_most_popular();
    get_animation();
    get_drama();
  }, []);

  return (
    <Box sx={{ position: "relative", backgroundColor: "#000", minHeight: "100vh" }}>
      <Header activePage="Home" />
      <Billboard />

      {/* Pass onProgramClick to each row */}
      <Row title="Top Picks for You" disableTopMargin onProgramClick={handleProgramClick} />
      <Row title="New on Netflix" onProgramClick={handleProgramClick} />
      <Row title="Top 10 in Israel this Week" onProgramClick={handleProgramClick} data={media_data} />
      <Row title="Your Reviews" onProgramClick={handleProgramClick} />
      <Row title="Popular Shows" onProgramClick={handleProgramClick} />
      <Row title="Animation" onProgramClick={handleProgramClick} data={animation} />
      <Row title="Drama" onProgramClick={handleProgramClick} data={drama} />
      <Row title="Watchlist" onProgramClick={handleProgramClick} />

      <Footer />

      {/* Global Modal */}
      <MoreInfoModal
        open={modalOpen}
        program={selectedProgram}
        onClose={() => setModalOpen(false)}
      />
    </Box>
  );
}
