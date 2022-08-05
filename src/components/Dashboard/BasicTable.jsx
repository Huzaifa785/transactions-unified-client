import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function BasicTable() {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Name</strong>
            </TableCell>
            <TableCell>
              <strong>Category</strong>
            </TableCell>
            <TableCell>
              <strong>Amount</strong>
            </TableCell>
            <TableCell>
              <strong>Date</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Uber 072515 SF**POOL** </TableCell>
            <TableCell>TravelTaxi</TableCell>
            <TableCell>$6.33</TableCell>
            <TableCell>2022-07-31</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Uber 072515 SF**POOL** </TableCell>
            <TableCell>TravelTaxi</TableCell>
            <TableCell>$6.33</TableCell>
            <TableCell>2022-07-31</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Uber 072515 SF**POOL** </TableCell>
            <TableCell>TravelTaxi</TableCell>
            <TableCell>$6.33</TableCell>
            <TableCell>2022-07-31</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Uber 072515 SF**POOL** </TableCell>
            <TableCell>TravelTaxi</TableCell>
            <TableCell>$6.33</TableCell>
            <TableCell>2022-07-31</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Uber 072515 SF**POOL** </TableCell>
            <TableCell>TravelTaxi</TableCell>
            <TableCell>$6.33</TableCell>
            <TableCell>2022-07-31</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
