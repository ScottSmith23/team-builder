import React, { useState } from 'react';
import './App.css';
import Members from "./components/Members";
import Form from "./components/Form";
function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Ringading",
      email: "Bom@bing.com",
      role: "Yolo"  
    }
  ]);
  const [memberToEdit,setMemberToEdit] = useState({});  
  const [boolEdit,setBoolEdit] = useState(false);
  const grabMemberToEdit = e => {
    setMemberToEdit(e);
    console.log(memberToEdit)
    setBoolEdit(true);
  };
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  };
  const editMember = member => {
    alert(`Editednshit`);
    console.log(member)
    let editedMembers = members.map(el => (
      el.id === member.id ? {...el, name: member.name, email: member.email, role: member.role}: el
    ))
    setMembers(editedMembers);
  }

  return (
    <div className="App">
      <h1>Team Members</h1>
      <p>hello</p>
      <Form addNewMember={addNewMember} memberToEdit={memberToEdit} editMember={editMember} boolEdit={boolEdit} setBoolEdit={setBoolEdit} />
      <Members members={members} grabMembertoEdit={grabMemberToEdit}  />
    </div>
  );
}

export default App;
