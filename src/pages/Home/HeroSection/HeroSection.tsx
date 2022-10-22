import { Box, Button, Grid } from "@mui/material";
import play from "../../../assets/play.svg";
import Content from "../../../components/Text/Content";
import Heading from "../../../components/Text/Heading";
import {
  heroButton,
  heroText,
  heroTextMain,
  heroTextSecondary,
  heroTextTertiary,
  heroTextUnderline,
  playWrapper,
} from "./styles";

const HeroSection = () => {
  return (
    <Box textAlign="center" margin="7rem 0" padding="0 35%">
      <Heading sx={heroText}>Write better content for your</Heading>
      <Heading sx={heroTextMain}>Facebook Ads</Heading>
      <Box sx={heroTextUnderline} />
      <Content sx={heroTextSecondary}>
        Artificial intelligence writting tool helps you create blogs, social
        media websites and much more.
      </Content>
      <Button sx={heroButton}>
        <Content sx={heroTextTertiary}>Start 14 Days Free Trial</Content>
      </Button>
      <Grid container gap={1} sx={playWrapper}>
        <Grid item>
          <img src={play} alt="play" />
        </Grid>
        <Grid item>
          <Content sx={heroTextTertiary}>Watch A Demo</Content>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
