import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../store/actions";

export function User(props) {
  const { id } = props;
  const userById = useSelector((state) => state.users.usersById[id]);
  const dispatch = useDispatch();
  const handleEdit = () => {
      
  }

  if (userById !== undefined) {
    return (
      <>
        <td>{userById.id}</td>
        <td>{userById.name}</td>
        <td>{userById.email}</td>
        <td>
          <button onClick={() => dispatch(deleteUser(id))}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </td>
      </>
    );
  } else return <> </>;
}
