import React, { useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    Typography,
    TextField,
    Button,
    Box,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormLabel,
    Rating
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./Review_Modal.css";


export default function ReviewModal({ open, onClose }) {
    const [visibility, setVisibility] = useState("private");
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState("");

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle
                sx={{
                    backgroundColor: "#141414",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                Write a Review
                <IconButton onClick={onClose} sx={{ color: "#fff" }}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent sx={{ backgroundColor: "#141414", color: "#fff", pt: 2 }}>
                {/* Visibility Selector */}
                <Box sx={{ mb: 3 }}>
                    <FormLabel sx={{ mb: 1, color: "#bbb", fontFamily: "Netflix Sans" }}>
                        Visibility:
                    </FormLabel>
                    <RadioGroup
                        row
                        value={visibility}
                        onChange={(e) => setVisibility(e.target.value)}
                        sx={{ mt: 1 }}
                    >
                        <FormControlLabel
                            value="public"
                            control={<Radio sx={{ color: "#bbb", "&.Mui-checked": { color: "#fff" } }} />}
                            label="Public"
                            sx={{ mr: 4 }}
                        />
                        <FormControlLabel
                            value="private"
                            control={<Radio sx={{ color: "#bbb", "&.Mui-checked": { color: "#fff" } }} />}
                            label="Private"
                        />
                    </RadioGroup>
                </Box>

                {/* Star Rating */}
                <Box sx={{ mb: 3 }}>
                    <Typography sx={{ mb: 1, fontFamily: "Netflix Sans", color: "#bbb" }}>
                        Your Rating:
                    </Typography>
                    <Rating
                        className="review-rating"
                        value={rating}
                        onChange={(e, newValue) => setRating(newValue)}
                        size="large"
                    />
                </Box>

                {/* Textarea */}
                <TextField
                    placeholder="Write your thoughts about the program..."
                    multiline
                    rows={4}
                    fullWidth
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    sx={{
                        backgroundColor: "#e0e0e0",
                        borderRadius: 1,
                        fontFamily: "Netflix Sans",
                        mb: 3,
                    }}
                />

                {/* Action Buttons */}
                <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
                    <Button
                        onClick={onClose}
                        variant="outlined"
                        sx={{
                            color: "#fff",
                            borderColor: "#fff",
                            textTransform: "none",
                            fontFamily: "Netflix Sans",
                            "&:hover": {
                                borderColor: "#fff",
                                backgroundColor: "rgba(255,255,255,0.1)",
                            },
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#1e88e5",
                            textTransform: "none",
                            fontFamily: "Netflix Sans",
                            "&:hover": {
                                backgroundColor: "#1565c0",
                            },
                        }}
                    >
                        Submit Review
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
}
