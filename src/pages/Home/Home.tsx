import { Box } from "@mui/material";
import Navbar from "../../components/Navbar";
import Clients from "./Clients";
import Features from "./Features";
import HeroSection from "./HeroSection";
import InfoImageSection from "./InfoImageSection";
import WritingTools from "./WritingTools";

const Home = () => {
  return (
    <Box sx={{ background: "#12141D", color: "#FAFAFA" }}>
      <Navbar />
      <HeroSection />
      <Box sx={{ border: ".063rem solid #252835", marginBottom: "7rem" }} />
      <Clients />
      <InfoImageSection />
      <WritingTools />
      <Box sx={{ border: ".063rem solid #252835", marginBottom: "7rem" }} />
      <Features />
    </Box>
  );
};

export default Home;
