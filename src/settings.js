import Card from "./Card";
import Loader from "./loader";
import "./settings.css";
import React, { useState } from "react";
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
    </div>
    /*<div className="tst">
      <div className="olay"></div>
      <div className="bck"></div>
    </div>*/
  );
}
export default Settings;
