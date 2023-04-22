import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  function handleInputs(event) {
    const { value, name } = event.target;
    setContact((prevInputValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevInputValue.lName,
          email: prevInputValue.email
        };
      } else if (name === "lName") {
        return {
          fName: prevInputValue.fName,
          lName: value,
          email: prevInputValue.email
        };
      } else {
        return {
          fName: prevInputValue.fName,
          lName: prevInputValue.lName,
          email: value
        };
      }
    });
  }

  function handleFormClick(event) {
    event.defaultPrevented();
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <div>
        <h1>
          {contact.fName} {contact.lName}
        </h1>
        <p>{contact.email}</p>
      </div>
      <form onClick={handleFormClick}>
        <input
          onChange={handleInputs}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={handleInputs}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={handleInputs}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
