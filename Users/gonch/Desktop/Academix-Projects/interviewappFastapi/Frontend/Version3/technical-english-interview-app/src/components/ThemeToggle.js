import React from "react";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ThemeToggle = ({ mode, toggleTheme }) => {
  return (
    <IconButton
      onClick={toggleTheme}
      color="inherit"
      sx={{
        position: "absolute",
        top: 16,
        right: 16,
      }}
    >
      {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ThemeToggle;
