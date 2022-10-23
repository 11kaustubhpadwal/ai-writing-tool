import { Box, Button, Grid } from "@mui/material";
import Content from "../../../../components/Text/Content";
import Heading from "../../../../components/Text/Heading";
import { pxToRem } from "../../../../utils/pxToRem";
import {
  includedFeaturesText,
  packageFeatureText,
  packageTypeText,
  planButton,
  planButtonText,
  planNameText,
  planPriceMonthText,
  planPriceText,
} from "./styles";
import { PlanType } from "./types";

const Plan = ({
  planName,
  price,
  packageFeatures,
  packageType,
  isActive,
}: PlanType) => {
  return (
    <Box>
      <Content sx={planNameText}>{planName}</Content>
      <Grid container sx={{ marginBottom: pxToRem(14) }} alignItems="end">
        <Grid item>
          <Heading sx={planPriceText}>{price}</Heading>
        </Grid>
        <Grid item>
          <Heading sx={planPriceMonthText}>/month</Heading>
        </Grid>
      </Grid>
      <Content sx={packageTypeText}>{packageType}</Content>
      <Content sx={includedFeaturesText}>What’s included:</Content>
      {packageFeatures.map((feature, index) => (
        <Content key={`package-feature-item-${index}`} sx={packageFeatureText}>
          {feature.name}
        </Content>
      ))}
      <Button fullWidth sx={planButton(isActive)}>
        <Content sx={planButtonText}>Get Started</Content>
      </Button>
    </Box>
  );
};

export default Plan;
