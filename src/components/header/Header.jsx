import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

const api_url = 'http://localhost:8080';

export default function Header({ activePage }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const [profileAnchorEl, setProfileAnchorEl] = React.useState(null);
    const handleProfileClick = (event) => setProfileAnchorEl(event.currentTarget);
    const handleProfileClose = () => setProfileAnchorEl(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    const [profile_picture, Set_New_Profile_Picture] = useState('');
    const [profile_id, Set_New_Profile_id] = useState('');


    let profile;
    let home_path = `/home/${profile_id}`;

    const get_profile = async () => {

        try {

            const profile_id = localStorage.getItem('profile_id');

            const response = await fetch(`${api_url}/profiles/id/${profile_id}`);

            if (!response.ok) throw new Error('Failed to find profile');

            profile = await response.json();

            Set_New_Profile_Picture(profile.avatar);
            Set_New_Profile_id(profile.profile_id);

        } catch (error) {

            alert(`Error fetching profile: ${error}`);
        }

    };

    const navItems = [
        { label: "Home", path: `/home/${profile_id}` },
        { label: "TV Shows", path: "/TVshows" },
        { label: "Movies", path: "/movies" },
        { label: "New & Popular", path: "/newandpopular" },
        { label: "My List", path: "/mylist" },
        { label: "Browse", path: "/browse" },
    ];

    useEffect(() => { get_profile(); }, []);

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
                        <Link to= {home_path} style={{ textDecoration: "none" }}>
                            <Box
                                sx={{
                                    width: 80,
                                    height: 24,
                                    backgroundImage: `url(/assets/images/netfilx_logo.png)`,
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "left",
                                    mr: 4,
                                    cursor: "pointer",
                                }}
                            />
                        </Link>

                        {/* Desktop nav */}
                        {!isMobile ? (
                            navItems.map(({ label, path }) => (
                                <Link to={path} key={label} style={{ textDecoration: 'none' }}>
                                    <Typography
                                        sx={{
                                            mr: 2,
                                            cursor: "pointer",
                                            fontFamily: label === "Browse" ? "ABeeZee, sans-serif" : "Netflix Sans, sans-serif",
                                            fontWeight: label === activePage ? "bold" : 400,
                                            fontSize: label === "Browse" ? "16px" : "14px",
                                            color: "#fff",
                                        }}
                                    >
                                        {label}
                                    </Typography>
                                </Link>
                            ))

                        ) : (
                            <>
                                <IconButton color="inherit" onClick={handleMenuOpen}>
                                    <MenuIcon />
                                </IconButton>
                                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                                    {navItems.map(({ label, path }) => (
                                        <MenuItem key={label} onClick={handleMenuClose} component={Link} to={path}>
                                            {label}
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
                                {profile_picture && (
                                    <Box
                                        component="img"
                                        src={`/assets/avatars/${profile_picture}.png`}
                                        alt="Profile"
                                        sx={{
                                            width: 32,
                                            height: 32,
                                            borderRadius: "4px",
                                            objectFit: "cover",
                                            opacity: 1,
                                            transition: 'opacity 0.5s ease-in-out',
                                        }}
                                    />
                                )}
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
