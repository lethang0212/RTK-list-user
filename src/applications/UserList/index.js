import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../store/slice";
import { UserItem } from "./UserItem.js";

export function UserList() {
  const userLists = useSelector(selectUser);
  return (
    <div>
      <h2>Table List</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userLists.map((user) => (
            <tr key={user.id}>
              <th>{user.id}</th>
              <th>{user.emailUser}</th>
              <th>{user.nameUser}</th>
              <th>
                {" "}
                <UserItem id={user.id} />{" "}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
