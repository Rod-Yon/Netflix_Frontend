import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import Header from "../components/header/Header";
import Footer from "../components/footer_homepage/Footer_Homepage";

const dummyData = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  title: `Program ${i + 1}`,
  adult: i % 3 === 0,
  original_language: i % 2 === 0 ? "en" : "es",
  genres: [i % 4 === 0 ? "Comedy" : "Action"],
  poster: "/assets/images/taylor_placeholder.png",
}));

export default function Browse() {
  const [language, setLanguage] = useState("all");
  const [adult, setAdult] = useState("all");
  const [genre, setGenre] = useState("all");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const result = dummyData.filter((program) => {
      return (
        (language === "all" || program.original_language === language) &&
        (adult === "all" || String(program.adult) === adult) &&
        (genre === "all" || program.genres.includes(genre))
      );
    });
    setFiltered(result);
  }, [language, adult, genre]);

  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh", pb: 20 }}>
      <Header activePage="Browse" />

      {/* Top bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 3, sm: 6 },
          pt: 12,
          flexWrap: "wrap",
        }}
      >
        {/* Title */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: 750,
            fontSize: { xs: "32px", sm: "48px", md: "64px" },
            fontFamily: "Netflix Sans, sans-serif",
            color: "#fff",
            mb: { xs: 2, sm: 0 },
          }}
        >
          Browse
        </Typography>

        {/* Filters block */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography
            sx={{ fontSize: "14px", color: "#fff", fontFamily: "Netflix Sans, sans-serif" }}
          >
            Select Your Preferences
          </Typography>

          {/* Language */}
          <FormControl size="small">
            <InputLabel
              sx={{
                color: "#fff",
                "&.Mui-focused": { color: "#fff" },
              }}
            >
              Original Language
            </InputLabel>
            <Select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              label="Original Language"
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                border: "1px solid #fff",
                fontSize: "14px",
                "& .MuiSvgIcon-root": { color: "#fff" },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#fff",
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: "#fff",
                    color: "#000",
                  },
                },
              }}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="es">Spanish</MenuItem>
            </Select>
          </FormControl>

          {/* Adult */}
          <FormControl size="small">
            <InputLabel
              sx={{
                color: "#fff",
                "&.Mui-focused": { color: "#fff" },
              }}
            >
              For adults
            </InputLabel>
            <Select
              value={adult}
              onChange={(e) => setAdult(e.target.value)}
              label="For adults"
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                border: "1px solid #fff",
                fontSize: "14px",
                "& .MuiSvgIcon-root": { color: "#fff" },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#fff",
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: "#fff",
                    color: "#000",
                  },
                },
              }}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="false">Yes</MenuItem>
              <MenuItem value="true">No</MenuItem>
            </Select>
          </FormControl>

          {/* Genre */}
          <FormControl size="small">
            <InputLabel
              sx={{
                color: "#fff",
                "&.Mui-focused": { color: "#fff" },
              }}
            >
              Genre
            </InputLabel>
            <Select
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              label="Genre"
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                border: "1px solid #fff",
                fontSize: "14px",
                "& .MuiSvgIcon-root": { color: "#fff" },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#fff",
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: "#fff",
                    color: "#000",
                  },
                },
              }}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="Comedy">Comedy</MenuItem>
              <MenuItem value="Action">Action</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* Grid display */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(180px, 1fr))"
        gap={2}
        px={{ xs: 3, sm: 6 }}
        pt={4}
      >
        {filtered.map((program) => (
          <Box
            key={program.id}
            sx={{
              width: "100%",
              aspectRatio: "16 / 9",
              backgroundImage: `url(${program.poster})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 1,
            }}
          />
        ))}
      </Box>

      {/* Fixed footer */}
      <Box sx={{ position: "fixed", bottom: 0, width: "100%", zIndex: 10 }}>
        <Footer />
      </Box>
    </Box>
  );
}
