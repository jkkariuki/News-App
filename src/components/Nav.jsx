import React from "react";
import logo from "../imgs/Red Modern Label Logo.png";

function Nav(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-dark bg-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target=".navbarToggleExternalContent"
          aria-controls=".navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <img className="mr-auto logo" src={logo} />

        <ul class="navbar mx-auto  nav navList">
          <li class="nav-item active">
            <a class="nav-link" href="/">
              US
            </a>
          </li>
          <div class="vr"></div>

          <li class="nav-item">
            <a class="nav-link" href="/technology">
              Technology
            </a>
          </li>
          <div class="vr"></div>

          <li class="nav-item">
            <a class="nav-link" href="/sports">
              Sports
            </a>
          </li>
          <div class="vr"></div>

          <li class="nav-item">
            <a class="nav-link" href="/business">
              Business
            </a>
          </li>
          <div class="vr"></div>

          <li class="nav-item">
            <a class="nav-link" href="/entertainment">
              Entertainment
            </a>
          </li>
          <div class="vr"></div>
        </ul>

        <span className="weatherData">
          {props.temp}°F {props.townName}
        </span>
      </nav>
      <div
        class="collapse navbarToggleExternalContent"
        id="navbarToggleExternalContent"
      >
        <div class="bg-dark p-4 navExternalContent">
          <ul class="navbar nav menuList">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                US
              </a>
            </li>
            <div class="vr"></div>

            <li class="nav-item">
              <a class="nav-link" href="/technology">
                Technology
              </a>
            </li>
            <div class="vr"></div>

            <li class="nav-item">
              <a class="nav-link" href="/sports">
                Sports
              </a>
            </li>
            <div class="vr"></div>

            <li class="nav-item">
              <a class="nav-link" href="/business">
                Business
              </a>
            </li>
            <div class="vr"></div>

            <li class="nav-item">
              <a class="nav-link" href="/entertainment">
                Entertainment
              </a>
            </li>
            <div class="vr"></div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
