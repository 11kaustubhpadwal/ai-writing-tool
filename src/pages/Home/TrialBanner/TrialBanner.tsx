import { Box, Grid } from "@mui/material";
import Content from "../../../components/Text/Content";
import Heading from "../../../components/Text/Heading";
import { bannerText, bannerWrapper, buttonText, buttonWrapper } from "./styles";

const TrialBanner = () => {
  return (
    <Box padding="0rem 7rem 4rem">
      <Grid container sx={bannerWrapper} alignItems="center">
        <Grid item>
          <Heading sx={bannerText}>
            It will help you improve your writing & bring ideas more clearly.
          </Heading>
        </Grid>
        <Grid item>
          <Box sx={buttonWrapper}>
            <Content sx={buttonText}>Start 14 Days Free Trial</Content>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TrialBanner;
