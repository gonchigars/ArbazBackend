import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Header = ({ mode, toggleTheme }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout logic here
    navigate("/");
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: "1px solid #333" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="/Acad_logo.png"
            alt="Academix Logo"
            style={{ height: "30px", marginRight: "10px" }}
          />
          <Typography variant="h6" component="div">
            Academix
          </Typography>
        </Box>
        <Box>
          <Button
            color="inherit"
            onClick={handleLogout}
            startIcon={<LogoutIcon />}
            sx={{ mr: 2 }}
          >
            Logout
          </Button>
          <IconButton color="inherit" onClick={toggleTheme} sx={{ ml: 1 }}>
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
