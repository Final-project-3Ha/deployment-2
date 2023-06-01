import React from "react";
import UserProfileComponent from "./components/UserProfileComponent";
import axios from "axios";
function UserProfilePage() {
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

  return <UserProfileComponent updateUserApiRequest={updateUserApiRequest} />;
}

export default UserProfilePage;


