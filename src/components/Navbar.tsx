import { Chip } from "@material-ui/core";
import {
  AppBar,
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
import * as React from "react";
import WelcomeMessage from "./WelcomeMessage";
import { ProgressContext } from "../contexts/ProgressContext";
import { ThemeContext } from "../contexts/ThemeContext";
import Login from "./Login";
import { AuthContext } from "../contexts/AuthContext";

export interface NavBarProps {}
// eslint-disable-next-line no-empty-pattern
const useStyles = makeStyles<{}>()((theme, {}) => ({
  possitionSelect: {
    color: "white",
    borderBottom: "1px solid white",
  },
}));

export default function NavBar(props: NavBarProps) {
  const { lastTime, status } = React.useContext(ProgressContext);
  const {
    authInfor: { isAuthenticated },
    toggleAuth,
  } = React.useContext(AuthContext);
  const { theme } = React.useContext(ThemeContext);
  const { classes, cx } = useStyles({});
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [time, setTime] = React.useState<Date>(() => new Date(Date.now()));
  const [position, setPossition] = React.useState<string>(
    "Full-stack developer"
  );
  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date(Date.now())), 1000);
    return () => clearInterval(timer);
  }, []);
  function handleOnchangePosition(event: SelectChangeEvent<string>) {
    setPossition(event.target.value);
  }

  const handleAuthClick = () => {
    if (isAuthenticated) {
      toggleAuth("");
    } else {
      setLoginOpen(true);
    }
  };
  return (
    <AppBar position="static" color={theme}>
      <Toolbar>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            py: "1rem",
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" width={300}>
            My movies
          </Typography>
          <Box textAlign="center">
            <WelcomeMessage position={position} />
            <Chip
              label={`Last time working on this project: ${lastTime} - Status: ${status}`}
            ></Chip>
            <Box mt={1}>
              <FormControl>
                <Select
                  value={position}
                  onChange={handleOnchangePosition}
                  className={cx(classes.possitionSelect)}
                >
                  <MenuItem value="Full-stack developer">
                    Full-stack developer
                  </MenuItem>
                  <MenuItem value="Frontend developer">
                    Frontend developer
                  </MenuItem>
                  <MenuItem value="Backend developer ">
                    Backend developer
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box textAlign="center" width={300}>
            <Typography variant="h5">{time.toString()}</Typography>
            <Box mt={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleAuthClick()}
              >
                {isAuthenticated ? "Logout" : "Login"}
              </Button>
            </Box>
          </Box>
          <Login isOpen={loginOpen} handleClose={setLoginOpen} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
