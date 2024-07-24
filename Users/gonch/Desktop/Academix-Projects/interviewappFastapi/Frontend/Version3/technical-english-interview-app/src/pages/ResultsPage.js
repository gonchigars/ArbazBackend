import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Button, Box } from "@mui/material";
import { Star, StarHalf, StarBorder } from "@mui/icons-material";

const ResultsPage = () => {
  const navigate = useNavigate();

  // Dummy score and star rating
  const dummyScore = 85;
  const dummyStarRating = 4.5;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<Star key={i} color="primary" />);
      } else if (i - 0.5 === rating) {
        stars.push(<StarHalf key={i} color="primary" />);
      } else {
        stars.push(<StarBorder key={i} color="primary" />);
      }
    }
    return stars;
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Interview Results
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Typography variant="h5" sx={{ mr: 2 }}>
          Your Score: {dummyScore.toFixed(2)}%
        </Typography>
        {renderStars(dummyStarRating)}
      </Box>
      <Typography variant="body1" gutterBottom>
        You've completed the interview! Here's a breakdown of your performance:
      </Typography>
      <Typography variant="body2">Question 1: 80.00%</Typography>
      <Typography variant="body2">Question 2: 90.00%</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/dashboard")}
        sx={{ mt: 2 }}
      >
        Back to Dashboard
      </Button>
    </Container>
  );
};

export default ResultsPage;
