import { AuthActionType } from "./types";

const { TOGGLE_AUTH } = AuthActionType;
export interface AuthReducer {
  isAuthenticated: boolean;
  username: string;
}
interface AuthAction {
  type: AuthActionType;
  payload: string;
}
export const authReducer = (state: AuthReducer, action: AuthAction) => {
  switch (action.type) {
    case TOGGLE_AUTH: {
      return {
        ...state,
        isAuthenticated: !state.isAuthenticated,
        username: action.payload,
      };
    }
    default:
      return state;
  }
};
