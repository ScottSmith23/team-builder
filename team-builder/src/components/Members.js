import React from "react";

const Members = props => {
  return (
    <div className="note-list">
      {props.members.map(member => (
        <div className="note" key={member.id}>
          <h3>{member.name}</h3>
          <p>{member.email}</p>
          <p>{member.role}</p>
          <button onClick={props.memberToEdit}>Edit Member</button>
        </div>
      ))}
    </div>
  );
};

export default Members;
