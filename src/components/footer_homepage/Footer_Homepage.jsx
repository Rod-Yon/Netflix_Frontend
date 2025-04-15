import React from "react";
import {
  Box,
  Typography,
  Link,
  Grid,
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
        backgroundColor: "#141414",
        color: "#757575",
        px: { xs: 4, sm: 6 },
        py: 6,
        mt: 8,
        fontSize: "13px",
      }}
    >
      {/* Social icons */}
      <Box sx={{ mb: 3 }}>
        <IconButton sx={{ color: "#757575" }}>
          <FacebookIcon fontSize="small" />
        </IconButton>
        <IconButton sx={{ color: "#757575" }}>
          <InstagramIcon fontSize="small" />
        </IconButton>
        <IconButton sx={{ color: "#757575" }}>
          <TwitterIcon fontSize="small" />
        </IconButton>
        <IconButton sx={{ color: "#757575" }}>
          <YouTubeIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Grid: 4 columns */}
      <Grid container spacing={1}>
        {links.map((text, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Link
              href="#"
              underline="hover"
              color="inherit"
              sx={{ fontSize: "13px", display: "block", mb: 1 }}
            >
              {text}
            </Link>
          </Grid>
        ))}
      </Grid>

      {/* Service Code button */}
      <Box sx={{ mt: 4 }}>
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
  );
}
