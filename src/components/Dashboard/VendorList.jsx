import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { useState } from "react";
import { useEffect } from "react";
import { FetchTransactions } from "../../utils/FetchTransactions";
import VendorSkeleton from "../Skeleton/VendorSkeleton";

export default function Transactions(props) {
  const [transactions, setTransactions] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const getTransactions = async () => {
        const response = await FetchTransactions();
        setIsLoading(false);
        // get all vendors and amount spent for each vendor
        const vendors = response.reduce((acc, transaction) => {
          const { name, amount } = transaction;
          if (!acc[name]) {
            acc[name] = amount;
          } else {
            acc[name] += amount;
          }
          return acc;
        }, {});
        // convert the object to an array of objects
        const vendorsArray = Object.keys(vendors).map((vendor) => {
          return { name: vendor, amount: vendors[vendor] };
        });
        // sort the array by amount
        vendorsArray.sort((a, b) => b.amount - a.amount);
        // set the state of the transactions
        setTransactions([...vendorsArray]);
      };
      getTransactions();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      {isLoading ? (
        <VendorSkeleton />
      ) : (
        <>
          <Title>All Vendors</Title>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Vendor</strong>
                </TableCell>
                <TableCell>
                  <strong>Amount</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((row, id) => (
                <TableRow key={id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{`$${row.amount}`}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
    </>
  );
}
