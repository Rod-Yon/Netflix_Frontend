import React from "react";
import { Box, Typography, Button } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MoreInfoModal from "../more_info_modal/More_Info_Modal";

export default function Billboard() {
    const [modalOpen, setModalOpen] = React.useState(false); // ✅ Modal state
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height: { xs: "60vh", sm: "80vh", md: "85vh" },
                backgroundImage: `url('/assets/images/house_of_ninjas.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "#fff",
                overflow: "hidden", // prevent content from pushing layout
                pb: { xs: 6, sm: 8 }, // ✅ adds padding to make room for the button
            }}
        >
            {/* CONTENT WRAPPER: fills the Billboard space */}
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
                {/* Netflix N logo + SERIES */}
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
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: " #7f8c8d " }}>
                        SERIES
                    </Typography>
                </Box>

                <Box sx={{ maxWidth: "40%" }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: "750",
                            lineHeight: 1,
                            mb: 2,
                            fontSize: { xs: "32px", sm: "48px", md: "64px" },
                            color: "#fff",
                        }}
                    >
                        HOUSE <br /> OF <br /> NINJAS
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, fontSize: "16px", color: "#fff" }}>
                        Years after retiring from their formidable ninja lives, a dysfunctional family must return to shadowy missions to counteract a string of looming threats.
                    </Typography>
                    <Button
                        // variant="outlined"
                        onClick={() => setModalOpen(true)} // ✅ ADD THIS
                        startIcon={<InfoOutlinedIcon sx={{ color: "#fff !important", fontSize: "26px !important" }} />}
                        sx={{
                            color: "#fff !important", // ✅ Force MUI to use white for text and icon
                            // borderColor: "#fff",
                            textTransform: "none",
                            outline: "none",
                            fontWeight: "bold",
                            px: 2.5,
                            py: 0.8,
                            fontSize: "14px",
                            backgroundColor: "rgba(109,109,110,0.7)",
                            "& .MuiSvgIcon-root": {
                                color: "#fff",         // ✅ Directly target the icon class
                                fill: "#fff",          // ✅ Force white fill
                            },
                            "&:hover": {
                                backgroundColor: "rgba(109,109,110,0.7)",
                                //   borderColor: "#fff",
                            },
                        }}

                    >
                        More Info
                    </Button>
                </Box>

                {/* TV-14 Section */}
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
                    {/* Your PNG icon from Figma */}
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

                    {/* Text + divider in background */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: "rgba(68, 68, 68, 0.39)",
                            pr: 4,
                            pl: 1,
                        }}
                    >
                        {/* Divider */}
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
            {/* ✅ The Modal floating on top */}
            <MoreInfoModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </Box>
    );
}
