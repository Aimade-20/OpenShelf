"use client";

import Link from "next/link";
import Image from "next/image";

import { Box, Container, Typography } from "@mui/material";

import Logo from "../../public/premium_vector-1733925689480-08c807c00848.avif"

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#F7F6FF",
        borderTop: "1px solid #E5E7EB",
        py: 3,
        mt: 8,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {/* Left */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <Image
              src={Logo}
              alt="Logo"
              width={40}
              height={40}
            />

            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()}{" "}
              <Box
                component="span"
                sx={{
                  color: "#F97316",
                  fontWeight: 700,
                }}
              >
                OpenShelf
              </Box>{" "}
              · Tous droits réservés.
            </Typography>
          </Box>

          {/* Right */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/privacy"
              style={{
                textDecoration: "none",
                color: "#4B5563",
                fontSize: "14px",
              }}
            >
              Politique de confidentialité
            </Link>

            <Link
              href="/terms"
              style={{
                textDecoration: "none",
                color: "#4B5563",
                fontSize: "14px",
              }}
            >
              Conditions d utilisation
            </Link>

            <Link
              href="/contact"
              style={{
                textDecoration: "none",
                color: "#4B5563",
                fontSize: "14px",
              }}
            >
              Contact
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}