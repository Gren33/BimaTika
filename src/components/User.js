import React, { useState } from "react";
import "./User.css";
import profileImage from "../assets/profile.jpg";

function User() {
  const Users = [
    {
      id: 1,
      heading: "Earn Tokens",
      text: "Enter your code here to redeem your tokens.",
      input: (
        <input
          type={"text"}
          style={{
            width: "140px",
            height: "40px",
            borderRadius: "5px",
            border: "3px #5db075 solid",
          }}
        />
      ),
      button: <button className="btn3">Redeem</button>,
    },
    {
      id: 2,
      heading: "Hi user",
      text: "Your token balance is 124",
    },
  ];

  const [selected, setSelected] = useState(0);

  const earnToken = () => {
    {
      selected === 0 ? setSelected(0) : setSelected(0);
    }
  };

  function showToken() {
    selected === 1 ? setSelected(1) : setSelected(1);
  }

  return (
    <div className="profile">
      <div className="profile-post">
        <h2>Profile</h2>

        <div className="image-container">
          <img className="image" src={profileImage} alt="profile" />
          <h2>Victoria Robertson</h2>
        </div>
        <div className="bar">
          <button className="btn1" onClick={earnToken}>
            Earn Token
          </button>
          <button className="btn2" onClick={showToken}>
            Token Balance
          </button>
        </div>
        <div className="hero">
          <span>{Users[selected].heading}</span>
          <span>{Users[selected].text}</span>
          <span>{Users[selected].input}</span>
          <span>{Users[selected].button}</span>
        </div>
      </div>
    </div>
  );
}

export default User;
