import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import InterviewPage from "./pages/InterviewPage";
import ResultsPage from "./pages/ResultsPage";
import Header from "./components/Header";

const App = () => {
  const [mode, setMode] = useState("dark");

  const lightTheme = {
    palette: {
      mode: "light",
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#dc004e",
      },
      background: {
        default: "#f5f5f5",
        paper: "#ffffff",
      },
    },
  };

  const darkTheme = {
    palette: {
      mode: "dark",
      primary: {
        main: "#4caf50",
      },
      secondary: {
        main: "#00c853",
      },
      background: {
        default: "#000000",
        paper: "#212121",
      },
    },
  };

  const theme = useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
        >
          <Header mode={mode} toggleTheme={toggleTheme} />
          <Box sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route
                path="/interview/:categoryId"
                element={<InterviewPage />}
              />
              <Route path="/results" element={<ResultsPage />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
