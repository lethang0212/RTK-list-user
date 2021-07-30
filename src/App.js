import React from "react";
import { UserAdd } from "./applications/UserAdd";
import { UserEdit } from "./applications/UserEdit";
import { UserList } from "./applications/UserList";

function App() {
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <UserAdd />
        </div>
        <div className="col-6">
          <UserEdit />
        </div>
      </div>
      <br /> <br />
      <UserList />
    </div>
  );
}

export default App;
