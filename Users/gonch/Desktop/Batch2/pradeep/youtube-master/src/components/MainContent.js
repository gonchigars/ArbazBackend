// components/MainContent.js
import React, { useState } from "react";
import { Button, Stack } from "@mui/material";
import MovieTrailer from "./MovieTrailer";

const MainContent = () => {
  const [showTrailers, setShowTrailers] = useState(false);

  return (
    <div>
      <Stack spacing={2} direction="row" justifyContent="center" mb={2}>
        <Button
          variant="contained"
          href="https://www.programiz.com/java-programming/online-compiler/"
          target="_blank"
        >
          ONLINE COMPILER
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => setShowTrailers(true)}
        >
          YOU TUBE
        </Button>
        <Button
          variant="contained"
          href="https://www.facebook.com/"
          target="_blank"
          color="info"
        >
          FACE BOOK
        </Button>
      </Stack>
      {showTrailers && <MovieTrailer />}
    </div>
  );
};

export default MainContent;
