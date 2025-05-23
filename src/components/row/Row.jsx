import React from "react";
import { Box, Typography } from "@mui/material";

export default function Row({ title, filter = "all", disableTopMargin = false, data = [], onProgramClick }) {

    return (
        <Box sx={{
            mt: disableTopMargin ? 0 : 6,
            px: { xs: 2, sm: 4 },
            backgroundColor: "#000",
            position: "relative",
            zIndex: 2, 
        }}>
            {/* Row Title */}
            <Box sx={{ display: "flex", alignItems: "flex-end", height: "20px", mb: 1 }}>
                <Typography
                    variant="h6"
                    sx={{
                        color: "#fff",
                        fontWeight: "bold",
                        lineHeight: 1,
                        fontSize: "20px",
                    }}
                >
                    {title}
                </Typography>
            </Box>


            {/* Row Content: Scrollable horizontal list */}
            <Box sx={{
                display: "flex",
                overflowX: "auto",
                gap: 0.5,
                py: 0.5,
                pb: 0,     
                mb: 0,     
                scrollBehavior: "smooth",
                scrollbarWidth: "none", 
                "&::-webkit-scrollbar": {
                    display: "none", 
                },
            }}>
                {data.map((program, i) => (
                    <Box
                        key={program._id || i}
                        onClick={() => onProgramClick?.(program)} 
                        sx={{
                            flexShrink: 0,
                            minWidth: 218,
                            height: 123,
                            borderRadius: "4px",
                            backgroundImage: `url(https://image.tmdb.org/t/p/w500${program.main_info.poster_path || "/assets/images/taylor_placeholder.png"})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            cursor: "pointer",
                            transition: 'transform 0.3s',
                            '&:hover': {
                                transform: 'scale(1.08)',
                            },
                        }}
                    />
                ))}

            </Box>
        </Box>
    );
}