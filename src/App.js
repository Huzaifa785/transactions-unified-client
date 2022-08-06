import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import Landing from "./components/Landing";

import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import Dashboard from "./screens/Dashboard";
import TransactionsScreen from "./screens/TransactionsScreen";
import VendorScreen from "./screens/Vendor";
import BanksScreen from "./screens/Banks";
import CurrentWeekTransactionsScreen from "./screens/CurrentWeekTransactions";
import CurrentMonthTransactionsScreen from "./screens/CurrentMonthTransactions";
import CurrentYearTransactionsScreen from "./screens/CurrentYearTransactions";

import PrivateRoutes from "./utils/PrivateRoute";

const App = () => {
  return (
    <Box>
      <Routes>

        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<TransactionsScreen />} />
          <Route path="/vendors" element={<VendorScreen />} />
          <Route path="/banks" element={<BanksScreen />} />

          <Route
            path="/current-week-transactions"
            element={<CurrentWeekTransactionsScreen />}
          />
          <Route
            path="/current-month-transactions"
            element={<CurrentMonthTransactionsScreen />}
          />
          <Route
            path="/current-year-transactions"
            element={<CurrentYearTransactionsScreen />}
          />
        </Route>

        <Route path="/" element={<Landing />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Box>
  );
};

export default App;
