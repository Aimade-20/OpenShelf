"use client";

import Link from "next/link";
import Image from "next/image";

import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSearch } from "@/src/context/SearchContext";

import Logo from "../../public/premium_vector-1733925689480-08c807c00848.avif";
import { usePathname } from "next/navigation";

export default function Header() {
  const { search, setSearch } = useSearch();
  const patName = usePathname()
  return (
    <AppBar
      elevation={0}
      sx={{
        bgcolor: "#F7F6FF",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            height: 90,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Left Side */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            {/* Logo */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Image src={Logo} alt="logo" width={55} height={55} />

              <Typography
                sx={{
                  variant: "h4",
                  fontWeight: 700,
                }}
              >
                Open
                <Box
                  component="span"
                  sx={{
                    color: "#F97316",
                  }}
                >
                  Shelf
                </Box>
              </Typography>
            </Box>

            {/* Navigation */}
            <Box
              sx={{
                display: "flex",
                gap: 4,
              }}
            >
              <Link
              className={`${patName == "/" ? "bottom-hader" : ""}`}
                href="/"
                style={{
                  textDecoration: "none",
                  color: "#111827",
                  fontWeight: 600,
                  paddingBottom: "6px",
                }}
              >
                Catalogue
              </Link>

              <Link
              className={`${patName == "/books/create" ? "bottom-hader" : ""}`}
                href="/books/create"
                style={{
                  textDecoration: "none",
                  color: "#374151",
                  fontWeight: 500,
                }}
              >
                Ajouter un livre
              </Link>
            </Box>
          </Box>

          {/* Right Side */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
            }}
          >
            <TextField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher un livre (titre, auteur...)"
              size="small"
              sx={{
                width: 430,

                "& .MuiOutlinedInput-root": {
                  borderRadius: "16px",
                  bgcolor: "white",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />

            <IconButton
              sx={{
                bgcolor: "#5B4BDB",
                color: "white",
                width: 48,
                height: 48,

                "&:hover": {
                  bgcolor: "#4B3CC5",
                },
              }}
            >
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
