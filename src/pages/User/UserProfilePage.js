import React from "react";
import UserProfileComponent from "./components/UserProfileComponent";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setReduxUserState } from "../../redux/actions/userAction";

const updateUserApiRequest = async (
  name,
  lastName,
  phoneNumber,
  address,
  city,
  password
) => {
  const { data } = await axios.put("/api/users/profile", {
    name,
    lastName,
    phoneNumber,
    address,
    city,
    password,
  });
  return data;
};


const fetchUser = async (id) => {
  const { data } = await axios.get("/api/users/profile/" + id);
  return data;
};

function UserProfilePage() {
  const reduxDispatch = useDispatch();

   const { userInfo } = useSelector((state) => state.userRegisterLogin);

  return (
    <UserProfileComponent
      updateUserApiRequest={updateUserApiRequest}
      fetchUser={fetchUser}
      userInfoFromRedux={userInfo}
      setReduxUserState={setReduxUserState}
      reduxDispatch={reduxDispatch}
      localStorage={window.localStorage}
      sessionStorage={window.sessionStorage}
    />
  );
}

export default UserProfilePage;


