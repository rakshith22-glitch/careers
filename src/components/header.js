import React from "react";
import { Link } from "react-scroll";

function Head() {
  return (
    <header className="nav">
      <nav className="nav__container" style={{ textAlign: "center" }}>
        <ul>
          <li>
            <Link activeClass="active" smooth spy to="about">
              ABOUT
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="values">
              VALUES
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="team">
              TEAM
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="jobs">
              JOBS
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="mission">
              MISSION
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Head;
