"use client";

import {
  Grid,
  Card,
  CardContent,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import type { BookCardProps } from "./types/BookCardProps";
import BookCard from "../components/BookCard";
import { useSearch } from "@/src/context/SearchContext";

export default function FilterAndBooks() {
  const { search, filter, setFilter } = useSearch();
  const [books, setBooks] = useState<BookCardProps[]>([]);
  async function getBooks() {
    const { data } = await axios.get("/api/books");
    setBooks(data.books);
  }
  useEffect(() => {
    getBooks();
  }, []);
  console.log("data", books);
const filteredBooks = books.filter((book) => {
  const matchSearch =
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase());

  const matchFilter =
    filter === "all" ||
    (filter === "available" && book.available) ||
    (filter === "borrowed" && !book.available);

  return matchSearch && matchFilter;
});
  return (
    <Grid
      container
      sx={{
        spacing: 2,
        marginTop: 3,
        marginLeft: 3,
      }}
      spacing={2}
      >


      <Grid size={3}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Filters
            </Typography>
            <Typography>Status</Typography>
            <FormControl sx={{ minWidth: 220 }}>
              <Select
                value={filter}
                displayEmpty
                onChange={(e) => setFilter(e.target.value)}
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <span style={{ color: "#9CA3AF" }}>
                        Filtrer par statut
                      </span>
                    );
                  }
                  
                  switch (selected) {
                    case "all":
                      return "Tous";
                    case "available":
                      return "Disponible";
                      case "borrowed":
                      return "Emprunté";
                    default:
                      return selected;
                  }
                }}
              >
                <MenuItem value="all">Tous</MenuItem>
                <MenuItem value="available">Disponible</MenuItem>
                <MenuItem value="borrowed">Emprunté</MenuItem>
              </Select>
            </FormControl>
          </CardContent>
        </Card>
      </Grid>

      
      <Grid size={8.8}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Catalogue des livres
            </Typography>
            <Grid container spacing={3}>
              {filteredBooks.map((book) => (
                <Grid key={book._id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                  <BookCard
                    _id={book._id}
                    title={book.title}
                    author={book.author}
                    category={book.category}
                    publicationYear={book.publicationYear}
                    available={book.available}
                  />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
