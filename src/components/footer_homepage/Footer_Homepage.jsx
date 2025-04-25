import React from "react";
import {
  Box,
  Typography,
  Link,
  IconButton,
  Button,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  const links = [
    "Audio Description",
    "Help Center",
    "Gift Cards",
    "Media Center",
    "Investor Relations",
    "Jobs",
    "Netflix Shop",
    "Terms of Use",
    "Privacy",
    "Legal Notices",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
    "Do Not Sell or Share My Personal Information",
    "Ad Choices",
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000",
        color: "#757575",
        py: 6,
        mt: 8,
        fontSize: "13px",
      }}
    >
      {/* Inner container for proper spacing */}
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 3, sm: 6 },
        }}
      >
        {/* Social icons */}
        <Box sx={{ mb: 3 }}>
          <IconButton sx={{ color: "#757575", mr: 1 }}>
            <FacebookIcon sx={{ width: 36, height: 30 }} />
          </IconButton>
          <IconButton sx={{ color: "#757575", mr: 1 }}>
            <InstagramIcon sx={{ width: 36, height: 30 }} />
          </IconButton>
          <IconButton sx={{ color: "#757575", mr: 1 }}>
            <TwitterIcon sx={{ width: 36, height: 30 }} />
          </IconButton>
          <IconButton sx={{ color: "#757575" }}>
            <YouTubeIcon sx={{ width: 36, height: 30 }} />
          </IconButton>
        </Box>

        {/* 4-column layout using CSS grid (MUI v6-compatible) */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",   
              sm: "repeat(4, 1fr)",   
            },
            gap: 1,
            mb: 3,
          }}
        >
          {links.map((text, index) => (
            <Link
              key={index}
              href="#"
              underline="hover"
              color="inherit"
              sx={{
                fontSize: "13px",
                display: "block",
              }}
            >
              {text}
            </Link>
          ))}
        </Box>

        {/* Service Code button */}
        <Box sx={{ mt: 2 }}>
          <Button
            variant="outlined"
            sx={{
              color: "#757575",
              borderColor: "#757575",
              fontSize: "12px",
              textTransform: "none",
              px: 2,
              py: 0.5,
            }}
          >
            Service Code
          </Button>
        </Box>

        {/* Copyright */}
        <Typography sx={{ mt: 2, fontSize: "12px" }}>
          © 1997-2024 Netflix, Inc.
        </Typography>
      </Box>
    </Box>
  );
}
