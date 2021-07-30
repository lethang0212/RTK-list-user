import { createAction } from "@reduxjs/toolkit";
import {
  getUsersRequest,
  deleteUsersRequest,
  editUsersRequest,
  createUsersRequest,
} from "../../api/requests";
import * as constants from "./constants";

const getUsersAction = createAction(constants.GET_USERS);
const editUserAction = createAction(constants.EDIT_USER);
const deleteUserAction = createAction(constants.DELETE_USER);

export const getUsers = () => {
  return (dispatch) => {
    getUsersRequest().then((response) => {
      dispatch(getUsersAction(response));
    });
  };
};

export const deleteUser = (userId) => {
  return (dispatch) => {
    deleteUsersRequest(userId).then((response) => {
      dispatch(deleteUserAction(userId));
    });
  };
};

export const editUser = (userId, newUser) => {
  return (dispatch) => {
    editUsersRequest(userId, newUser).then((response) => {
      dispatch(editUserAction({ userId, newUser }));
    });
  };
};

export const createUser = (newUser) => {
  return (dispatch) => {
    createUsersRequest(newUser).then((response) => {
      console.log(response);
      getUsersRequest().then((response) => dispatch(getUsersAction(response)));
    });
  };
};
