import React from "react";
import contacts from "../contacts";
import Card from "./Card";


function App() {

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card 
        name = {contacts[0].name}
        imgLink = {contacts[0].imgURL}
        number = {contacts[0].phone}
        email = {contacts[0].email}
      />
    </div>
  );
}

export default App;
