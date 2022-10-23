import { Box } from "@mui/material";
import Navbar from "../../components/Navbar";
import Clients from "./Clients";
import Features from "./Features";
import HeroSection from "./HeroSection";
import InfoImageSection from "./InfoImageSection";
import Line from "./Line";
import Plans from "./Plans";
import { wrapper } from "./styles";
import Testimonials from "./Testimonials";
import WritingTools from "./WritingTools";

const Home = () => {
  return (
    <Box sx={wrapper}>
      <Navbar />
      <HeroSection />
      <Line />
      <Clients />
      <InfoImageSection />
      <WritingTools />
      <Line />
      <Features />
      <Testimonials />
      <Line />
      <Plans />
    </Box>
  );
};

export default Home;
