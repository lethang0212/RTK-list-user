// import axios from "axios";
import axiosInstance from "./config";

export const getUserRequest = () => {
  return axiosInstance.get("https://60fe772c25741100170785f2.mockapi.io/users");
};

export const createUserRequest = (newUser) => {
  return axiosInstance.post(
    "https://60fe772c25741100170785f2.mockapi.io/users/",
    {
      name: newUser.name,
      email: newUser.email,
    }
  );
};

export const editUserRequest = (userId, newUser) => {
  return axiosInstance.put(
    "https://60fe772c25741100170785f2.mockapi.io/users/" +userId,
    {
      name: newUser.name,
      email: newUser.email,
    }
  );
};

export const deleteUserRequest = (userId) => {
  return axiosInstance.delete(
    "https://60fe772c25741100170785f2.mockapi.io/users/" + userId
  );
};
