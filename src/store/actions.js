import {
  createUserRequest,
  deleteUserRequest,
  editUserRequest,
  getUserRequest,
} from "../api/requests";

export const getUserAction = (users) => {
  return {
    type: "GET_USERS",
    payload: users,
  };
};

export const deleteUserAction = (id) => {
  return {
    type: "DELETE_USER",
    payload: id,
  };
};

export const editUserAction = (userId, newUser) => {
  return {
    type: "EDIT_USER",
    userId: userId,
    newUser: newUser,
  };
};

export const getUsers = (dispatch) => {
  getUserRequest().then((response) => {
    dispatch(getUserAction(response));
  });
};

export const deleteUser = (userId, dispatch) => {
  deleteUserRequest(userId).then((response) => {
    console.log(response);
    dispatch(deleteUserAction(userId));
  });
};

export const editUser = (userId, newUser, dispatch) => {
  editUserRequest(userId, newUser).then((response) => {
    console.log(response);
    dispatch(editUserAction(userId, newUser));
  });
};

export const createUser = (newUser, dispatch) => {
  createUserRequest(newUser).then((response) => {
    console.log(response);
    getUserRequest().then((response) => dispatch(getUserAction(response)));
  });
};
