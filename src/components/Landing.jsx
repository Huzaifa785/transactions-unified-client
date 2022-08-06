import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";

const theme = createTheme();

export default function Landing() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <CssBaseline />
      <main>
        <Container
          maxWidth="sm"
          // bring all content to the center of the page
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "85vh",
            bgcolor: "background.paper",
          }}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Transactions Unified
          </Typography>
          <Typography align="center" color="text.secondary" paragraph>
            Transactions Unified is a platform that displays all the
            transactions of yours from different bank accounts on a single
            dashboard! With the help of this application you can track your
            transactions daily, weekly, monthly, or however you want. This will
            help you in managing your money effectively!
          </Typography>
          <Typography align="center" color="text.secondary">
            <a
              href="https://plaid.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Built using Plaid API
            </a>
          </Typography>
          <Typography align="center" style={{ fontWeight: "bold" }}>
            (This application is currently using the sandbox environment of
            Plaid API)
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Link style={{ textDecoration: "none" }} to="/register">
              <Button variant="contained">Register</Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/login">
              <Button variant="outlined">Login</Button>
            </Link>
          </Stack>
        </Container>
      </main>
    </ThemeProvider>
  );
}
