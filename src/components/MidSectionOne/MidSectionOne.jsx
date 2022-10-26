import React from "react";
import { Grid, Container } from "@mui/material";
import CardCustom from "../utils/CardCustom";

const MidSectionOne = (props) => {

    const {details, prizes, rules, venue} = props;

  return (
    <>
      <Container
        disableGutters
        maxWidth="full"
        sx={{ bgcolor: "background.main" }}
      >
        <Grid container columns={2} gap="3rem" p="2rem" justifyContent="center">
          <CardCustom title="Details" content={details} />
          <CardCustom title="Prizes" content={prizes} />
          <CardCustom title="Rules" content={rules} />
          <CardCustom title="Venue" content={venue} />
        </Grid>
      </Container>
    </>
  );
};

export default MidSectionOne;
