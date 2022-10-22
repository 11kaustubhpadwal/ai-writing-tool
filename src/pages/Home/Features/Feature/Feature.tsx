import { Box } from "@mui/material";
import Content from "../../../../components/Text/Content";
import { featureWrapper } from "./styles";
import { FeatureType } from "./types";

const Feature = ({ featureName, isActive }: FeatureType) => {
  return (
    <Box sx={featureWrapper(isActive)}>
      <Content>{featureName}</Content>
    </Box>
  );
};

export default Feature;
