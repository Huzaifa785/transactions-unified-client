import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  mainListItems,
  secondaryListItems,
} from "../components/Dashboard/ListItems";
import Chart from "../components/Dashboard/Charts";
import CurrentWeekTransactions from "../components/Dashboard/Transactions";
import Spending from "../components/Dashboard/Spending";
import { FetchTransactions } from "../utils/FetchTransactions";
import { useEffect } from "react";
import { useState } from "react";
import TransactionsSkeleton from "../components/Skeleton/TransactionsSkeleton";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Transactions Unified
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function CurrentWeekTransactionsContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [weekSpending, setWeekSpending] = useState(0);

  const [transactions, setTransactions] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const getTransactions = async () => {
        const response = await FetchTransactions();
        setIsLoading(false);
        // filter transactions by week
        const weekTransactions = response.filter((transaction) => {
          const transactionDate = new Date(transaction.date);
          const today = new Date();
          const weekAgo = new Date();
          weekAgo.setDate(today.getDate() - 7);
          return transactionDate > weekAgo && transactionDate < today;
        });
        setTransactions(weekTransactions);
      };
      getTransactions();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const data = [];
  transactions.forEach((transaction) => {
    const category = transaction.category[0];
    let amountin$ = transaction.amount;
    const index = data.findIndex((item) => item.category === category);
    if (index === -1) {
      data.push({ category, amountin$ });
    } else {
      data[index].amountin$ += amountin$;
    }
  });

  useEffect(() => {
    let total = 0;
    transactions.forEach((transaction) => {
      total += transaction.amount;
      total = Math.round(total * 100) / 100;
    });
    setWeekSpending(total);
  }, [transactions]);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Current Week's Transactions
            </Typography>
            <IconButton color="inherit">
              <AccountCircleIcon />
              <Typography variant="body2">
                &nbsp;Welcome, {localStorage.getItem("name")}
              </Typography>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          {isLoading ? (
            <TransactionsSkeleton />
          ) : (
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 240,
                    }}
                  >
                    <Chart timeLimit="Current Week's" data={data} />
                  </Paper>
                </Grid>
                {/* Current Week Transactions */}
                <Grid item xs={12} md={4} lg={3}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 240,
                    }}
                  >
                    <Spending
                      title="Current Week's Spending"
                      spending={weekSpending}
                      timePrefix="uptil"
                    />
                  </Paper>
                </Grid>
                {/* This week's Transactions */}
                <Grid item xs={12}>
                  <Paper
                    sx={{ p: 2, display: "flex", flexDirection: "column" }}
                  >
                    <CurrentWeekTransactions
                      transactions={transactions}
                      isButton={true}
                      timePeriod="Current Week's"
                    />
                  </Paper>
                </Grid>
              </Grid>
              <Copyright sx={{ pt: 4 }} />
            </Container>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function CurrentWeekTransactionsScreen() {
  return <CurrentWeekTransactionsContent />;
}
