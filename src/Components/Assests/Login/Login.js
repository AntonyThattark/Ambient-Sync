import React, { useState } from "react";
import "./Login.css";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Loader from "../../../loader";

const Login = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <div className="inter">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="normal">
          <h2 className="head">AMBIENT SYNC</h2>
          <div className="wrapper">
            <form action="">
              <h2 className="h2">Login</h2>
              <div className="input-box">
                <input type="email" placeholder="Email Id" required />
                <MdEmail className="icon" />
              </div>
              <div className="input-box">
                <input type="password" placeholder="Password" required />
                <FaLock className="icon" />
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
