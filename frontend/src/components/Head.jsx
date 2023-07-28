import logo from "../assets/mini-logo4.png";
import doctor from "../assets/doctor.png";
import { Settings } from "@mui/icons-material";
import React from "react";
import "../App.css";

function Head() {
  return (
    <>
      {/* <div className="header sticky-top"> */}
        <nav
          className="navbar sticky-top"
        >
          <div class="container-fluid  sticky-top">
            <a class="navbar-brand" href="#">
              <img
                src={logo}
                alt=""
                width="76.5px"
                height="75px"
                class="d-inline-block align-text-top"
                style={{ marginLeft: "0.8vw", marginTop: "-1vh" }}
              />
            </a>

            <div className="right-nav">
              <Settings
                style={{
                  fontSize: "2.5rem",
                  color: "aliceblue",
                  marginTop: "2vh",
                }}
              ></Settings>

              <div className="userPhoto">
                <img src={doctor} alt="" />
              </div>
              <p
                style={{
                  color: "white",
                  fontSize: "24px",
                  fontWeight: "500",
                  marginTop: "1.5vh",
                }}
              >
                Dr. Nombre de Usuario
              </p>
            </div>
          </div>
        </nav>
      {/* </div> */}
    </>
  );
}

export default Head;
