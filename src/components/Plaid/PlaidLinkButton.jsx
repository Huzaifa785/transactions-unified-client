import { Button } from "@mui/material";
import React, { useCallback, useState, useEffect } from "react";

import { usePlaidLink } from "react-plaid-link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";

const PlaidLinkButton = () => {
  const [token, setToken] = useState(null);

  // get link_token from your server when component mounts
  useEffect(() => {
    try {
      const createLinkToken = async () => {
        const response = await fetch("/api/plaid/create_link_token", {
          method: "POST",
        });
        const { link_token } = await response.json();
        setToken(link_token);
      };
      createLinkToken();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onSuccess = useCallback(async (public_token, metadata) => {
    try {
      await axios.post(
        "/api/plaid/accounts/add",
        // send public_token to server
        { public_token, metadata },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(public_token, metadata);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const { open, ready } = usePlaidLink({
    token,
    onSuccess,
    // onEvent
    // onExit
  });

  return (
    <Button
      variant="contained"
      endIcon={<ArrowForwardIosIcon />}
      onClick={() => open()}
      disabled={!ready}
    >
      Add bank account
    </Button>
  );
};

export default PlaidLinkButton;
