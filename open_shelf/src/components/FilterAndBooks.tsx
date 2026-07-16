"use client";



import { Grid, Card, CardContent, Typography,FormControl,
  Select,
  MenuItem, } from "@mui/material";
import { useState } from "react";

export default function FilterAndBooks() {
    const [filter, setFilter] = useState("");
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
            <Typography>
              Status
            </Typography>
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
      <Grid size={7}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            hhhhh
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
