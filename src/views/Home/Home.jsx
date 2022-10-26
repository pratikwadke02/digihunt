import { Box, Container, Typography, Grid } from "@mui/material";
import CardCustom from "../../components/utils/CardCustom";
import Footer from '../../components/Footer/Footer'
import HeadBanner from "../../components/HeadBanner/HeadBanner";
import MidSectionOne from "../../components/MidSectionOne/MidSectionOne";
import MidSectionTwo from "../../components/MidSectionTwo/MidSectionTwo";
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
    <>
    <HeadBanner heading={Heading} />
    <MidSectionOne details={Details} prizes={Prizes} rules={Rules} venue={Venue} />
    <MidSectionTwo />
    <Footer />
    </>
  );
};

export default Home;
