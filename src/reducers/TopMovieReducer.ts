import { TopMoviesActionType } from "./types";

const { GET_TOP_MOVIES, TOGGLE_TOP_MOVIE_WATCHED } = TopMoviesActionType;
export interface TopMovie {
  imdbID: string;
  Title: string;
  Watched: boolean;
}

export type TopMoviesList = TopMovie[];

type TopMovieAction =
  | {
      type: typeof GET_TOP_MOVIES;
      payload: TopMoviesList;
    }
  | {
      type: typeof TOGGLE_TOP_MOVIE_WATCHED;
      payload: string;
    };

export const TopMoviesReducer = (
  state: TopMoviesList,
  action: TopMovieAction
) => {
  switch (action.type) {
    case GET_TOP_MOVIES: {
      return action.payload;
    }
    case TOGGLE_TOP_MOVIE_WATCHED: {
      return state.map((topMovie) =>
        topMovie.imdbID === action.payload
          ? { ...topMovie, Watched: !topMovie.Watched }
          : topMovie
      );
    }
    default:
      return state;
  }
};
