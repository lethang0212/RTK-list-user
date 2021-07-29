import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../store/actions";

export function UserAdd() {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    createUser({ name: nameInput, email: emailInput }, dispatch);
  };

  return (
    <>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            onChange={(e) => setNameInput(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Add New User
        </button>
      </form>
    </>
  );
}
