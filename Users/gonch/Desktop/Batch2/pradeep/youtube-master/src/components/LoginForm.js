// components/LoginForm.js
import React, { useState } from "react";
import { TextField, Button, Stack, Typography } from "@mui/material";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} alignItems="center">
        <Typography variant="h4">Login</Typography>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
        <Typography variant="caption">
          Use username: user123 and password: pass123
        </Typography>
      </Stack>
    </form>
  );
};

export default LoginForm;
