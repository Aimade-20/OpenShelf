"use client";

import {
  CircularProgress,
  Card,
  CardContent,
  Grid,
  Typography,
  Chip,
  Button,
  Box,
} from "@mui/material";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import type { bookDetail } from "../../../src/components/types/BookDetail";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default function BookDetails({ params }: Props) {
  const [book, setBook] = useState<bookDetail | null>(null);
  useEffect(() => {
    async function getBookDetails() {
      const { id } = await params;
      const { data } = await axios(`http://localhost:3000/api/books/${id}`);
      setBook(data.book);
    }
    getBookDetails();
  }, [params]);
  console.log("book", book);
const handleDelete = async () => {
    try {
        const {id} = await params
        const {data} = await axios.delete(`/api/books/${id}`)
        alert(data.message)
    } catch (error) {
        console.log(error);
        
    }
}
  if (!book) return <CircularProgress aria-label="Loading…" />;
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid size={4} sx={{ bgcolor: "#f7f6ff" }}>
            <Image
            src="/books/default-book.jpg"
            alt={book.title}
            fill
            style={{ objectFit: "cover" }}
          />
          </Grid>
          <Grid size={8}>
            <Typography variant="h3" gutterBottom>
              {book.title}
            </Typography>
            <Typography variant="h6" gutterBottom>
              {book.author}
            </Typography>
            <Typography gutterBottom>
              Categorie : {book.category}{" "}
              <Chip
                size="small"
                label={book.available ? "Disponible" : "Emprunté"}
                sx={{
                  bgcolor: book.available ? "#E8F8EE" : "#FFF3E6",
                  color: book.available ? "#18864B" : "#E67E22",
                  fontWeight: 600,
                }}
              />
            </Typography>
            <Typography gutterBottom>
              Année de publication : {book.publicationYear}
            </Typography>
            <Typography gutterBottom>{book.description}</Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
              }}
            >
              <Button variant="contained" sx={{bgcolor :"#F59E0B" }}>Modifier</Button>
              <Button variant="outlined" sx={{bgcolor :"#EF4444" ,color : "white"}} onClick={handleDelete}>Supprimer</Button>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
