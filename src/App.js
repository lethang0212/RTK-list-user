import React from "react";
import { UserAdd } from "./applications/UserAdd";
import { UserList } from "./applications/UserList";

function App() {
  return (
    <div>
      <UserAdd />
      <br /> <br />
      <UserList />
    </div>
  );
}

export default App;
