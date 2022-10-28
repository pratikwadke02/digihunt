import React from "react";
import { Grid, Typography } from "@mui/material";
import CardCustom from "../utils/CardCustom";

const MidSectionOne = () => {
  return (
    <Grid
      container
      flexDirection='column'
      className='cards'
      component='section'>
      <CardCustom textAlign='center'>
        <Typography variant='h2'>
          DJSCE-ACM is back with it's <br /> ✨ DIGIHUNT 3.0 ✨
        </Typography>
        <br />
        <Typography variant='h4'>
          A thrilling Treasure Hunt with a technical twist and an opportunity to
          win some exciting prizes worth <strong>Rs.10,000</strong> 🏆💰
        </Typography>
      </CardCustom>
      <CardCustom textAlign='center'>
        <Typography variant='h4'>
          🚨Register in a team of <b>2-3</b> members for this exciting mission📈{" "}
          and make some unforgettable memories as you get a chance to save
          millions of lives👨🏻‍⚕️
        </Typography>
      </CardCustom>
      <CardCustom>
        <Typography variant='h4'>
          <strong>Date:</strong> 1st November 2022
        </Typography>
        <Typography variant='h4'>
          <strong>Time:</strong> 2 pm onwards
        </Typography>
        <Typography variant='h4'>
          <strong>Place:</strong> 6th Floor, Computer Department
        </Typography>
      </CardCustom>
      {/* <CardCustom>
        <Typography>
          Contact Us: &nbsp;
          <Link href='https://www.instagram.com/p/CkLtTzRy1Ey/?utm_source=ig_web_copy_link'>
            Instagram
          </Link>
        </Typography>
      </CardCustom> */}
    </Grid>
  );
};

export default MidSectionOne;
