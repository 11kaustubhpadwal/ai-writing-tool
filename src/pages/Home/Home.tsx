import { Box } from "@mui/material";
import Navbar from "../../components/Navbar";
import Clients from "./Clients";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <Box sx={{ background: "#12141D", color: "#FAFAFA" }}>
      <Navbar />
      <HeroSection />
      <Box sx={{ border: ".063rem solid #252835", marginBottom: "7rem" }} />
      <Clients />
    </Box>
  );
};

export default Home;
