import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

export default function Spending(props) {

  return (
    <React.Fragment>
      <Title>{props.title}</Title>
      <Typography component="p" variant="h4">
        ${props.spending}     
        </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {props.timePrefix}{" "}
        {
          new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })
        }
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Balance
        </Link>
      </div>
    </React.Fragment>
  );
}
