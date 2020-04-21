import React, { useState } from "react";

const UserCard = props => {
  const [editable, setEditable] = useState(false);
  const [style, setStyle] = useState({});

  return (
    <div className="card">
      <p>
        Name:{" "}
        <span
          className="cardName"
          maxLength="20"
          contentEditable={editable}
          style={style}
          onKeyDown={event => {
            event.keyCode === 5 && document.querySelector(".cardName");
          }}
        >
          {props.firstName} {props.lastName}
        </span>
      </p>
      <p>
        {" "}
        Email:{" "}
        <span
          className="cardEmail"
          contentEditable={editable}
          style={style}
          onKeyDown={event => {
            event.keyCode === 5 && document.querySelector(".cardEmail");
          }}
        >
          {" "}
          {props.email}
        </span>
      </p>
      <p>
        Role:{" "}
        <span
          className="cardRole"
          contentEditable={editable}
          style={style}
          onKeyDown={event => {
            event.keyCode === 5 && document.querySelector(".cardRole");
          }}
        >
          {props.role}
        </span>
      </p>
      <button
        className="edit-btn"
        onClick={() => {
          setEditable(true);
          setStyle({ border: "2px solid red", background: "pink"});
        }}
      >
        Edit
      </button>
      
      <button
        className="edit-btn"
        onClick={() => {
          setEditable(false);
          setStyle({border: "2px solid green", background: "lightgreen"});
        }}
      >
        Save
      </button>
    </div>
  );
};

export default UserCard;