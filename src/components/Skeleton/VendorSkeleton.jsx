import { Container, Skeleton } from "@mui/material";
import React from "react";

const TransactionsSkeleton = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Skeleton variant="rectangular" animation="wave" height={600} />
      </Container>
    </>
  );
};

export default TransactionsSkeleton;
