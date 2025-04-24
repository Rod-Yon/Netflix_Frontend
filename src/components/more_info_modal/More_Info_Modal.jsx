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
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Episode from "../episode/Episode";
import ReviewModal from "../review_modal/Review_Modal";

export default function MoreInfoModal({ open, onClose, program }) {
    const [reviewOpen, setReviewOpen] = React.useState(false);

    if (!program) return null;

    return (
        <>
            <Dialog open={open} onClose={onClose} fullWidth maxWidth="md" scroll="body">
                <DialogContent
                    sx={{
                        backgroundColor: "#141414",
                        color: "#fff",
                        p: 0,
                        overflowX: "hidden",
                    }}
                >
                    {/* Billboard Top Section */}
                    <Box
                        sx={{
                            position: "relative",
                            width: "850px",
                            height: "480px",
                            maxWidth: "100%",
                            backgroundImage: `url(https://image.tmdb.org/t/p/w500${program.main_info.poster_path})` || "/assets/images/house_of_ninjas.png",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            px: { xs: 3, sm: 6 },
                            py: { xs: 2, sm: 4 },
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            margin: "0 auto",
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
                                {program.type?.toUpperCase() || "PROGRAM"}
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
                            {program.main_info.title || program.main_info.original_name}
                        </Typography>


                        <Box sx={{ display: "flex", gap: 2 }}>
                            <Button
                                startIcon={<PlayArrowIcon sx={{ width: "21px", height: "24px", color: "#000 !important" }} />}
                                sx={{
                                    backgroundColor: "#fff",
                                    color: "#000",
                                    fontWeight: "400",
                                    fontFamily: "ABeeZee, sans-serif",
                                    textTransform: "none",
                                    borderRadius: "6px",
                                    px: 2.5,
                                    py: 0.8,
                                    fontSize: "14px",
                                    "&:hover": {
                                        backgroundColor: "#e6e6e6",
                                    },
                                }}
                                onClick={() => setReviewOpen(true)}
                            >
                                Review
                            </Button>

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
                        <Typography sx={{ mb: 3, fontSize: "16px" }}>{program.main_info.overview}</Typography>
                        
                        {program.episodes.episodes?.length > 0 && (
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
                                        {program.main_info.original_name}
                                    </Typography>
                                </Box>


                                {program.episodes.episodes.map((ep, i) => {
                                    return (
                                        <Episode
                                            key={i}
                                            index={i}
                                            title={ep.name}
                                            description={ep.overview || "No Description"}
                                            duration={ep.runtime || "0m"}
                                            thumbnail={
                                                ep.still_path
                                                    ? `https://image.tmdb.org/t/p/w500${ep.still_path}`
                                                    : `/assets/images/placeholder_episode.png`
                                            }
                                            isCurrent={ep.isCurrent}
                                        />
                                    );
                                })}
                            </Box>
                        )}

                        {program.images?.length > 0 && (
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
                        )}

                        {program.cast && (
                            <Typography sx={{ fontSize: "14px", color: "#fff" }}>
                                <Box component="span" sx={{ color: "#888", fontWeight: 400 }}>
                                    Cast:
                                </Box>{" "}
                                {program.cast}
                            </Typography>
                        )}
                    </Box>
                </DialogContent>
            </Dialog>
            <ReviewModal open={reviewOpen} onClose={() => setReviewOpen(false)} />
        </>
    );
}
