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
      <Card 
        name = {contacts[1].name}
        imgLink = {contacts[1].imgURL}
        number = {contacts[1].phone}
        email = {contacts[1].email}
      />
      <Card 
        name = {contacts[2].name}
        imgLink = {contacts[2].imgURL}
        number = {contacts[2].phone}
        email = {contacts[2].email}
      />
    </div>
  );
}

export default App;
