import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Here you would typically handle the actual login process
    // For now, we'll just navigate to the dashboard
    navigate("/dashboard");
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        mt: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
        Technical English Interview App
      </Typography>
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login with Google
      </Button>
    </Container>
  );
};

export default LoginPage;
