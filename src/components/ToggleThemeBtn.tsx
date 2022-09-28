import { Fab } from "@mui/material";
import { makeStyles, createStyles } from "@material-ui/styles";
import * as React from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export interface ToggleThemeBtnProps {}

const useStyles = makeStyles(() =>
  createStyles({
    floatBtn: {
      position: "fixed",
      right: "3rem",
      bottom: "3rem",
    },
  })
);
export default function ToggleThemeBtn(props: ToggleThemeBtnProps) {
  const classes = useStyles();
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <Fab
      color="primary"
      variant="extended"
      className={classes.floatBtn}
      onClick={toggleTheme.bind(
        this,
        theme === "primary" ? "secondary" : "primary"
      )}
    >
      Toggle
    </Fab>
  );
}
