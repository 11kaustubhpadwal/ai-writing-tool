import { Box, Grid } from "@mui/material";
import infoCard1 from "../../../assets/info-card-1.svg";
import infoCard2 from "../../../assets/info-card-2.svg";
import InfoCard from "./InfoCard";

const InfoImageSection = () => {
  return (
    <Box mt={8} padding="0 7rem">
      <Grid container gap={6}>
        <Grid item sm>
          <img src={infoCard1} alt="info-card" />
        </Grid>
        <Grid item sm>
          <InfoCard
            title="Create content efficiently and quickly with great AI writing tools"
            content="150k+ users. No Credit Card Required. Pro designs and writing at no cost. Start for free. Ai Writer Tool | Generate text for ecom, social media, website, sales, blogs etc."
          />
        </Grid>
      </Grid>
      <Grid container mt={12} gap={6}>
        <Grid item sm>
          <InfoCard
            title="Write what you want to convey through clear, & authentic writing"
            content="AI-Writer is the most accurate content generation platform and writing tool that helps you transform your text into a completely personalized."
          />
        </Grid>
        <Grid item sm>
          <img src={infoCard2} alt="info-card" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default InfoImageSection;
