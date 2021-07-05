import React from "react";

const Members = props => {
  return (
    <div className="note-list">
      {props.members.map(member => (
        <div className="note" key={member.id}>
          <h3>{member.name}</h3>
          <p>Email: {member.email}</p>
          <p>Role: {member.role}</p>
          <button onClick={(e)=>{props.grabMembertoEdit(member)}}>Edit Member</button>
        </div>
      ))}
    </div>
  );
};

export default Members;
