import { Box, Grid } from "@mui/material";
import { footerLinks } from "./constants";
import LinksColumn from "./LinksColumn";

const Footer = () => {
  return (
    <Box padding="2rem 7rem 4rem">
      <Grid container gap={6}>
        {footerLinks.map((linkItem, index) => (
          <Grid item sm key={`footer-links-column-${index}`}>
            <LinksColumn title={linkItem.title} links={linkItem.links} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Footer;
