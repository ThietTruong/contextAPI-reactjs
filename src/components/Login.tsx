import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";
import * as React from "react";
import { AuthContext } from "../contexts/AuthContext";

export interface LoginProps {
  isOpen: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Login(props: LoginProps) {
  const { isOpen, handleClose } = props;
  const { toggleAuth } = React.useContext(AuthContext);
  const [username, setUsername] = React.useState("");
  const handleOnChangUsername: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setUsername(event.target.value);
  };
  const handleLoginSubmit = () => {
    toggleAuth(username);
    setUsername("");
    handleClose(false);
  };
  return (
    <>
      <Dialog open={isOpen} onClose={handleClose.bind(this, false)}>
        <DialogContent>
          <TextField
            label="User name"
            required
            onChange={handleOnChangUsername}
          />
        </DialogContent>

        <DialogActions>
          <Button
            color="primary"
            variant="contained"
            onClick={handleLoginSubmit}
            disabled={username === ""}
          >
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
