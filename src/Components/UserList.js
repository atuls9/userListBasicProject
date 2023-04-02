import React from "react";

const UserList = (props) => {
  return (
    <ul>
      {props.users.map((user) => (
        <li key={user.id}>
          Name: {user.name} Age: {user.age}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
