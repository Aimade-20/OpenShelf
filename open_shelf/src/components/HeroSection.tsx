"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import HeroImage from "../../public/premium_vector-1733925689480-08c807c00848.avif"

export default function HeroSection() {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          background:
            "linear-gradient(90deg,#F6F5FF 0%, #F3F1FF 100%)",
          borderRadius: 5,
          p: {
            xs: 4
          },
          border: "1px solid #ECECEC",
          mt : 2
        }}
      >
        <Grid
          container
          sx={{
            spacing :4,
          alignItems : "center"
          }}
          
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              Bienvenue sur{" "}
              <Box
                component="span"
                sx={{
                  color: "#F97316",
                }}
              >
                OpenShelf
              </Box>
            </Typography>

            <Typography
              sx={{
                color: "#555",
                fontSize: "1.2rem",
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              Gérez votre bibliothèque facilement.
              <br />
              Ajoutez, recherchez, modifiez et
              organisez vos livres dans une seule
              application moderne.
            </Typography>

            <Button
              component={Link}
              href="/books/create"
              variant="contained"
              startIcon={<AddIcon />}
              sx={{
                bgcolor: "#5B4BDB",
                px: 4,
                py: 1.5,
                borderRadius: 3,
                textTransform: "none",
                fontWeight: 600,

                "&:hover": {
                  bgcolor: "#4A39C7",
                },
              }}
            >
              Ajouter un livre
            </Button>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src={HeroImage}
              alt="Library"
              width={320}
              priority
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}