import React from "react";
import "./Layout.css";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="welcome">
        <h1>
          BIMA<span>TIKA</span>
        </h1>
        <h2>
          Welcome to Bima<span>Tika</span>
        </h2>
        <h3>Are you a Customer or Merchant ?</h3>
        <p>Select below what are you!</p>
        <div className="btn-area">
          <Link to="/user">
            <button className="userbtn">User</button>
          </Link>
          <Link to="/merchant">
            <button className="merchantbtn">Merchant</button>
          </Link>
        </div>

        <Outlet />
      </div>
    </>
  );
}

export default Layout;
