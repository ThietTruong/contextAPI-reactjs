import * as React from "react";
import { v4 as uuidv4 } from "uuid";

export interface Movie {
  id: string;
  title: string;
}

interface MovieContextDefault {
  movies: Movie[];
  addMovie: (title: string) => void;
  deleteMovie: (id: string) => void;
}
export const movieDataDefault: MovieContextDefault = {
  movies: [],
  addMovie: () => {},
  deleteMovie: () => {},
};
export const MovieContext =
  React.createContext<MovieContextDefault>(movieDataDefault);
export interface MovieContextProviderProps {
  children: React.ReactNode;
}

export default function MovieContextProvider(props: MovieContextProviderProps) {
  const { children } = props;
  const [movies, setMovies] = React.useState<Movie[]>(movieDataDefault.movies);
  const addMovie = (title: string) => {
    setMovies([...movies, { id: uuidv4(), title }]);
  };
  const deleteMovie = (id: string) => {
    const newMovie = movies.filter((movie) => movie.id !== id);
    setMovies(newMovie);
  };

  const movieContextData: MovieContextDefault = {
    movies,
    addMovie,
    deleteMovie,
  };
  return (
    <MovieContext.Provider value={movieContextData}>
      {children}
    </MovieContext.Provider>
  );
}
