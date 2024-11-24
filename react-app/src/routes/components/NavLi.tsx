import { NavLink } from "react-router-dom";

interface NavLiProps {
  name: string;
  to: string;
}

export const NavLi = ({ to, name }: NavLiProps) => {
  return (
    <li key={to}>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "nav-active" : "")}
      >
        {name}
      </NavLink>
    </li>
  );
};
