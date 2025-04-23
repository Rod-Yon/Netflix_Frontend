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
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useTheme } from "@mui/material/styles";


export default function Header({ activePage }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const [profileAnchorEl, setProfileAnchorEl] = React.useState(null);
    const handleProfileClick = (event) => setProfileAnchorEl(event.currentTarget);
    const handleProfileClose = () => setProfileAnchorEl(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    const navItems = ["Home", "TV Shows", "Movies", "New & Popular", "My List", "Browse"];

    return (
        <div
            style={{
                position: "relative",
                backgroundImage: `url(/path/to/cover.jpg)`, // will be handled by Billboard anyway
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <AppBar
                position="absolute"
                elevation={0}
                sx={{
                    background: "transparent",
                    color: "#fff",
                    zIndex: 10,
                }}
            >
                <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, sm: 4, md: 8 } }}>
                    {/* Left side: Logo + nav */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        {/* Netflix logo */}
                        <Box
                            sx={{
                                width: 80,
                                height: 24,
                                backgroundImage: `url(/assets/images/netfilx_logo.png)`,
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "left",
                                mr: 4,
                            }}
                        />

                        {/* Desktop nav */}
                        {!isMobile ? (
                            navItems.map((item) => (
                                <Typography
                                    key={item}
                                    sx={{
                                        mr: 2,
                                        cursor: "pointer",
                                        fontFamily:
                                            item === "Browse" ? "ABeeZee, sans-serif" : "Netflix Sans, sans-serif",
                                        fontWeight: item === activePage ? "bold" : 400,
                                        fontSize: item === "Browse" ? "16px" : "14px",
                                        color: "#fff",
                                    }}
                                >
                                    {item}
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

                    {/* Right side: Icons */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton
                            sx={{
                                mr: 1,
                                color: "#fff",
                                "& .MuiSvgIcon-root": { fill: "#fff" },
                            }}
                        >
                            <SearchIcon />
                        </IconButton>
                        <IconButton
                            sx={{
                                mr: 1,
                                color: "#fff",
                                "& .MuiSvgIcon-root": { fill: "#fff" },
                            }}
                        >
                            <NotificationsIcon />
                        </IconButton>
                        <Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                }}
                                onClick={handleProfileClick}
                            >
                                <Box
                                    component="img"
                                    src="/assets/images/profile_pink.png"
                                    alt="Profile"
                                    sx={{
                                        width: 32,
                                        height: 32,
                                        borderRadius: "4px",
                                        objectFit: "cover",
                                    }}
                                />
                                <Box
                                    component="span"
                                    sx={{
                                        ml: 1,
                                        fontSize: "12px",
                                        color: "#fff",
                                    }}
                                >
                                    ▼
                                </Box>
                            </Box>

                            <Menu
                                anchorEl={profileAnchorEl}
                                open={Boolean(profileAnchorEl)}
                                onClose={handleProfileClose}
                                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                                transformOrigin={{ vertical: "top", horizontal: "right" }}
                            >
                                <MenuItem onClick={handleProfileClose}>Profile</MenuItem>
                                <MenuItem onClick={handleProfileClose}>Account</MenuItem>
                                <MenuItem onClick={handleProfileClose}>Help Center</MenuItem>
                                <MenuItem onClick={handleProfileClose}>Sign Out</MenuItem>
                            </Menu>
                        </Box>

                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
}
