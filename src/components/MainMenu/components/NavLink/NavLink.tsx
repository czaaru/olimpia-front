import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface NavLinkProps {
  path: string;
  iconName: IconProp;
  name: string;
}

export const NavLink = ({ path, iconName, name }: NavLinkProps) => (
  <Link to={"/olimpia-front" + path}>
    <FontAwesomeIcon icon={iconName} />
    <p>{name}</p>
  </Link>
);
