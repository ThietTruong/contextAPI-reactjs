import * as React from "react";
import {
  Box,
  Card,
  CardHeader,
  Checkbox,
  ListItemText,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { TopMoviesContext } from "../contexts/TopMoviesContext";

export interface TopMoviesProps {}

const useStyles = makeStyles({
  topMoviesHeader: {},
  topMoviesList: { marginLeft: "3rem", marginRight: "3rem" },
  topMoviesItem: { paddingTop: "2px", paddingBottom: "2px" },
});
export default function TopMovies(props: TopMoviesProps) {
  const { topMovies, getTopMovies, toggleWatched } =
    React.useContext(TopMoviesContext);
  const classes = useStyles();
  React.useEffect(() => {
    try {
      getTopMovies();
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Card raised>
        <CardHeader
          title="Top 10 movies of all time"
          className={classes.topMoviesHeader}
          titleTypographyProps={{
            variant: "h4",
            align: "center",
            color: "primary",
          }}
        />

        <CardContent className={classes.topMoviesList}>
          <List>
            {topMovies.map((movie) => {
              return (
                <ListItem
                  button
                  className={classes.topMoviesItem}
                  key={movie.imdbID}
                >
                  <ListItemIcon>
                    <Checkbox
                      checked={movie.Watched}
                      onClick={toggleWatched.bind(this, movie.imdbID)}
                    />
                  </ListItemIcon>
                  <ListItemText primary={movie.Title} />
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}
