import React, { useEffect, useState, useRef } from 'react';
import { Box, Typography, Button } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MoreInfoModal from "../more_info_modal/More_Info_Modal";

const api_url = 'http://localhost:8080/';

export default function Billboard() {
  const [mediaData, setMediaData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const intervalRef = useRef(null);

  // Fetch billboard data from backend
  const getBillboard = async () => {
    try {
      const profile_id = localStorage.getItem('profile_id');
      const response = await fetch(`${api_url}home/${profile_id}/billboard`);
      if (!response.ok) throw new Error('Failed to fetch billboard');
      const data = await response.json();
      setMediaData(Object.values(data)); // Convert object to array
    } catch (error) {
      alert(`Error fetching billboard: ${error}`);
    }
  };

  useEffect(() => {
    getBillboard();
  }, []);

  // Control rotation based on modal state
  useEffect(() => {
    if (mediaData.length === 0 || modalOpen) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mediaData.length);
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [mediaData, modalOpen]);

  const current = mediaData[currentIndex];

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "60vh", sm: "80vh", md: "85vh" },
        backgroundImage: current?.main_info?.poster_path
          ? `url(https://image.tmdb.org/t/p/w500${current.main_info.poster_path})`
          : `url('/assets/images/house_of_ninjas.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        overflow: "hidden",
        pb: { xs: 6, sm: 8 },
      }}
    >
      {/* Content wrapper */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          px: { xs: 2, sm: 4, md: 8 },
          py: { xs: 20, sm: 22 },
          zIndex: 1,
        }}
      >
        {/* Top logo & type */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 1, mt: 10 }}>
          <Box
            sx={{
              width: "30px",
              height: "30px",
              backgroundImage: `url(/assets/images/netflix_N_logo.png)`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              mr: 1,
            }}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#7f8c8d" }}>
            {current?.type?.toUpperCase() || "PROGRAM"}
          </Typography>
        </Box>

        {/* Title & Description */}
        <Box sx={{ maxWidth: "40%" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 750,
              lineHeight: 1,
              mb: 2,
              fontSize: { xs: "32px", sm: "48px", md: "64px" },
              color: "#fff",
            }}
          >
            {current?.main_info?.title || current?.main_info?.original_name || "Loading..."}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, fontSize: "16px", color: "#fff" }}>
            {current?.main_info?.overview || "No description available."}
          </Typography>

          <Button
            onClick={() => {
              clearInterval(intervalRef.current); // pause on open
              setModalOpen(true);
            }}
            startIcon={<InfoOutlinedIcon sx={{ color: "#fff !important", fontSize: "26px !important" }} />}
            sx={{
              color: "#fff !important",
              textTransform: "none",
              fontWeight: "bold",
              px: 2.5,
              py: 0.8,
              fontSize: "14px",
              backgroundColor: "rgba(109,109,110,0.7)",
              "& .MuiSvgIcon-root": {
                color: "#fff",
                fill: "#fff",
              },
              "&:hover": {
                backgroundColor: "rgba(109,109,110,0.7)",
              },
            }}
          >
            More Info
          </Button>
        </Box>

        {/* TV-14 Badge */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 80, sm: 170 },
            right: 0,
            display: "flex",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          <Box
            sx={{
              width: 32,
              height: 32,
              backgroundImage: `url('/assets/images/replay_icon.png')`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              mr: 1,
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgba(68, 68, 68, 0.39)",
              pr: 4,
              pl: 1,
            }}
          >
            <Box
              sx={{
                width: "2px",
                height: "23px",
                backgroundColor: "#fff",
                mr: 1.5,
              }}
            />
            <Typography sx={{ fontSize: "16px", fontWeight: "bold", color: "#fff" }}>
              TV-14
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* More Info Modal */}
      {current && (
        <MoreInfoModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          program={current}
        />
      )}
    </Box>
  );
}