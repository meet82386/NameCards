import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props) {
    return <div className="card">
        <div className="top">
          <p>{props.id}</p>
          <h2 className="name">{props.name}</h2>
          <Avatar 
            imgLink = {props.imgLink}
          />
        </div>
        <div className="bottom">
          <Details 
            number = {props.number}
            email = {props.email}
          />
        </div>
      </div>
}

export default Card;