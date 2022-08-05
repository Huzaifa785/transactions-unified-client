import { Container, Grid, Skeleton } from "@mui/material";
import React from "react";

const TransactionsSkeleton = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <Skeleton variant="rectangular" animation="wave" height={200} />
          </Grid>
          <Grid item xs={3}>
            <Skeleton variant="rectangular" animation="wave" height={200} />
          </Grid>
          <Grid item xs={12}>
            <Skeleton variant="rectangular" animation="wave" height={600} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default TransactionsSkeleton;
