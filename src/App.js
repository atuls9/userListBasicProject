import React, { useState } from "react";
import UserForm from "./Components/UserForm";
import UserList from "./Components/UserList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addSubmitHandler = (username, age) => {
    setUsersList((prevUsers) => {
      return [
        ...prevUsers,
        { name: username, age: age, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <UserForm onSubmit={addSubmitHandler} />
      <UserList users={usersList} />
      {/* <h2>Let's get Started</h2> */}
    </div>
  );
};

export default App;
