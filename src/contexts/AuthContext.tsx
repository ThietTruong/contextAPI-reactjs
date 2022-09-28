import * as React from "react";
import { AuthReducer, authReducer } from "../reducers/AuthReducer";
import { AuthActionType } from "../reducers/types";
const { TOGGLE_AUTH } = AuthActionType;
export interface AuthContextProviderProps {
  children: React.ReactNode;
}

interface AuthContextDefault {
  authInfor: AuthReducer;
  toggleAuth: (username: string) => void;
}
const authDefault = {
  isAuthenticated: false,
  username: "",
};

export const AuthContext = React.createContext<AuthContextDefault>({
  authInfor: authDefault,
  toggleAuth: () => {},
});
export default function AuthContextProvider(props: AuthContextProviderProps) {
  const { children } = props;
  const [authInfor, dispath] = React.useReducer(authReducer, authDefault);
  const toggleAuth = (username: string) =>
    dispath({ type: TOGGLE_AUTH, payload: username });
  const authContextData: AuthContextDefault = {
    authInfor,
    toggleAuth,
  };
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
}
