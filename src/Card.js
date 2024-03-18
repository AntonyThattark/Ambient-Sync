import React from "react";
import "./Card.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
function Card() {
  const [brightness, setBrightness] = useState(0);
  const [off, setOff] = useState(false);
  const finalBrightness = off ? 0 : brightness ** 2;
  return (
    <div className="all">
      <div>
        <h className="dropDown">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              ROOM 1
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">ROOM 2</Dropdown.Item>
              <Dropdown.Item href="#/action-2">ROOM 3</Dropdown.Item>
              <Dropdown.Item href="#/action-3">ROOM 4</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </h>
        <h2 className="set">Set Your</h2>
        <h className="capital">PREFERENCE</h>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="card">
              <div className="card1">
                <img
                  className="card-img-top"
                  src="https://images.unsplash.com/photo-1617363020293-62faac14783d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Card img cap"
                />
                <div>
                  <div className="card-body">
                    <h5 className="card-title">Room Lighting</h5>
                    <p className="card-text">Set the colour of the light</p>
                    <select
                      className="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                    >
                      <option selected>Off</option>
                      <option value="1">Warm</option>
                      <option value="2">White</option>
                    </select>
                    <div>
                      <p className="card-text">
                        Light Brightness
                        <div>
                          <input
                            type="range"
                            min={0}
                            max={5}
                            step={1}
                            value={brightness}
                            onChange={(event) => {
                              setBrightness(event.target.valueAsNumber);
                            }}
                          />
                          <button onClick={() => setOff((m) => !m)}>
                            {off ? "Off" : "On"}
                          </button>
                        </div>
                        <div>
                          <p>Final Brightness: {finalBrightness.toFixed(3)}</p>
                        </div>
                      </p>
                      <p></p>
                      <a href="/" className="btn btn-primary">
                        Set
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <img
              className="card-img-top"
              src="https://images.unsplash.com/photo-1677959098115-1aafeb9313c0?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Card img cap"
            />
            <div className="card-body">
              <h5 className="card-title">Fan Settings</h5>
              <div>
                <p className="card-text">Set Speed of the Fan:</p>
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>Off</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <p></p>
              <a href="/" className="btn btn-primary">
                Set
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="lastCard">
            <div className="card">
              <img
                className="card-img-top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKbOKeVwJmPTvCVh91noyvn-pUJOyLPAP93A&usqp=CAU"
                alt="Card img cap"
              />
              <div className="card-body">
                <h5 className="card-title">Room Temprature</h5>
                <p className="card-text">Set temprature of the room:</p>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-default"
                    >
                      Celsius
                    </span>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
                <a href="/" className="btn btn-primary">
                  Set
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="lastCard">
            <div className="card">
              <img
                className="card-img-top"
                src="https://www.shutterstock.com/image-vector/add-user-icon-600nw-693765823.jpg"
                alt="Card img cap"
              />
              <div className="card-body">
                <h5 className="card-title">Add Users</h5>
                <div className="input-box1">
                  <input type="email" placeholder="Email" required />
                </div>
                <div className="input-box1">
                  <input type="text" placeholder="Room Id" required />
                </div>
                <Button variant="primary">Add</Button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="/">
        <Button variant="secondary" className="logout">
          Log Out
        </Button>
      </a>
    </div>
    // </React.Fragment>
  );
}

export default Card;
