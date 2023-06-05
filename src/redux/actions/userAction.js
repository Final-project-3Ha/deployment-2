import axios from "axios";

export const setReduxUserState = (userCreated) => (dispatch) => {
  dispatch({
    type: "LOGIN_USER",
    payload: userCreated,
  });
};

export const logout = async (dispatch) => {
  try {
    await axios.get("/api/logout");
    dispatch({ type: "LOGOUT_USER" });
    console.log("userInfo");
    sessionStorage.removeItem("userInfo");
  } catch (error) {
    console.log(error);
  }
};
