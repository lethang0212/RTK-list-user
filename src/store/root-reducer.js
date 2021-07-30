import { combineReducers } from "redux";
import usersReducer from "../applications/store/reducer";

export default combineReducers({
  users: usersReducer,
});
