import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/actions";
import { User } from "./User";

export function UserList() {
  const userIds = useSelector((state) => state.users.userIds);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userIds.map((userId) => {
            return (
              <>
                <tr key={userId}>
                  <User id={userId} />
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
