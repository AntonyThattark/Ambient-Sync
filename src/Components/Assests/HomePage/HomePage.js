import React from "react";
import "./HomePage.css";
import Button from "react-bootstrap/Button";
const HomePage = () => {
  return (
    <div className="inter">
      <div className="normal">
        <h2 className="head1">AMBIENT SYNC</h2>
        <div className="mb-2">
          <a href="/Login">
            <Button variant="secondary" size="lg" className="button">
              LOGIN
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
    </div>
  );
};

export default HomePage;
