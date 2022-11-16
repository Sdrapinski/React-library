import React from "react";
import "./NavBar.scss";

export interface NavBarProps {
  sticky?: boolean;
  children?: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  return <nav>{children}</nav>;
};

export default NavBar;
