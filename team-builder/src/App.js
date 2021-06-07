import "./App.css";
import React, { useState } from "react";
const initialFormValues = { memberName: "", memberRole: "", memberEmail: "" };
function App() {
  const [formValue, setFormValue] = useState(initialFormValues);
  const [memberList, setMemberList] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();
    const newMember = formValue;
    const updatedMemberList = memberList.concat(newMember);
    setMemberList(updatedMemberList);
    setFormValue(initialFormValues);
  };

  const changeHander = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setFormValue({ ...formValue, [inputName]: inputValue });
  };

  return (
    <div className="App">
      <h1>Team Members Form</h1>
      <form onSubmit={submitHandler}>
        <b>Name: </b>
        <input
          type="text"
          name="memberName"
          value={formValue.memberName}
          onChange={changeHander}
        />
        <br />
        <b>Email: </b>
        <input
          type="text"
          name="memberEmail"
          value={formValue.memberEmail}
          onChange={changeHander}
        />
        <br />
        <b>Role: </b>
        <input
          type="text"
          name="memberRole"
          value={formValue.memberRole}
          onChange={changeHander}
        />
        <br />
        <button>Submit</button>
      </form>
      {memberList.map((element) => (
        <div class="member">
          <p>Name: {element.memberName}</p>
          <p>Role: {element.memberRole}</p>
          <p>Email: {element.memberEmail}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
