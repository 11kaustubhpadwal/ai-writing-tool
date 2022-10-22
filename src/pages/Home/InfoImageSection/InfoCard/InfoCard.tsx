import { Box, Button } from "@mui/material";
import Content from "../../../../components/Text/Content";
import Heading from "../../../../components/Text/Heading";
import { infoCardButton, infoCardContent, infoCardTitle } from "./styles";
import { InfoCardType } from "./types";

const InfoCard = ({ title, content }: InfoCardType) => {
  return (
    <Box>
      <Heading sx={infoCardTitle}>{title}</Heading>
      <Content sx={infoCardContent}>{content}</Content>
      <Button sx={infoCardButton}>
        <Content>Start 14 Days Free Trial</Content>
      </Button>
    </Box>
  );
};

export default InfoCard;
