import { Box, Grid } from "@mui/material";
import Content from "../../../components/Text/Content";
import Heading from "../../../components/Text/Heading";
import { productPlans } from "./constants";
import Plan from "./Plan/";
import {
  planCardWrapper,
  plansHeading,
  plansSectionWrapper,
  plansSubHeading,
} from "./styles";

const Plans = () => {
  return (
    <Box sx={plansSectionWrapper}>
      <Heading sx={plansHeading} textAlign="center" padding="0 30%">
        Make the wise decision for your business
      </Heading>
      <Content sx={plansSubHeading} textAlign="center">
        Choose from our affordable 3 packages
      </Content>
      <Grid container gap={4}>
        {productPlans.map((plan, index) => (
          <Grid item sm key={`plans-list-item-${index}`} sx={planCardWrapper}>
            <Plan
              planName={plan.planName}
              price={plan.price}
              packageFeatures={plan.packageFeatures}
              packageType={plan.packageType}
              isActive={index === 1}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Plans;
