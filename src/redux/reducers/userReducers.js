import { logout } from "../actions/userAction.js";

export const userRegisterLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        userInfo: action.payload,
      };
    case "LOGOUT_USER":
      logout();
      return {
        state: {},
        userInfo: action.payload,
      };

    default:
      return state;
  }
};
