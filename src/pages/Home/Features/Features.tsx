import { Box, Grid } from "@mui/material";
import features from "../../../assets/features.svg";
import Heading from "../../../components/Text/Heading";
import { featuresList } from "./constants";
import Feature from "./Feature/Feature";
import { featuresSectionHeading } from "./styles";

const Features = () => {
  return (
    <Box padding="0 7rem 6rem">
      <Heading
        sx={featuresSectionHeading}
        textAlign="center"
        mb={10}
        p={"0 25%"}
      >
        Mixland helps you build beautiful website
      </Heading>
      <Grid container justifyContent="center" gap={6}>
        <Grid item>
          {featuresList.map((feature, index) => (
            <Feature
              key={`features-list-item-${index}`}
              featureName={feature.featureName}
              isActive={index === 0}
            />
          ))}
        </Grid>
        <Grid item>
          <img src={features} alt="features" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
