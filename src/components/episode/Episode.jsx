import React from "react";
import { Box, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function Episode({ index, title, description, duration, thumbnail, isCurrent }) {
    return (
        <Box
            sx={{
                display: "flex",
                gap: 2,
                px: 2,
                py: 2,
                backgroundColor: isCurrent ? "#2a2a2a" : "transparent",
                borderRadius: 2,
                alignItems: "flex-start",
                mb: 2,
                borderBottom: !isCurrent ? "1px solid #333" : "none", 
            }}
        >
            {/* Episode number */}
            <Box
                sx={{
                    width: "32px",
                    minWidth: "32px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center", 
                    fontSize: "18px",
                    fontFamily: "ABeeZee, sans-serif",
                    color: "#fff",
                }}
            >
                {index + 1}
            </Box>


            {/* Thumbnail with optional play icon */}
            <Box
                sx={{
                    width: 130,
                    height: 75,
                    borderRadius: 1,
                    backgroundImage: `url(${thumbnail})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    flexShrink: 0,
                }}
            >
                {isCurrent && (
                    <PlayArrowIcon
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            color: "#fff !important",
                            fill: "#fff !important", 
                            backgroundColor: "rgba(0,0,0,0.5)",
                            borderRadius: "50%",
                            fontSize: 53,
                            padding: "2px",
                            border: "2px solid white", 
                        }}
                    />
                )}
            </Box>

            {/* Info: title, desc, duration */}
            <Box sx={{ flex: 1 }}>
                {/* Title + Duration in row */}
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <Typography
                        sx={{
                            fontSize: "16px",
                            fontWeight: 500,
                            fontFamily: "ABeeZee, sans-serif",
                            color: "#fff",
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            color: "#bbb",
                            fontFamily: "ABeeZee, sans-serif",
                            minWidth: "40px",
                            textAlign: "right",
                        }}
                    >
                        {duration}
                    </Typography>
                </Box>

                {/* Description below */}
                <Typography
                    sx={{
                        fontSize: "14px",
                        color: "#ccc",
                        mt: 0.5,
                        fontFamily: "Netflix Sans, sans-serif",
                        lineHeight: 1.4,
                    }}
                >
                    {description}
                </Typography>
            </Box>
        </Box>
    );
}
