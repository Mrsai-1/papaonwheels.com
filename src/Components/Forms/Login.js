import React, { useState } from "react";

import { API_URL } from "../../Data/Api_Url";

const Login = ({ showWelcomeScreen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responce = await fetch(`${API_URL}/vender/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await responce.json();
      if (responce.ok) {
        // console.log(data);
        localStorage.setItem("loginToken", data.token);
        setEmail("");
        setPassword("");
        alert("vender Login successfully...");
        showWelcomeScreen();
      }
      const venderId = data.venderId;
      // console.log(data);
      const venderResponce = await fetch(
        `${API_URL}/vender/single-vender/${venderId}`
      );
      const venderData = await venderResponce.json();
      if (venderResponce.ok) {
        const venderFirmId = venderData.vendorFirmId;
        console.log("checking for firmId", venderData);
        localStorage.setItem("FirmId", venderFirmId);
      }
    } catch (error) {
      console.log(error);
      alert("Login failed....");
    }
  };

  return (
    <>
      <div className="login-section">
        <h2 className="d-flex justify-content-center py-4">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group d-flex">
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="for-control"
            />
          </div>
          <div className="form-group d-flex">
            <label>Password</label>
            <input
              type="text"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="for-control"
            />
          </div>
          <div className="submit-button  d-flex justify-content-center py-5">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
