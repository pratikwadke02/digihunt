import React from 'react'
import { Container, Box, Typography } from '@mui/material';

const HeadBanner = (props) => {

    const {heading} = props;

  return (
    <>
    <Container
      disableGutters
      maxWidth='full'
      sx={{ bgcolor: "background.main" }}>
      <Box
        className='header'
        sx={{ bgcolor: "lime", pb: "5rem" }} // dummy styles replace with banner image
        component='header'>
        <Typography variant='h1' fontWeight='boldest' align='right'>
          {heading}
        </Typography>
      </Box>
      </Container>
    </>
  )
}

export default HeadBanner
