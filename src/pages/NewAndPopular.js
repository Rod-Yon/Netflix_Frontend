import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Header from "../components/header/Header";
import Footer from "../components/footer_homepage/Footer_Homepage";

// Simulated backend dataset (for now)
const allPrograms = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  title: `Program ${i + 1}`,
  image: "/assets/images/taylor_placeholder.png",
}));

export default function NewAndPopular() {
  const [items, setItems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [showFooter, setShowFooter] = useState(false);

  // Load visible items when visibleCount changes
  useEffect(() => {
    setItems(allPrograms.slice(0, visibleCount));
  }, [visibleCount]);

  // Handle infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
        visibleCount < allPrograms.length
      ) {
        // If content doesn't fill screen, load more items
        setVisibleCount((prev) => {
          const next = Math.min(prev + 8, allPrograms.length);
          return next === prev ? prev + 1 : next; // force re-render if maxed
        });
      }

      // Footer visibility logic
      const allLoaded = visibleCount >= allPrograms.length;
      const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      const noScrollNeeded = document.body.offsetHeight <= window.innerHeight;

      setShowFooter(allLoaded && (atBottom || noScrollNeeded));
    };

    // Check if initial content doesn't fill the screen - if so, load more
    const checkInitialContent = () => {
      if (
        document.body.offsetHeight <= window.innerHeight &&
        visibleCount < allPrograms.length
      ) {
        // If content doesn't fill screen, load more items
        setVisibleCount((prev) => {
            const next = Math.min(prev + 8, allPrograms.length);
            return next === prev ? prev + 1 : next; // force re-render if maxed
          });     
      }

      // Force show footer if all items are loaded
      if (visibleCount >= allPrograms.length) {
        setShowFooter(true);
      } else {
        // Recheck footer condition
        const allLoaded = visibleCount >= allPrograms.length;
        const noScrollNeeded = document.body.offsetHeight <= window.innerHeight;
        setShowFooter(allLoaded && noScrollNeeded);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Run initial checks
    handleScroll();
    // Use setTimeout to ensure DOM has updated with initial items
    setTimeout(checkInitialContent, 300);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [visibleCount]);

  return (
    <Box sx={{ backgroundColor: "#000", minHeight: "100vh" }}>
      <Header activePage="New & Popular" />

      {/* Page Title */}
      <Box sx={{ px: { xs: 3, sm: 6 }, pt: 12, pb: 4 }}>
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            fontWeight: 750,
            fontSize: { xs: "32px", sm: "48px", md: "64px" },
            mb: 4,
            fontFamily: "Netflix Sans, sans-serif",
          }}
        >
          New & Popular
        </Typography>

        {/* Responsive Grid */}
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(180px, 1fr))"
          gap={2}
        >
          {items.map((program) => (
            <Box
              key={program.id}
              sx={{
                width: "100%",
                aspectRatio: "16 / 9",
                backgroundImage: `url(${program.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 1,
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Show footer when all items are loaded */}
      <Box sx={{ pt: 4 }}>{showFooter && <Footer />}</Box>
    </Box>
  );
}
