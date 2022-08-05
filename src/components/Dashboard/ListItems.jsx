import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PeopleIcon from "@mui/icons-material/People";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link
        to="/dashboard"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <ListItemText primary="Dashboard" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ReceiptLongIcon />
      </ListItemIcon>
      <Link
        to="/transactions"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <ListItemText primary="Transactions" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link to="/vendors" style={{ textDecoration: "none", color: "inherit" }}>
        <ListItemText primary="Vendors" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AccountBalanceIcon />
      </ListItemIcon>
      <Link to="/banks" style={{ textDecoration: "none", color: "inherit" }}>
        <ListItemText primary="Banks" />
      </Link>
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <Link
        to="/current-week-transactions"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <ListItemText primary="Current week" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <Link
        to="/current-month-transactions"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <ListItemText primary="Current month" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <Link
        to="/current-year-transactions"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <ListItemText primary="Current year" />
      </Link>
    </ListItemButton>

    <ListSubheader component="div" inset>
      Logout
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <Link
        to="/login"
        style={{ textDecoration: "none", color: "inherit" }}
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("name");
          let navigate = useNavigate();
          navigate("/login");
        }}
      >
        <ListItemText primary="Logout" />
      </Link>
    </ListItemButton>
  </React.Fragment>
);
