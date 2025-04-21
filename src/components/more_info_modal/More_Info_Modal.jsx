import React from "react";
import {
    Dialog,
    DialogContent,
    Box,
    Typography,
    IconButton,
    Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import PlayArrowIcon from "@mui/icons-material/PlayArrow"; // ✅ ADD this import at the top
import Episode from "../episode/Episode";

export default function MoreInfoModal({ open, onClose }) {
    const program = {
        title: "HOUSE OF NINJAS",
        description:
            "Years after retiring from their formidable ninja lives, a dysfunctional family must return to shadowy missions to counteract a string of looming threats.",
        images: [
            "/assets/images/house_of_ninjas.png",
            "/assets/images/house_of_ninjas.png",
            "/assets/images/house_of_ninjas.png",
        ],
        cast: "Joe Shimo, Jane Kuno, Bob Sensei",
        episodes: [
            {
                title: "The Return",
                description: "The family faces a new threat in the shadows.",
                thumbnail: "/assets/images/house_of_ninjas.png",
                isCurrent: true, // ✅ highlighted
            },
            {
                title: "Shadow Moves",
                description: "A mission gets personal for one of the ninjas.",
                thumbnail: "/assets/images/house_of_ninjas.png",
                isCurrent: false,
            },
            {
                title: "Final Blade",
                description: "A final confrontation puts everything at risk.",
                thumbnail: "/assets/images/house_of_ninjas.png",
                isCurrent: false,
            },
        ],
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="md" scroll="body">
            <DialogContent
                sx={{
                    backgroundColor: "#141414",
                    color: "#fff",
                    p: 0,
                    overflowX: "hidden", // ✅ no horizontal scroll
                }}
            >
                {/* Billboard Top Section */}
                <Box
                    sx={{
                        position: "relative",
                        width: "850px",             // ✅ Figma width
                        height: "480px",            // ✅ Figma height
                        maxWidth: "100%",           // ✅ responsive fallback
                        backgroundImage: `url('/assets/images/house_of_ninjas.png')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        px: { xs: 3, sm: 6 },
                        py: { xs: 2, sm: 4 },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        margin: "0 auto",           // ✅ center horizontally
                    }}
                >
                    <IconButton
                        onClick={onClose}
                        sx={{ position: "absolute", top: 10, right: 10, color: "#fff" }}
                    >
                        <CloseIcon />
                    </IconButton>

                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                        <Box
                            sx={{
                                width: "30px",
                                height: "30px",
                                backgroundImage: `url(/assets/images/netflix_N_logo.png)`,
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                mr: 1,
                            }}
                        />
                        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#7f8c8d" }}>
                            SERIES
                        </Typography>
                    </Box>

                    <Typography
                        variant="h2"
                        sx={{
                            color: "white",
                            fontWeight: 750,
                            fontSize: { xs: "32px", sm: "48px", md: "60px" },
                            mb: 3,
                            lineHeight: 1.2,
                        }}
                    >
                        {program.title}
                    </Typography>

                    <Box sx={{ display: "flex", gap: 2 }}>
                        {/* Review Button (with Play icon) */}
                        <Button
                            startIcon={<PlayArrowIcon sx={{ width: "21px", height: "24px", color: "#000 !important" }} />}
                            sx={{
                                backgroundColor: "#fff",
                                color: "#000",
                                fontWeight: "400",
                                fontFamily: "ABeeZee, sans-serif", // ✅ Figma font
                                textTransform: "none",
                                borderRadius: "6px",
                                px: 2.5,
                                py: 0.8,
                                fontSize: "14px",
                                "&:hover": {
                                    backgroundColor: "#e6e6e6",
                                },
                            }}
                        >
                            Review
                        </Button>

                        {/* Add (+) Button with white icon */}
                        <IconButton
                            sx={{
                                width: 40,
                                height: 40,
                                borderRadius: "50%",
                                border: "2px solid #aaa",
                                backgroundColor: "rgba(109,109,110,0.3)",
                                "&:hover": {
                                    backgroundColor: "rgba(109,109,110,0.5)",
                                },
                            }}
                        >
                            <AddIcon sx={{ color: "#fff !important" }} />
                        </IconButton>
                    </Box>

                </Box>

                {/* Content Below */}
                <Box sx={{ px: { xs: 3, sm: 6 }, pt: 4, pb: 2 }}>
                    <Typography sx={{ mb: 3, fontSize: "16px" }}>{program.description}</Typography>

                    {/* Episodes */}
                    <Box sx={{ mb: 4 }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: 2,
                            }}
                        >
                            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                                Episodes
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "ABeeZee, sans-serif",
                                    fontSize: "14px",
                                    color: "#fff",
                                }}
                            >
                                {program.title}
                            </Typography>
                        </Box>

                        {program.episodes.map((ep, i) => (
                            <Episode
                                key={i}
                                index={i}
                                title={ep.title}
                                description={ep.description}
                                duration={ep.duration || "52m"} // optional: if you add durations later
                                thumbnail={ep.thumbnail}
                                isCurrent={ep.isCurrent}
                            />
                        ))}
                    </Box>

                    {/* Preview Images */}
                    <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
                        {program.images.map((url, i) => (
                            <Box
                                key={i}
                                sx={{
                                    width: "32%",
                                    height: 150,
                                    backgroundImage: `url(${url})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    borderRadius: 2,
                                }}
                            />
                        ))}
                    </Box>

                    {/* Cast */}
                    <Typography sx={{ fontSize: "14px", color: "#fff" }}>
                        <Box component="span" sx={{ color: "#888", fontWeight: 400 }}>
                            Cast:
                        </Box>{" "}
                        {program.cast}
                    </Typography>

                </Box>
            </DialogContent>
        </Dialog>
    );
}
