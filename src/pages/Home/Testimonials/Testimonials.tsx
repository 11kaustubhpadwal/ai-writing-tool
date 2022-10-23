import { Box, Grid } from "@mui/material";
import Content from "../../../components/Text/Content";
import Heading from "../../../components/Text/Heading";
import { testimonialsList } from "./constants";
import {
  testimonialHeading,
  testimonialsSectionWrapper,
  testimonialSubheading,
} from "./styles";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <Box sx={testimonialsSectionWrapper}>
      <Heading textAlign="center" sx={testimonialHeading}>
        What our customers say
      </Heading>
      <Content sx={testimonialSubheading} textAlign="center">
        Read why thousands of marketers, writers, and entrepreneurs love us so
        much.
      </Content>
      <Grid container>
        {testimonialsList.map((testimonial, index) => (
          <Grid
            item
            key={`testimonial-list-item-${index}`}
            sm={3}
            pr={4}
            pb={4}
          >
            <TestimonialCard
              avatar={testimonial.avatar}
              clientName={testimonial.clientName}
              company={testimonial.company}
              socialMediaLink={testimonial.socialMediaLink}
              testimonial={testimonial.testimonial}
              hashtag={testimonial.hashtag}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
