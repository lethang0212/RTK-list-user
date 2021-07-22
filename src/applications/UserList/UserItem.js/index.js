import React from "react";
import { useDispatch } from "react-redux";
import { RemoveUser } from "../../store/slice";

export function UserItem(props) {
  const { id } = props;
  const dispatch = useDispatch();
  const handleAddToEdit = () => {};
  const handleRemove = (id) => {
    dispatch(RemoveUser(id));
  };
  return (
    <div>
      <button
        onClick={() => {
          handleAddToEdit();
          handleRemove(id);
        }}
      >
        Edit
      </button>
      <button onClick={() => handleRemove(id)}>Remove</button>
    </div>
  );
}
