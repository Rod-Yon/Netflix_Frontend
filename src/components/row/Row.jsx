import React from "react";
import { Box, Typography } from "@mui/material";

export default function Row({ title, filter = "all", disableTopMargin = false }) {
    const dummyItems = Array.from({ length: 10 });

    return (
        <Box sx={{
            mt: disableTopMargin ? 0 : 6,
            px: { xs: 2, sm: 4 },
            backgroundColor: "#000",
            position: "relative",
            zIndex: 2, // make sure it's above the billboard image
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
                pb: 0,     // remove bottom padding
                mb: 0,     // remove bottom margin
                scrollBehavior: "smooth",
                scrollbarWidth: "none", // Firefox
                "&::-webkit-scrollbar": {
                    display: "none", // Chrome, Safari
                },
            }}>
                {dummyItems.map((_, i) => (
                    <Box
                        key={i}
                        sx={{
                            flexShrink: 0,
                            minWidth: 218,
                            height: 123,
                            borderRadius: "4px",
                            backgroundImage: `url('/assets/images/taylor_placeholder.png')`, // ✅ fixed image
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
}