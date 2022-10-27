import Footer from "../../components/Footer/Footer";
import HeadBanner from "../../components/HeadBanner/HeadBanner";
import MidSectionOne from "../../components/MidSectionOne/MidSectionOne";
import MidSectionTwo from "../../components/MidSectionTwo/MidSectionTwo";
import { Container } from "@mui/material";

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
      <HeadBanner heading={Heading} />
      <MidSectionOne Content={{ Details, Prizes, Rules, Venue }} />
      <MidSectionTwo />
      <Footer />
    </Container>
  );
};

export default Home;
