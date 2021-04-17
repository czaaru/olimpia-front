import { faCalendarAlt, faListAlt } from "@fortawesome/free-regular-svg-icons";
import {
  faCamera,
  faHourglassHalf,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import NavLink from "./Components/NavLink";
import "./MainMenu.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import React from "react";

export const MainMenu = () => (
  <>
    <Router>
      <header className="main-menu">
        <div className="main-banner">
          <img src="media/images/logo.png" alt="Olimpia logo"></img>
          <p>OLIMPIA KĄTY</p>
        </div>
        <nav className="main-nav">
          <NavLink path="/" iconName={faHourglassHalf} name="Aktualności" />
          <NavLink path="/table" iconName={faListAlt} name="Tabela" />
          <NavLink path="/calendar" iconName={faCalendarAlt} name="Terminarz" />
          <NavLink path="/team" iconName={faUsers} name="Kadra" />
          <NavLink path="/gallery" iconName={faCamera} name="Galeria" />
        </nav>
      </header>
      <section className="main-content">
        <Switch>
          <Route exact path="/">
            <p>Aktualnosci tutaj</p>
          </Route>
          <Route path="/table">
            <p>Tabela tutaj</p>
          </Route>
          <Route path="/calendar">
            <p>Terminarz tutaj</p>
          </Route>
          <Route path="/team">
            <p>Kadra tutaj</p>
          </Route>
          <Route path="/gallery">
            <p>Galeria tutaj</p>
          </Route>
        </Switch>
      </section>
    </Router>
  </>
);
