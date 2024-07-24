import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material";

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();

  const handleStartInterview = () => {
    navigate(`/interview/${category.name.toLowerCase().replace(" ", "-")}`);
  };

  return (
    <Card sx={{ backgroundColor: "#212121", color: "white" }}>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {category.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Score: {category.score}%
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#4caf50",
            "&:hover": {
              backgroundColor: "#45a049",
            },
          }}
          onClick={handleStartInterview}
        >
          START INTERVIEW
        </Button>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
