import { Box, Grid } from "@mui/material";
import Content from "../../../../components/Text/Content";
import { pxToRem } from "../../../../utils/pxToRem";
import {
  clientNameText,
  hashtagText,
  socialMediaLinkText,
  testimonialCardWrapper,
  testimonialText,
} from "./styles";
import { TestimonialCardType } from "./types";

const TestimonialCard = ({
  avatar,
  clientName,
  company,
  socialMediaLink,
  testimonial,
  hashtag,
}: TestimonialCardType) => {
  return (
    <Box padding={`${pxToRem(28)} ${pxToRem(20)}`} sx={testimonialCardWrapper}>
      <Grid container gap={2} marginBottom={pxToRem(19)}>
        <Grid item>
          <img src={avatar} alt="avatar" />
        </Grid>
        <Grid item sm>
          <Content sx={clientNameText}>{clientName}</Content>
          <Content sx={socialMediaLinkText}>{socialMediaLink}</Content>
        </Grid>
        <Grid item>
          <img src={company} alt="company" />
        </Grid>
      </Grid>
      <Content sx={testimonialText}>{testimonial}</Content>
      <Content sx={hashtagText}>{hashtag}</Content>
    </Box>
  );
};

export default TestimonialCard;
