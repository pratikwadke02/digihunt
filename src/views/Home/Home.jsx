import Footer from "../../components/Footer/Footer";
import HeadBanner from "../../components/HeadBanner/HeadBanner";
import MidSectionOne from "../../components/MidSectionOne/MidSectionOne";
import MidSectionTwo from "../../components/MidSectionTwo/MidSectionTwo";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <Container
      disableGutters
      maxWidth='full'
      sx={{ bgcolor: "background.main" }}>
      <HeadBanner />
      <MidSectionOne />
      <MidSectionTwo />
      <Footer />
    </Container>
  );
};

export default Home;
