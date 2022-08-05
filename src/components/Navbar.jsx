import * as React from "react";
import AppBar from "@mui/material/AppBar";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

const theme = createTheme();

const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <AccountBalanceIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            <Link style={{ color: "white", textDecoration: "none" }} to="/">Transactions Unified</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
