import React from "react";
import { Grid } from "@mui/material";
import CardCustom from "../utils/CardCustom";

const MidSectionOne = props => {
  const { Details, Prizes, Rules, Venue } = props.Content;

  return (
    <Grid container columns={2} gap='3rem' p='2rem' justifyContent='center'>
      <CardCustom title='Details' content={Details} />
      <CardCustom title='Prizes' content={Prizes} />
      <CardCustom title='Rules' content={Rules} />
      <CardCustom title='Venue' content={Venue} />
    </Grid>
  );
};

export default MidSectionOne;
