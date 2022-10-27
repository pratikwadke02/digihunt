import React from "react";
import { Box, Typography } from "@mui/material";
import { images } from "../../constants";

const HeadBanner = () => {
  return (
    <Box>
      <img
        src={images.head_banner}
        alt='Digihunt Head Banner'
        style={{ width: "100%" }}
      />

      <Typography
        variant='h2'
        color='text.main'
        align='center'
        bgcolor='background.default'
        p='.5em'
        component='blockquote'>
        &#10077; Don’t bind yourself within a limit, pull out your guns and face
        the challenges🏁 &#10078;
      </Typography>
    </Box>
  );
};

export default HeadBanner;
