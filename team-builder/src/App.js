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
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  };
  const memberToEdit = member => {
    console.log(`eskeetit`);
  };
  return (
    <div className="App">
      <h1>Team Members</h1>
      <p>hello</p>
      <Form addNewMember={addNewMember} />
      <Members members={members} membertoEdit={memberToEdit}  />
    </div>
  );
}

export default App;
