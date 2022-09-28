import * as React from "react";
import { topMoviesInfor } from "../api/getTopMovies";
import { TopMoviesList, TopMoviesReducer } from "../reducers/TopMovieReducer";
import { TopMoviesActionType } from "../reducers/types";

export interface TopMovieContextProviderProps {
  children: React.ReactNode;
}

export interface TopMoviesContext {
  topMovies: TopMoviesList;
  getTopMovies: () => Promise<void>;
  toggleWatched: (imdbID: string) => void;
}
const topMoviesDataDefault: TopMoviesList = [];
const { GET_TOP_MOVIES, TOGGLE_TOP_MOVIE_WATCHED } = TopMoviesActionType;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const TopMoviesContext = React.createContext<TopMoviesContext>({
  topMovies: topMoviesDataDefault,
  getTopMovies: () => Promise.resolve(void 0),
  toggleWatched: () => {},
});
export default function TopMovieContextProvider(
  props: TopMovieContextProviderProps
) {
  const [topMovies, dispath] = React.useReducer(
    TopMoviesReducer,
    topMoviesDataDefault
  );
  //get top mosvies form api
  const getTopMovies = async () => {
    const topMovies = await Promise.all(topMoviesInfor);
    dispath({
      type: GET_TOP_MOVIES,
      payload: topMovies.map((topMovie) => ({
        ...topMovie.data,
        Watched: false,
      })),
    });
  };
  const toggleWatched = (imdbID: string) => {
    dispath({ type: TOGGLE_TOP_MOVIE_WATCHED, payload: imdbID });
  };
  const topMoviesContextData: TopMoviesContext = {
    topMovies,
    getTopMovies,
    toggleWatched,
  };

  const { children } = props;
  return (
    <TopMoviesContext.Provider value={topMoviesContextData}>
      {children}
    </TopMoviesContext.Provider>
  );
}
