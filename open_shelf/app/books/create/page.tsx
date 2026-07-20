"use client";

import { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";

export default function AddBookPage() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    isbn: "",
    category: "",
    publicationYear:0,
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  const handleSubmit = async () => {
    try {
      const { data } = await axios.post("/api/books", formData);

      alert(data.message);

      setFormData({
        title: "",
        author: "",
        isbn: "",
        category: "",
        publicationYear: 0,
        description: "",
      });
    } catch (error) {
      console.log(error);
      alert("Erreur lors de l'ajout du livre");
    }
  };

  return (
    <Box sx={{ p: 4, bgcolor: "#f8f9fc", minHeight: "100vh" }}>
      <Typography variant="h3" fontWeight={700} mb={4}>
        Ajouter un livre
      </Typography>

      <Paper
        elevation={0}
        sx={{
          p: 4,
          borderRadius: 4,
          border: "1px solid #ececec",
        }}
      >
        <Grid container spacing={4}>
          {/* LEFT */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography color="primary" fontWeight={700} fontSize={28} mb={1}>
              Informations du livre
            </Typography>

            <Typography color="text.secondary" mb={4}>
              Remplissez les informations ci-dessous pour ajouter un nouveau
              livre.
            </Typography>

            <TextField
              fullWidth
              name="title"
              label="Titre"
              value={formData.title}
              onChange={handleChange}
              sx={{ mb: 3 }}
            />

            <TextField
              fullWidth
              name="author"
              label="Auteur"
              value={formData.author}
              onChange={handleChange}
              sx={{ mb: 3 }}
            />

            <TextField
              fullWidth
              name="isbn"
              label="ISBN"
              value={formData.isbn}
              onChange={handleChange}
              sx={{ mb: 3 }}
            />

            <Grid container spacing={2} mb={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  select
                  fullWidth
                  name="category"
                  label="Catégorie"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <MenuItem value="">Sélectionnez une catégorie</MenuItem>
                  <MenuItem value="Roman">Roman</MenuItem>
                  <MenuItem value="Science">Science</MenuItem>
                  <MenuItem value="Informatique">Informatique</MenuItem>
                  <MenuItem value="Histoire">Histoire</MenuItem>
                  <MenuItem value="Histoire">Développement Personnel</MenuItem>
                </TextField>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                type="number"
                  fullWidth
                  name="publicationYear"
                  label="Année de publication"
                  value={formData.publicationYear}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            <TextField
              fullWidth
              multiline
              rows={6}
              name="description"
              label="Description"
              value={formData.description}
              onChange={handleChange}
            />
          </Grid>

          {/* RIGHT */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              color="primary"
              fontWeight={700}
              fontSize={24}
              mb={2}
            >
              Image du livre
            </Typography>

            <Card
              variant="outlined"
              sx={{
                borderStyle: "dashed",
                borderColor: "#ddd",
                height: 260,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                borderRadius: 3,
              }}
            >
              <CloudUploadOutlinedIcon
                sx={{
                  fontSize: 60,
                  color: "#6C4CF1",
                }}
              />

              <Typography>Glissez-déposez une image ici</Typography>

              <Button variant="contained">
                Choisir une image
              </Button>
            </Card>

            <Typography mt={4} mb={2}>
              Aperçu
            </Typography>

            <Card
              variant="outlined"
              sx={{
                height: 250,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <MenuBookOutlinedIcon
                sx={{
                  fontSize: 90,
                  color: "#d1d1d1",
                }}
              />

              <Typography>Aucune image sélectionnée</Typography>
            </Card>
          </Grid>
        </Grid>

        <Box
          mt={5}
          display="flex"
          justifyContent="flex-end"
          gap={2}
        >
          <Button variant="outlined">
            Annuler
          </Button>

          <Button
            variant="contained"
            onClick={handleSubmit}
          >
            Ajouter le livre
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}