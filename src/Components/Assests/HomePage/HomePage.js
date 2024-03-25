// import React from "react";
import React, { useState } from "react";
import "./HomePage.css";
import Button from "react-bootstrap/Button";
import Loader from "../../../loader";
const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <div className="interHome">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="normal">
          <h2 className="head1">AMBIENT SYNC</h2>
          <div className="mb-2">
            <a href="/Login">
              <Button variant="secondary" size="lg" className="button">
                Login
              </Button>
            </a>
            {"  "}
            <a href="/Register">
              <Button variant="light" className="button" size="lg">
                Register
              </Button>{" "}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
