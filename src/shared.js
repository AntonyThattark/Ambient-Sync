import Card from "./Card";
import Loader from "./loader";
import "./settings.css";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

function Shared() {
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
          {/* <div className="dropdown-checkbox">
            <button className="dropdown-button">
              <div className="dropdown-content"> */}
          <h className="dropDown">
            <Dropdown>
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
              ></Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">ROOM 2</Dropdown.Item>
                <Dropdown.Item href="#/action-2">ROOM 3</Dropdown.Item>
                <Dropdown.Item href="#/action-3">ROOM 4</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </h>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            ></input>
            <label class="form-check-label" for="flexCheckDefault">
              Default checkbox
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            ></input>
            <label class="form-check-label" for="flexCheckDefault">
              Default checkbox
            </label>
          </div>
          {/* </div>
            </button>
          </div> */}
          <a class="navbar-brand" href="/Settings">
            Go back to Individual Preference
          </a>
        </div>
      </nav>
    </div>
  );
}
export default Shared;
