import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../store/actions";

export function UserEdit() {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [idInput, setIdInput] = useState();
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(
      editUser(idInput, { id: idInput, name: nameInput, email: emailInput })
    );
  };
  return (
    <>
      <form>
        <div className="form-group">
          <h3>Edit user {}</h3>
          <label><b>Id</b></label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter id"
            onChange={(e) => setIdInput(e.target.value)}
          />
        </div>
        <div className="form-group">
          <h3>Edit user {}</h3>
          <label><b>Email</b></label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label><b>Name</b></label>
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
          Edit
        </button>
      </form>
    </>
  );
}
