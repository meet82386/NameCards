import React from "react";
import contacts from "../contacts";
import Card from "./Card";
import Avatar from "./Avatar";

function createCard(contact) {
  return <Card 
    id = {contact.id}
    key = {contact.id}
    name = {contact.name}
    imgLink = {contact.imgURL}
    number = {contact.phone}
    email = {contact.email}
  />
}

function App() {

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar 
        imgLink = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
