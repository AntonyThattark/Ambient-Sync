import React from "react";
import "./Register.css";
import { FaUser, FaLock } from "react-icons/fa";
import { BsFileLock } from "react-icons/bs";
import { MdVpnKey } from "react-icons/md";
import { MdEmail } from "react-icons/md";
// import Loader from "./loader";

const Register = () => {
  return (
    <div className="inter">
        <div className="normal">
          <h2 className="head">AMBIENT SYNC</h2>
          <div className="wrapper">
            <form action="">
              <h2 className="h2">Register</h2>
              <div className="input-box">
                <input type="text" placeholder="Username" required />
                <FaUser className="icon" />
              </div>
              <div className="input-box">
                <input type="password" placeholder="Password" required />
                <FaLock className="icon" />
              </div>
              <div className="input-box">
                <input
                  type="Password"
                  placeholder="Re-enter password"
                  required
                />
                <BsFileLock className="icon" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Product Key" required />
                <MdVpnKey className="icon" />
              </div>
              <div className="input-box">
                <input type="email" placeholder="Email" required />
                <MdEmail className="icon" />
              </div>
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
    </div>
  );
};

export default Register;
