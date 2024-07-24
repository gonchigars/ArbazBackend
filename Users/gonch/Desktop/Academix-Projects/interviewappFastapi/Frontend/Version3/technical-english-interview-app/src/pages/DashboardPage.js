import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import CategoryCard from "../components/CategoryCard";

const mockCategories = [
  { id: 1, name: "Git/GitHub", score: 75 },
  { id: 2, name: "Java", score: 80 },
  { id: 3, name: "Advanced Java", score: 65 },
  { id: 4, name: "React", score: 70 },
  { id: 5, name: "AWS", score: 60 },
  { id: 6, name: "Docker", score: 55 },
  { id: 7, name: "Spring Boot", score: 85 },
];

const DashboardPage = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {mockCategories.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category.id}>
            <CategoryCard category={category} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DashboardPage;
