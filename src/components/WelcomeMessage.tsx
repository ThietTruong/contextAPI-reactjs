import { Box } from "@material-ui/core";
import * as React from "react";
import { AuthContext } from "../contexts/AuthContext";

export interface WelcomeMessageProps {
  position: string;
  country?: string;
}

export default function WelcomeMessage(props: WelcomeMessageProps) {
  const { position, country = "Viet Nam" } = props;
  const {
    authInfor: { username },
  } = React.useContext(AuthContext);
  return (
    <Box mb={1}>
      Wellcome {username} - {position} from {country}
    </Box>
  );
}
