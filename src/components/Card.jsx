import React from "react";
import Avatar from "./Avatar";

function Card(props) {
    return <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar 
            imgLink = {props.imgLink}
          />
        </div>
        <div className="bottom">
          <p className="info">{props.number}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
}

export default Card;