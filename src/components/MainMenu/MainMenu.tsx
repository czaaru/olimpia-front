import { faCalendarAlt, faListAlt } from "@fortawesome/free-regular-svg-icons";
import {
  faCamera,
  faHourglassHalf,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import NavLink from "./components/NavLink";
import "./MainMenu.css";

export const MainMenu = () => (
  <header className="main-menu">
    <div className="main-banner">
      {/* srcSet not needed when app is depoloyed */}
      <img
        src="media/images/logo.svg"
        srcSet="olimpia-front/media/images/logo.svg"
        alt="Olimpia logo"
      ></img>
      <p>OLIMPIA KĄTY</p>
    </div>
    <div className="under-banner">
      <p>MISTRZ V LIGI OKRĘGOWEJ 18/19</p>
    </div>
    <nav className="main-nav">
      <NavLink path="/" iconName={faHourglassHalf} name="Aktualności" />
      <NavLink path="/table" iconName={faListAlt} name="Tabela" />
      <NavLink path="/calendar" iconName={faCalendarAlt} name="Terminarz" />
      <NavLink path="/team" iconName={faUsers} name="Kadra" />
      <NavLink path="/gallery" iconName={faCamera} name="Galeria" />
    </nav>
  </header>
);
