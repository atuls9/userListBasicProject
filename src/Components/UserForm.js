import React, { useState } from "react";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const inputHandler = (e) => {
    e.target.name === "username"
      ? setName(e.target.value)
      : setAge(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      return;
    }
    if (+age < 1) {
      return;
    }

    props.onSubmit(name, age);
    console.log(props);
    setName("");
    setAge("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="">Username</label>
          <input
            type="text"
            name={"username"}
            value={name}
            onChange={inputHandler}
          />
        </div>
        <div>
          <label htmlFor="">Age (Years)</label>
          <input
            type="number"
            name={"age"}
            value={age}
            onChange={inputHandler}
          />
        </div>
        <div>
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
