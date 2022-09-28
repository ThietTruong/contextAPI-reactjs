import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import ProgressContextProvider from "./contexts/ProgressContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import ToggleThemeBtn from "./components/ToggleThemeBtn";
import MovieContextProvider from "./contexts/MovieContext";
import Movies from "./components/Movies";
import AuthContextProvider from "./contexts/AuthContext";
import { Grid } from "@material-ui/core";
import TopMovies from "./components/TopMovies";
import TopMovieContextProvider from "./contexts/TopMoviesContext";

function App() {
  return (
    <div className="App">
      <TopMovieContextProvider>
        <AuthContextProvider>
          <MovieContextProvider>
            <ProgressContextProvider>
              <ThemeContextProvider>
                <NavBar />
                <Grid container>
                  <Grid item xs={4}>
                    <TopMovies />
                  </Grid>
                  <Grid xs={4}>
                    <Movies />
                  </Grid>
                </Grid>
                <ToggleThemeBtn />
              </ThemeContextProvider>
            </ProgressContextProvider>
          </MovieContextProvider>
        </AuthContextProvider>
      </TopMovieContextProvider>
    </div>
  );
}

export default App;
