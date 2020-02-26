import React, { useState } from "react";

const Form = props => {
  // console.log("this is our props",props);
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: ""
  });
  //onChange handler
  const handleChanges = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
    console.log(member);
  };
  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", email: "",role: "" });
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Member Name</label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        value={member.name}
      />
      <label htmlFor="email">email</label>
      <input
        id="email"
        name="email"
        onChange={handleChanges}
        value={member.email}
      />
      <label htmlFor="role">role</label>
      <input
        id="role"
        name="role"
        onChange={handleChanges}
        value={member.role}
      />
      <button type="submit">Add Member</button>
    </form>
  );
};

export default Form;
