import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../../store/actions";

export function User(props) {
  const { id } = props;
  const userById = useSelector((state) => state.usersById[id]);
  const dispatch = useDispatch();
  if (userById !== undefined) {
    return (
      <>
        <td>{userById.id}</td>
        <td>{userById.name}</td>
        <td>{userById.email}</td>
        <td>
          <button onClick={() => deleteUser(id, dispatch)}>Delete</button>
        </td>
      </>
    );
  } else return <> </>;
}
