import { Button } from "@material-ui/core";
import { Box, TextField } from "@mui/material";
import Chip, { ChipPropsColorOverrides } from "@mui/material/Chip";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MovieContext } from "../contexts/MovieContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { OverridableStringUnion } from "@mui/types";

export interface MoviesProps {}
const useStyles = makeStyles({
  movieInput: {
    marginRight: "5px",
  },
  movieChip: {
    fontSize: "2rem",
    padding: "1.5rem 1.5rem",
    margin: "5px",
  },
});

export default function Movies() {
  const classes = useStyles();
  const [movie, setMovie] = React.useState("");
  const { movies, addMovie, deleteMovie } = React.useContext(MovieContext);
  const { theme } = React.useContext(ThemeContext);
  const handleOnchangeMovieInput: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setMovie(e.target.value);
  };
  const handleAddMovieButton = (movie: string) => {
    if (movie.trim() !== "") {
      addMovie(movie);
      setMovie("");
    }
  };
  const themeChip = theme as OverridableStringUnion<
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning",
    ChipPropsColorOverrides
  >;
  return (
    <>
      <Box mt={10}>
        <TextField
          label="Your favourite movie...."
          variant="outlined"
          className={classes.movieInput}
          value={movie}
          onChange={handleOnchangeMovieInput}
          size="small"
        />
        <Button
          variant="contained"
          color={theme}
          onClick={() => handleAddMovieButton(movie)}
          size="medium"
        >
          Add
        </Button>
      </Box>
      <Box mt={5}>
        {movies.map((movie) => {
          return (
            <Chip
              className={classes.movieChip}
              key={movie.id}
              label={movie.title}
              clickable
              color={themeChip}
              onDelete={deleteMovie.bind(this, movie.id)}
            />
          );
        })}
      </Box>
    </>
  );
}
