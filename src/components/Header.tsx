import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { logo } from "../constants/constants";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <AppBar color="transparent" position="static">
      <Toolbar>
        <img src={logo} alt="logo" style={{ width: 30, marginRight: 10 }} />
        <Typography>Ishikawa</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
