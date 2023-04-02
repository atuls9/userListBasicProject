import React, { useState } from "react";
import Warnings from "./Warnings";
const UserForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();
  const inputHandler = (e) => {
    e.target.name === "username"
      ? setName(e.target.value)
      : setAge(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({ title: "please Enter username and age" });
      return;
    }
    if (+age < 1) {
      setError({ title: "age must be greater than 1" });
      return;
    }

    props.onSubmit(name, age);
    console.log(props);
    setName("");
    setAge("");
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <Warnings title={error.title} onOkay={errorHandler} />}
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
