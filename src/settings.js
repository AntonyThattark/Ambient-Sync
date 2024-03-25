import Card from "./Card";
import Loader from "./loader";
import "./settings.css";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
//import Nav from "react-bootstrap/Nav";

function Settings() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <div className="background">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Card />
        </>
      )}
      <nav class="navbar fixed-top navbar-light bg-light">
        <div class="container-fluid">
          <h className="dropDown">
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                ROOM 1
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">ROOM 2</Dropdown.Item>
                <Dropdown.Item href="#/action-2">ROOM 3</Dropdown.Item>
                <Dropdown.Item href="#/action-3">ROOM 4</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </h>
          <a class="navbar-brand" href="/shared">
            Go to Shared Preference
          </a>
        </div>
      </nav>
    </div>

    /*<div className="tst">
      <div className="olay"></div>
      <div className="bck"></div>
    </div>*/
  );
}
export default Settings;
