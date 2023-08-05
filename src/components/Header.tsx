import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { logo } from "../constants/constants";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <AppBar color="transparent">
      <Toolbar>
        <img src={logo} alt="logo" style={{ width: 30 }} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
