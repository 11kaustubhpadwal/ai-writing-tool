import { Grid } from "@mui/material";
import { clientLogos } from "./constants";

const ClientsList = () => {
  return (
    <Grid
      container
      gap={8}
      sx={{ opacity: ".5" }}
      padding="0 17%"
      justifyContent="center"
    >
      {clientLogos.map((logo, index) => (
        <Grid item key={`clients-list-logo-item-${index}`}>
          <img src={logo.icon} alt="client-logo" />
        </Grid>
      ))}
    </Grid>
  );
};

export default ClientsList;
