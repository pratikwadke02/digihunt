import { Box, Container, Typography, Grid } from "@mui/material";
import CardCustom from "../../components/CardCustom";
// import { images } from "../../constants/";

const Home = () => {
  const Heading = "DigiHunt";
  const Details = [
    "Lorem, ipsum dolor.",
    "Lorem, ipsum dolor.",
    "Lorem, ipsum dolor.",
    "Lorem, ipsum dolor.",
  ];
  const Prizes = [
    "Lorem, ipsum dolor.",
    "Lorem, ipsum dolor.",
    "Lorem, ipsum dolor.",
  ];
  const Rules = ["Lorem, ipsum dolor.", "Lorem, ipsum dolor."];
  const Venue = ["Lorem, ipsum dolor.", "Lorem, ipsum dolor."];

  return (
    <Container
      disableGutters
      maxWidth='full'
      sx={{ bgcolor: "background.main" }}>
      <Box
        className='header'
        sx={{ bgcolor: "lime", pb: "5rem" }} // dummy styles replace with banner image
        component='header'>
        <Typography variant='h1' fontWeight='boldest' align='right'>
          {Heading}
        </Typography>
      </Box>

      <Grid container columns={2} gap='3rem' p='2rem' justifyContent='center'>
        <CardCustom title='Details' content={Details} />
        <CardCustom title='Prizes' content={Prizes} />
        <CardCustom title='Rules' content={Rules} />
        <CardCustom title='Venue' content={Venue} />
      </Grid>
    </Container>
  );
};

export default Home;
