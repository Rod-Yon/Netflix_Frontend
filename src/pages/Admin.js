import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Select,
  MenuItem,
  Snackbar,
  Grid,
  Paper,
} from "@mui/material";

export default function AdminPage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    ageRating: "",
    type: "movie",
    thumbnail: "",
    billboardImages: ["", "", "", ""],
    previewImages: ["", "", ""],
    isSeries: false,
    crew: "",
    addedAt: new Date().toISOString(),
  });

  const [snackbar, setSnackbar] = useState({ open: false, message: "", error: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (index, key, value) => {
    const updated = [...form[key]];
    updated[index] = value;
    setForm((prev) => ({ ...prev, [key]: updated }));
  };

  const handleSubmit = () => {
    console.log("Form data to send:", form);
    setSnackbar({ open: true, message: "Form submitted (mock)", error: false });
  };

  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", p: 4, minHeight: "100vh" }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Admin Panel
      </Typography>

      {/* Add New Program Form */}
      <Paper elevation={3} sx={{ p: 3, mb: 6, backgroundColor: "#121212" }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Add New Program
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Title"
              name="title"
              value={form.title}
              onChange={handleChange}
              fullWidth
              sx={{ backgroundColor: "#fff" }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Age Rating"
              name="ageRating"
              value={form.ageRating}
              onChange={handleChange}
              fullWidth
              sx={{ backgroundColor: "#fff" }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Thumbnail URL"
              name="thumbnail"
              value={form.thumbnail}
              onChange={handleChange}
              fullWidth
              sx={{ backgroundColor: "#fff" }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Select
              name="type"
              value={form.type}
              onChange={handleChange}
              fullWidth
              sx={{ backgroundColor: "#fff" }}
            >
              <MenuItem value="movie">Movie</MenuItem>
              <MenuItem value="series">Series</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Description"
              name="description"
              value={form.description}
              onChange={handleChange}
              multiline
              rows={3}
              fullWidth
              sx={{ backgroundColor: "#fff" }}
            />
          </Grid>

          {form.billboardImages.map((img, i) => (
            <Grid item xs={12} sm={6} key={`billboard-${i}`}>
              <TextField
                label={`Billboard Image ${i + 1}`}
                value={img}
                onChange={(e) => handleArrayChange(i, "billboardImages", e.target.value)}
                fullWidth
                sx={{ backgroundColor: "#fff" }}
              />
            </Grid>
          ))}

          {form.previewImages.map((img, i) => (
            <Grid item xs={12} sm={4} key={`preview-${i}`}>
              <TextField
                label={`Preview Image ${i + 1}`}
                value={img}
                onChange={(e) => handleArrayChange(i, "previewImages", e.target.value)}
                fullWidth
                sx={{ backgroundColor: "#fff" }}
              />
            </Grid>
          ))}

          <Grid item xs={12}>
            <TextField
              label="Crew Info"
              name="crew"
              value={form.crew}
              onChange={handleChange}
              multiline
              rows={2}
              fullWidth
              sx={{ backgroundColor: "#fff" }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Upload Date"
              value={new Date(form.addedAt).toLocaleString()}
              disabled
              fullWidth
              sx={{ backgroundColor: "#fff" }}
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Future logs section */}
      <Paper elevation={3} sx={{ p: 3, backgroundColor: "#121212" }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          System Logs (Coming Soon)
        </Typography>
        <Typography variant="body2" sx={{ color: "#aaa" }}>
          This section will show system logs sorted from newest to oldest.
        </Typography>
      </Paper>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        message={snackbar.message}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        slotProps={{
          content: { sx: { backgroundColor: snackbar.error ? "red" : "green" } },
        }}
      />
    </Box>
  );
}
