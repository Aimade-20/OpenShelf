import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  IconButton,
  Stack,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import type { BookCardProps } from "./types/BookCardProps";
import axios from "axios";

export default function BookCard({
  _id,
  title,
  author,
  category,
  publicationYear,
  available,
}: BookCardProps) {
  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(`/api/books/${_id}`);
      alert(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: "0 8px 25px rgba(0,0,0,.06)",
        transition: ".3s",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 18px 40px rgba(91,75,219,.15)",
        },
      }}
    >
      <CardMedia sx={{ p: 2 }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: 250,
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          <Image
            src="/books/default-book.jpg"
            alt={title}
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
      </CardMedia>

      <CardContent>
        <Typography variant="h6" fontWeight={700} noWrap>
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          {author}
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          <Chip
            label={category}
            size="small"
            sx={{
              bgcolor: "#EEE9FF",
              color: "#5B4BDB",
              fontWeight: 600,
            }}
          />

          <Chip
            size="small"
            label={available ? "Disponible" : "Emprunté"}
            sx={{
              bgcolor: available ? "#E8F8EE" : "#FFF3E6",
              color: available ? "#18864B" : "#E67E22",
              fontWeight: 600,
            }}
          />
        </Stack>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          {publicationYear}
        </Typography>

        <Box
          sx={{
            mt: 3,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link href={`/books/${_id}`}>
            <IconButton
              sx={{
                bgcolor: "#F8F9FD",

                "&:hover": {
                  bgcolor: "#5B4BDB",
                  color: "#fff",
                },
              }}
            >
              <VisibilityOutlinedIcon />
            </IconButton>
          </Link>

          <IconButton
            sx={{
              bgcolor: "#F8F9FD",

              "&:hover": {
                bgcolor: "#F59E0B",
                color: "#fff",
              },
            }}
          >
            <EditOutlinedIcon />
          </IconButton>

          <IconButton
            onClick={handleDelete}
            sx={{
              bgcolor: "#F8F9FD",

              "&:hover": {
                bgcolor: "#EF4444",
                color: "#fff",
              },
            }}
          >
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
