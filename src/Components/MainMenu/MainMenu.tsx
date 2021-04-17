import { faCalendarAlt, faListAlt } from "@fortawesome/free-regular-svg-icons";
import {
  faCamera,
  faHourglassHalf,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MainMenu.css";

export const MainMenu = () => (
  <header className="main-menu">
    <div className="main-banner">
      <img src="media/images/logo.png" alt="Olimpia Kąty logo"></img>
      <p>OLIMPIA KĄTY</p>
    </div>
    <nav className="main-nav">
      <a href="/">
        <FontAwesomeIcon icon={faHourglassHalf} />
        <p>Aktualności</p>
      </a>
      <a href="/table">
        <FontAwesomeIcon icon={faListAlt} />
        <p>Tabela</p>
      </a>
      <a href="/calendar">
        <FontAwesomeIcon icon={faCalendarAlt} />
        <p>Terminarz</p>
      </a>
      <a href="/team">
        <FontAwesomeIcon icon={faUsers} />
        <p>Kadra</p>
      </a>
      <a href="/gallery">
        <FontAwesomeIcon icon={faCamera} />
        <p>Galeria</p>
      </a>
    </nav>
  </header>
);
