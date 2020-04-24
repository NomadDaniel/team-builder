import React, { useState } from "react";
import Form from "./components/Form";
import UserCard from "./components/UserCard";
import "./App.css";

const initialTeam = [
  {firstName: 'Brennan', lastName: 'Huff', email: 'brennan@prestigeworldwide.org', role: 'recently let go from Pet Smart'},
  // {firstName: 'Dale', lastName: 'Doback', email: 'dale@prestigeworldwide.org', role: 'fantasy baseball team manager'}
]

function App() {
  
  const [team, setTeam] = useState(initialTeam)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: ""
  });
  const onInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    console.log(formData);
  };
  
  const [teamList] = [initialTeam];

  const submitForm = event => {
    teamList.push(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      role: ""
    });
    
    
    
    event.preventDefault();

    console.log(teamList);
    console.log(formData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Form
          onInputChange={onInputChange}
          formData={formData}
          submitForm={submitForm}
        />
      </header>
      <h3>Prestige Worldwide Members</h3>
      <div className="card-wrapper">
        {teamList.map(item => {
          return (
            <UserCard
              firstName={item.firstName}
              lastName={item.lastName}
              email={item.email}
              role={item.role}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;