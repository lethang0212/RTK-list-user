import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../store/slice";

export function UserAdd() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = () => {
    dispatch(getUser({ email: email, name: name }));
  };

  return (
    <div>
      <h2>Add User</h2>
      <form>
        <div className="form-group">
          <label>
            <b>Email</b>
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={handleChangeEmail}
          />
        </div>
        <div className="form-group">
          <label>
            <b>Name</b>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            onChange={handleChangeName}
          />
        </div>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
