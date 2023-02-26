import React, { useState } from "react";

import "./Merchant.css";
import profileImage from "../assets/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
function Merchant() {
  const Users = [
    {
      id: 1,
      heading: "Give Tokens",
      text: "Give a customer this code `${Q6RT}` to redeem their token.",
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
      heading: "Hi Merchant",
      text: "Collect your token bundle here!, Give them to your customer to build loyalty",
      bundle: (
        <FontAwesomeIcon
          icon={faSackDollar}
          style={{
            fontSize: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      ),
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
    <div>
      <>
        <div className="profile">
          <div className="profile-post">
            <h2>Profile</h2>

            <div className="image-container">
              <img className="image" src={profileImage} alt="profile" />
              <h2>Victoria Robertson</h2>
            </div>
            <div className="bar">
              <button className="btn1" onClick={earnToken}>
                Give Token
              </button>
              <button className="btn2" onClick={showToken}>
                Collect Bundle
              </button>
            </div>
            <div className="hero">
              <span>{Users[selected].heading}</span>
              <span>{Users[selected].text}</span>
              <span>{Users[selected].bundle}</span>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Merchant;
