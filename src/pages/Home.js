// pages/HomePage.jsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useTheme } from "@mui/material/styles";

export default function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const navItems = ["Home", "TV Shows", "Movies", "New & Popular", "My List", "Browse"];

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        backgroundImage: `url(/path/to/cover.jpg)`, // need to add cover photo from father component
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <AppBar position="absolute" elevation={0} sx={{ background: "black", color: "#fff" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ mr: 4 }}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/netflix-logo.png`}
                alt="Netflix Logo"
                style={{ height: "24px", objectFit: "contain" }}
              />
            </Box>

            {!isMobile ? (
              navItems.map((item) => (
                <Typography key={item} sx={{
                  mr: 2,
                  cursor: "pointer",
                  fontFamily: item === "Browse" ? "Bebas Neue, sans-serif" : "Netflix Sans, sans-serif",
                  fontWeight: item === "Home" ? "bold" : 400,
                  fontSize: item === "Browse" ? "16px" : "14px",
                  color: "#fff",
                }}>
                  {item}
                  {/* need to be chaged to the font of browse */}
                </Typography>
              ))
            ) : (
              <>
                <IconButton color="inherit" onClick={handleMenuOpen}>
                  <MenuIcon />
                </IconButton>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                  {navItems.map((item) => (
                    <MenuItem key={item} onClick={handleMenuClose}>
                      {item}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            )}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" sx={{ mr: 1 }}>
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit" sx={{ mr: 1 }}>
              <NotificationsIcon />
            </IconButton>
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>

      {/* Rest of your homepage content goes here */}
    </div>
  );
}
