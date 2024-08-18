// components/MovieTrailer.js
import React from "react";
import { Button, Grid, Stack, Box } from "@mui/material";

const MovieTrailer = () => {
  const movies = [
    {
      title: "raviteja's new telugu movie mr. bachhan",
      image: "/mrbachhan.png",
      link: "https://www.youtube.com/watch?v=BZefBM0Bwdc",
    },
    {
      title: "Double ISMART Trailer Ram Pothineni",
      image: "/ismartjpeg.png",
      link: "https://www.youtube.com/watch?v=ym0upoayqJg",
    },
    {
      title: "SARIPODHAA SANIVAARAM Trailer - Nani",
      image: "/nani.png",
      link: "https://www.youtube.com/watch?v=dkx07ZvjKE4",
    },
  ];

  return (
    <Grid container spacing={2}>
      {movies.map((movie, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Stack spacing={1}>
            <Button href={movie.link} target="_blank">
              <img
                src={movie.image}
                alt={movie.title}
                style={{ width: "100%", height: "auto" }}
              />
            </Button>
            <Button
              href={movie.link}
              target="_blank"
              variant="contained"
              color="secondary"
            >
              {movie.title}
            </Button>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieTrailer;
