import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import PlaidLinkButton from "../Plaid/PlaidLinkButton";
import { useEffect } from "react";
import axios from "axios";
import { AxiosInstance } from "../../utils/AxiosInstance";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    // expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

export default function BanksList() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    console.log(isExpanded, expanded);
  };

  const [banks, setBanks] = useState([]);

  useEffect(() => {
    try {
      const getBanks = async () => {
        const response = await AxiosInstance.get(`/plaid/accounts`, {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        });
        setBanks(response.data);
      };
      getBanks();
    } catch (error) {
      console.log(error);
    }
  }, [banks]);

  let handleDelete = async (id) => {
    try {
      let isDelete = window.confirm(
        "Are you sure you want to delete this bank?"
      );
      if (isDelete) {
        await axios.delete(`/plaid/accounts/${id}`, {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        });
      }
      let rowIndex = banks.findIndex((obj) => obj.id === id);
      banks.splice(rowIndex, 1);
      setBanks([...banks]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <Grid container style={{ marginBottom: "1em" }}>
        <Grid item xs={9}>
          <Typography variant="h4">{banks.length} Banks Linked</Typography>
          {banks.length === 0 && (
            <Typography variant="body1">
              You have no banks linked. Click the button below to link a bank.
            </Typography>
          )}
        </Grid>
        <Grid item xs={3}>
          <PlaidLinkButton />
        </Grid>
      </Grid>

      {banks.map((bank) => {
        return (
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            key={bank._id}
          >
            <AccordionSummary
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography style={{ flex: 1 }}>
                {bank.institutionName}
              </Typography>
              <Button
                variant="contained"
                color="error"
                size="small"
                onClick={() => handleDelete(bank._id)}
              >
                Remove account
              </Button>
            </AccordionSummary>
          </Accordion>
        );
      })}
    </Box>
  );
}
